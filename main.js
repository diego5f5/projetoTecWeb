		
		var nome;
		var email;
		var num = 0;

		function escrever(quadro) {

			info = "Nº do Usuário: " + (++num) + "\n";
			info += "Nome: " + nome + "\n";
			info += "E-mail: " + email + "\n\n";
			quadro.value += info;
			nome = "";
			email = "";

		}

		function confirmadados(quadro){

			if ((nome == undefined) || 
				(nome == null) || 
				(nome == "") || 
				(email == undefined) || 
				(email == null) || 
				(email == "")) {
				confirm("Nome e E-mail não podem ficar em branco !")
			}
			else{
				return escrever(quadro);
			}
		}

		function salvaXML(quadro){


			var aux = (quadro.value);
			var meublob = new Blob([aux], {type: "text/html;charset=utf-8"});
    		saveAs(meublob, "Cadastro.txt");

		}

		function ValidaSave(quadro){

			if (quadro.value == "") {
				alert("Para salvar um arquivo alguma informação deve ser gravada antes !");
			}
			else{
				salvaXML(quadro);
			}

		}

		function limpaCadastro(){

			document.getElementById('textocaixa').value="";
			num = 0;
			alert("O cadastro foi limpo !");

		}