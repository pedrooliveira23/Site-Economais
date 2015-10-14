var mainApp = angular.module("mainApp", []);

mainApp.filter('percentage', ['$filter', function ($filter) {
return function (input, decimals) {
return $filter('number')(input, decimals) + '%';
};
}]);

mainApp.controller('taxasController', function($scope) {
	$scope.sortType     = 'nome';
   $scope.taxas = {
   		bancos: [
   		{nome: "CAIXA", nomenclatura: "Conta Universitária Caixa", saqueDepositoTotalServicos: 4, saqueDepositoQntGratuita: "NI", totalServicosExtrato: 2, qntGraisExtrato: "NI", totalExtratoMensal: 4, totalExtratoMensalGratis: 2, totalCheque: 12, totalChequeGratis: "NI", juros: 9.55, totalTransConta: 6, totalTransContaGratis: "NI", limCC: "R$ 700,00", limCE: "R$ 400,00", anuidadeCC: "R$ 130,00", condicoesAnuidade: "Desconto de 75% na 1a anuidade", condicoesUso: "Mantidas por até um ano após a conclusão do curso", valorCesta: "R$ 4,10"},
   		{nome: "BRADESCO", nomenclatura: "Bradesco Universitário", saqueDepositoTotalServicos: 4, saqueDepositoQntGratuita: 4, totalServicosExtrato: "-", qntGraisExtrato: '-', totalExtratoMensal: 2, totalExtratoMensalGratis: 2, totalCheque: 10, totalChequeGratis: 10, juros: 9.78, totalTransConta: 2, totalTransContaGratis: 2, limCC: "R$ 300,00", limCE: "R$ 300,00", anuidadeCC: "R$ 120,00", condicoesAnuidade: "Isenção nos primeiros 6 meses", condicoesUso: "Mantidas até a conclusão apenas", valorCesta: "R$ 5,00"},
   		{nome: "ITAÚ", nomenclatura: "MaxiConta Universitária itaú", saqueDepositoTotalServicos: 8, saqueDepositoQntGratuita: 4, totalServicosExtrato: 1, qntGraisExtrato: 8, totalExtratoMensal: 2, totalExtratoMensalGratis: 2, totalCheque: 10, totalChequeGratis: 10, juros: 10.85, totalTransConta: 15, totalTransContaGratis: 10, limCC: "R$ 1000,00", limCE: "R$ 1000,00", anuidadeCC: "NI", condicoesAnuidade: "Isenção nos primeiros 6 meses", condicoesUso: "Mantidas até a conclusão apenas", valorCesta: "R$ 4,60"},
   		{nome: "BANCO DO BRASIL", nomenclatura: "BB Conta Universitária", saqueDepositoTotalServicos: 4, saqueDepositoQntGratuita: 4, totalServicosExtrato: "-", qntGraisExtrato: '-', totalExtratoMensal: 'NI', totalExtratoMensalGratis: 2, totalCheque: 10, totalChequeGratis: 10, juros: 10.02, totalTransConta: 2, totalTransContaGratis: 2, limCC: "R$ 800,00", limCE: "R$ 800,00", anuidadeCC: "R$ 120,00", condicoesAnuidade: "1a anuidade - gratis", condicoesUso: "NI", valorCesta: "NI"},
   		{nome: "HSBC", nomenclatura: "Conta Universitária HSBC", saqueDepositoTotalServicos: 10, saqueDepositoQntGratuita: 6, totalServicosExtrato: 2, qntGraisExtrato: 2, totalExtratoMensal: 6, totalExtratoMensalGratis: 2, totalCheque: 10, totalChequeGratis: 10, juros: 13.29, totalTransConta: 27, totalTransContaGratis: 10, limCC: "R$ 500,00", limCE: "NI", anuidadeCC: "NI", condicoesAnuidade: "NI", condicoesUso: "NI", valorCesta: "R$ 4,90"},
   		{nome: "SANTANDER", nomenclatura: "Santander Conta Combinada", saqueDepositoTotalServicos: 4, saqueDepositoQntGratuita: 4, totalServicosExtrato: "-", qntGraisExtrato: '-', totalExtratoMensal: 4, totalExtratoMensalGratis: 2, totalCheque: 10, totalChequeGratis: 10, juros: 13.79, totalTransConta: 2, totalTransContaGratis: 2, limCC: "NI", limCE: "NI", anuidadeCC: "NI", condicoesAnuidade: "Uso pelo menos uma vez por mês na função crédito e fique livre da anuidade.", condicoesUso: "NI", valorCesta: "R$ 6,40"}
   		]
   };
});