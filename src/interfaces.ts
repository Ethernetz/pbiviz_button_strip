import powerbi from "powerbi-visuals-api";
import * as enums from "./enums"
import { SelectionManagerUnbound } from "./SelectionManagerUnbound";

export type Datapoint = DatapointDatabound | DatapointFixed | DatapointMeasures

export interface DatapointDatabound extends DatapointCommon{
    iconValue: powerbi.PrimitiveValue,
    selectionId: powerbi.visuals.ISelectionId,
}

export interface DatapointFixed extends DatapointCommon{
    iconValue: powerbi.PrimitiveValue,
}

export interface DatapointMeasures extends DatapointCommon{
    measureValue: powerbi.PrimitiveValue
}

interface DatapointCommon {
    value: powerbi.PrimitiveValue,
}

export interface propertyStateName {
    all: string,
    selected: string,
    unselected: string,
    hover: string
}

export interface propertyStateValue {
    all: string | number,
    selected: string | number,
    unselected: string | number,
    hover: string | number,
}

export interface propertyStatesInput extends propertyStateValue {
    state: enums.State
}

export interface propertyStatesOutput extends propertyStateValue {
    didChange: boolean
}

export interface containerProperties{
    xPos: number,
    yPos: number,
    width: number,
    height: number
}

export interface stateIds{
    hoveredIdKey: string,
    selectionManagerUnbound: SelectionManagerUnbound,
    hoveredIndexUnbound: number
}

export interface Handle{
    buttonXPos: number,
    buttonYPos: number,
    buttonWidth: number,
    buttonHeight: number,
    xPos: number,
    yPos: number,
    axis: string,
    propName: string,
    disp: number,
    z: number,
    handleFocused: boolean,
}