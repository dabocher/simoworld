import { v } from "convex/values";

export const simulatorUnionValues = v.union(
  v.literal("ACC"),
  v.literal("Assetto Corsa"),
  v.literal("Automobilista 2"),
  v.literal("Dirt Rally 2"),
  v.literal("F1 23"),
  v.literal("Gran Turismo 7"),
  v.literal("iRacing"),
  v.literal("RaceRoom"),
  v.literal("rFactor 2")
);

export const carCategoryUnionValues = v.union(
  v.literal("GT2"),
  v.literal("GT3"),
  v.literal("GT4"),
  v.literal("Porsche Cup"),
  v.literal("Otra")
);

export const eventTypeUnionValues = v.union(
  v.literal("Campeonato"),
  v.literal("Carrera"),
  v.literal("Reto"),
  v.literal("Resistencia")
);
