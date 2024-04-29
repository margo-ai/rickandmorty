import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { CharactersList, Loader, NotFoundWrapper, SectionWrapper, Title } from "./styledComponents";

import { Pagination } from "@mui/material";

import notfound from "../../assets/notfound.png";

import { CharacterCard } from "../CharacterCard";
import { ModalWrapper } from "../ModalWrapper";
import { CharacterDetails } from "../CharacterDetails";
import { GET_CHARACTERS_WITH_FILTERS } from "src/graphql/queries/getFilteredCharacters";
import { FiltersForm } from "../FiltersForm";

type TCharacterInfo = {
  id?: string;
  name?: string;
  species?: string;
  status?: string;
  type?: string;
  gender?: string;
  image?: string;
  origin?: { name: string; type: string };
  location?: { name: string; dimension: string };
};

type TFilterValues = {
  name?: string;
  status?: string;
  gender?: string;
  type?: string;
  species?: string;
};

export const CharactersSection = () => {
  const [filterValues, setFilterValues] = useState<TFilterValues>({
    name: "",
    status: "",
    gender: "",
    type: "",
    species: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [getCharactersWithFilters, { data: charactersWithAllFilters, loading }] = useLazyQuery(
    GET_CHARACTERS_WITH_FILTERS,
    {
      variables: {
        name: filterValues.name,
        status: filterValues.status,
        species: filterValues.species,
        gender: filterValues.gender,
        type: filterValues.type,
        page: currentPage,
      },
    },
  );

  const updateFilters = (data: TFilterValues) => setFilterValues(data);

  const filteredData = charactersWithAllFilters?.characters.results || [];
  const pages = charactersWithAllFilters?.characters.info.pages || [];

  useEffect(() => {
    getCharactersWithFilters();
  }, [filterValues, currentPage]);
  console.log(pages);
  return (
    <SectionWrapper>
      <FiltersForm updateFilters={updateFilters} handlePage={setCurrentPage} />
      <Title>Characters List</Title>
      {!!loading ? (
        <Loader />
      ) : (
        <CharactersList>
          {filteredData.map(({ id, name, gender, species, status, image, origin, location, type }: TCharacterInfo) => (
            <ModalWrapper
              actionNode={<CharacterCard key={id} name={name} gender={gender} image={image} species={species} />}
            >
              {({ hide }) => (
                <CharacterDetails
                  data={{ name, gender, image, species, status, origin, location, type }}
                  onClose={hide}
                />
              )}
            </ModalWrapper>
          ))}
        </CharactersList>
      )}
      {filteredData.length === 0 && !loading ? (
        <NotFoundWrapper>
          <img src={notfound} />
        </NotFoundWrapper>
      ) : null}

      {filteredData.length != 0 && (
        <Pagination count={pages} page={currentPage} onChange={(_, number) => setCurrentPage(number)} />
      )}
    </SectionWrapper>
  );
};
