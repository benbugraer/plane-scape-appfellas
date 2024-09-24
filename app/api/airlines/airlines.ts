interface Airport {
  iata: string;
  icao?: string;
  nvls?: number;
  publicName: string;
}

const airports: Airport[] = [
  {
    iata: "7A",
    icao: "XRC",
    nvls: 5299,
    publicName: "Express Air Cargo",
  },
  {
    iata: "7E",
    icao: "AWU",
    nvls: 5124,
    publicName: "Sylt Air",
  },
  {
    iata: "7R",
    icao: "RLU",
    nvls: 5221,
    publicName: "Rusline",
  },
  {
    iata: "7W",
    icao: "WRC",
    nvls: 4927,
    publicName: "Wind Rose Aviation",
  },
  {
    iata: "8H",
    icao: "BGH",
    nvls: 232,
    publicName: "Balkan Holiday Airlines",
  },
  {
    iata: "8Q",
    icao: "OHY",
    nvls: 137,
    publicName: "Onur Air",
  },
  {
    iata: "8R",
    icao: "AIA",
    nvls: 5286,
    publicName: "Amelia",
  },
  {
    iata: "8W",
    icao: "PWF",
    nvls: 5231,
    publicName: "Private Wings Flugcharter GMBH",
  },
  {
    iata: "9W",
    icao: "JAI",
    nvls: 2481,
    publicName: "Jet Airways",
  },
  {
    iata: "A0",
    icao: "EFW",
    nvls: 5304,
    publicName: "BA EuroFlyer",
  },
  {
    iata: "A3",
    icao: "AEE",
    nvls: 386,
    publicName: "Aegean Airlines",
  },
  {
    iata: "A5",
    icao: "HOP",
    nvls: 5021,
    publicName: "HOP!",
  },
  {
    iata: "A9",
    icao: "TGZ",
    nvls: 16,
    publicName: "Georgian Airways",
  },
  {
    iata: "AA",
    icao: "AAL",
    nvls: 555,
    publicName: "American Airlines",
  },
  {
    iata: "AC",
    icao: "ACA",
    nvls: 54,
    publicName: "Air Canada",
  },
  {
    iata: "AD",
    icao: "AZU",
    nvls: 5211,
    publicName: "Azul Linhas Aereas Brasileiras",
  },
  {
    iata: "AF",
    icao: "AFR",
    nvls: 80,
    publicName: "Air France",
  },
  {
    iata: "AI",
    icao: "AIC",
    nvls: 712,
    publicName: "Air India",
  },
  {
    iata: "AM",
    icao: "AMX",
    nvls: 794,
    publicName: "Aeromexico",
  },
  {
    iata: "AP",
    icao: "LAV",
    nvls: 4987,
    publicName: "Alba Star",
  },
];

export default airports;
