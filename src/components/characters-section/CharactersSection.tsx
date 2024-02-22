import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { CharactersList, Loader, NotFoundWrapper, SectionWrapper, Title, rotation } from "./styledComponents";

import notfound from "../../assets/notfound.png";

import { CharacterCard } from "../character-card/characterCard";
import { ModalWrapper } from "../modal-wrapper/ModalWrapper";
import { CharacterDetails } from "../character-details/CharacterDetails";
import { GET_CHARACTERS_WITH_FILTERS } from "src/graphql/queries/getFilteredCharacters";
import { FilterForm } from "../filter-form/FilterForm";

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

  const [getCharactersWithFilters, { data: charactersWithAllFilters, loading }] = useLazyQuery(
    GET_CHARACTERS_WITH_FILTERS,
    {
      variables: {
        name: filterValues.name,
        status: filterValues.status,
        species: filterValues.species,
        gender: filterValues.gender,
        type: filterValues.type,
      },
    },
  );

  const updateFilters = (data: TFilterValues) => setFilterValues(data);

  const filteredData = charactersWithAllFilters?.characters.results || [];

  useEffect(() => {
    getCharactersWithFilters();
  }, [filterValues]);
  console.log(filteredData);
  return (
    <SectionWrapper>
      <FilterForm updateFilters={updateFilters} />
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
    </SectionWrapper>
  );
};
