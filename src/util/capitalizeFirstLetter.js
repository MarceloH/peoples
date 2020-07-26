/*
Deixa a primera letra de uma palavra maíuscula
 
Ex: exemplo -> Exemplo
*/
const capitalizeFirstLetter = string => {
	return string[0].toUpperCase() + string.slice(1);
}

export default capitalizeFirstLetter;