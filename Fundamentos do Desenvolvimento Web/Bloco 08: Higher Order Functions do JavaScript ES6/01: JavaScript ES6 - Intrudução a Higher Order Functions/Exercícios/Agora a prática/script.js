const createEmail = (name) => {
  const email = name.toLowerCase().split(' ').join('_')
  return {
    nomeCompleto: name,
    email: `${email}@trybe.com`
    };
};

const newEmployees = (a) => {
  const employees = {
    id1: a('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: a('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: a('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const sortition = (number) => {
  const result = number == Math.round(Math.random() * (5-1) + 1) ? `Parabéns você ganhou` : `Tente novamente`;
  return result 
};

console.log(sortition(5))
console.log(newEmployees(createEmail));