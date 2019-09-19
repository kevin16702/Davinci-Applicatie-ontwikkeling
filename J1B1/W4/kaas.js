var kaas=prompt("is de kaas geel", "ja of nee");
if(kaas== "ja"){
	var gaten=prompt("heeft de kaas gaten", "ja of nee");
	if(gaten== "ja"){
		var duur=prompt("is de kaas belachelijk duur", "ja of nee");
		if(duur== "ja"){
		alert("de kaas is emmenthaler");
		}
	} 
	else if(gaten== "nee"){
		var hard=prompt("is de kaas zo hard as steen", "ja of nee")
		if(hard== "ja"){
			alert("de kaas is pamigiano reggiano")
		}
		else if(hard== "nee")
			alert("het is goudse kaas")
	}
}
else if(kaas== "nee"){
	var schimmel=prompt("heeft de kaas blauwe schimmels", "ja of nee");
	if(schimmel=="ja"){
		var korst=prompt("heeft de kaas een korst", "ja of nee");
		if(korst== "ja"){
			alert("de kaas is blue de rochbaron")
		}
		else if(korst=="nee"){
			alert("de kaas is Foume d'ambert")
		}
	}
	else if(schimmel== "nee"){
	var korst2=prompt("heeft de kaas een korst", "ja of nee")
	if(korst2== "ja"){
		alert("de kaas is camembert")
	}
	else if(korst2== "nee"){
		alert("de kaas is mozzarella")
	}	
	}
}