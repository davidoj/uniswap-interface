/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WrappedTokenWithConditionsFragment
// ====================================================

export interface WrappedTokenWithConditionsFragment_position_conditions_question {
  __typename: "Question";
  id: string;
  title: string | null;
}

export interface WrappedTokenWithConditionsFragment_position_conditions_positions {
  __typename: "Position";
  collateralTokenAddress: string;
}

export interface WrappedTokenWithConditionsFragment_position_conditions {
  __typename: "Condition";
  id: string;
  oracle: string;
  questionId: string;
  outcomeSlotCount: number;
  resolved: boolean;
  question: WrappedTokenWithConditionsFragment_position_conditions_question | null;
  positions: WrappedTokenWithConditionsFragment_position_conditions_positions[] | null;
}

export interface WrappedTokenWithConditionsFragment_position_collection {
  __typename: "Collection";
  id: string;
  indexSets: any[];
}

export interface WrappedTokenWithConditionsFragment_position {
  __typename: "Position";
  id: string;
  conditions: WrappedTokenWithConditionsFragment_position_conditions[];
  collection: WrappedTokenWithConditionsFragment_position_collection;
}

export interface WrappedTokenWithConditionsFragment {
  __typename: "WrappedToken";
  id: string;
  position: WrappedTokenWithConditionsFragment_position;
}
