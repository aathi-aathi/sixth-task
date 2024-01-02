// Sample array of countries data (replace this with your actual data)
const countries = [
    { name: 'Country1', capital: 'Capital1', population: 150000, region: 'Asia', currency: 'USD', flag: 'Flag1.jpg' },
    { name: 'Country2', capital: 'Capital2', population: 250000, region: 'Europe', currency: 'EUR', flag: 'Flag2.jpg' },
    // Add more countries as needed
  ];
  
  // Get all the countries from Asia continent/region using the Filter function
  const asiaCountries = countries.filter(country => country.region === 'Asia');
  console.log('Countries in Asia:', asiaCountries);
  
  // Get all the countries with a population of less than 2 lakhs using the Filter function
  const lowPopulationCountries = countries.filter(country => country.population < 200000);
  console.log('Countries with population less than 2 lakhs:', lowPopulationCountries);
  
  // Print the details (name, capital, flag) using the forEach function
  console.log('Details of each country:');
  countries.forEach(country => {
    console.log(`Name: ${country.name}, Capital: ${country.capital}, Flag: ${country.flag}`);
  });
  
  // Print the total population of countries using the reduce function
  const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
  console.log('Total population of all countries:', totalPopulation);
  
  // Print the country that uses US dollars as currency
  const usDollarCountry = countries.find(country => country.currency === 'USD');
  if (usDollarCountry) {
    console.log('Country that uses US dollars:', usDollarCountry.name);
  } else {
    console.log('No country uses US dollars as currency.');
  }
  