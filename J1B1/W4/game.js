var opstaan=prompt("Hmmmm, zou ik gaan opstaan?", "ja of nee");
if(opstaan== "ja"){
    var douchen=prompt("zou ik mezelf gaan schoonmaken?", "ja of nee");
    if(douchen== "ja"){
        var ontbijt=prompt("hmmm, zou ik een eitje eten", "ja of nee");
        if(ontbijt== "ja"){
        alert("aaaah dat ei was niet goed meer, ik word ziek");
            var dokter=prompt("zou ik naar de dokter gaan", "ja of nee");
            if(dokter=="ja"){
                    alert("de dokter is redelijk heet, zou ik haar gaan versieren");
                    var versieren=prompt("versier de dokter");
                    if(versieren=="ja"){
                        alert("de dokters naam is rebecca, ze vraagt om naar haar te toe te gaan in de avond");
                        var date=prompt("ga je naar haar toe" , "ja of nee?");
                        if(date=="ja"){
                            alert("je arriveert bij haar huis", "je ruikt een vreemde lucht");
                            var deur=prompt("ga je naar binnen" , "ja of nee");
                            if(deur=="ja"){
                                var eten=prompt("het ziet  er lekker uit zeg zou ik dit gaan eten?", "ja of nee");
                                if(eten=="ja"){
                                    var wc=prompt("oof mijn buik, zou ik naar de wc gaan", "ja of nee");
                                    if(wc=="ja"){
                                        var teruggaan=prompt("zou ik teruggaan naar het eten", "ja of nee");
                                        if(teruggaan=="ja"){
                                            var slapen=prompt("ze wilt dat je blijft slapen", "blijf je slapen", "ja of nee");
                                            if(slapen=="ja"){
                                                alert("je trouwt met haar en je hebt 3 kinderen. Uiteindelijk sterven jullie samen");
                                            } else if(slapen== "nee"){
                                                alert("Rebecca word redelijk pissig en slaat je met een kandelaar, je bent op slag dood")
                                            }
                                        } else if(teruggaan== "nee"){
                                            alert("je rent naar buiten en denkt: hier heb ik geen zin in, daarna breek je je nek aangezien je struikelt")
                                        }
                                    } else if(wc== "nee"){
                                        alert("je struikelt maar overleeft, ze lacht je uit en kidnapt je")
                                    }
                                } else if(eten== "nee"){
                                    var mcdonalds=prompt("vragen of ze naar de mcdonalds wilt", "ja of nee")
                                    if(mcdonalds=="ja"){
                                        alert("je komt bij de mcdonalds en er word een aanslag gepleegd, je word op slag doodgeschoten.")
                                    }else if(mcdonalds=="nee"){
                                        alert("Je blijft toch bij haar eten, je trouwt en hebt kinderen")
                                    }
                                }
                            } else if(deur== "nee"){
                                alert("je loopt naar huis en word aangereden door een bus, maar je respawnt als neko")
                                var neko=prompt("trek je in bij een nekbaard", "ja of nee")
                                if(neko=="ja"){
                                    alert("de nekbaard, verrassend genoeg, zorgt goed voor je. Je trouwt met hem en hebt mutant kat mens babies.")
                                }else if(neko== "nee"){
                                    alert("je zwerft rond en word gekidnapt en vermoord")
                                }
                            }
                        } else if(date== "nee"){
                            alert("je raakt depressief voor je hele leven")
                        }
                    } else if(versieren== "nee"){
                        alert("je word uitgelachen door al je vrienden en raakt depressief")
                    }           
            } else if(dokter== "nee"){
                alert("je sterft aan ziektes")
            }
        } else if(ontbijt== "nee"){
            alert("je verhongert en sterft")
        }
    } else if(douchen== "nee"){
        alert("je stinkt en sterft aan schurft")
    }
} else if(opstaan== "nee"){
    var liggen=prompt("blijven liggen", "ja of nee")
    if(liggen== "ja"){
        var liggen2=prompt("blijven liggen", "ja of nee")
        if(liggen2== "ja"){
            var liggen3=prompt("blijven liggen", "ja of nee")
            if(liggen3== "ja"){
                var liggen4=prompt("blijven liggen", "ja of nee")
                if(liggen4== "ja"){
                    alert("je komt in een diepe winterslaap, en wordt wakker als de nieuwe dalai lama")
                }else if(liggen== "nee"){
                    alert("je staat te snel op, valt flauw en stikt in je braaksel")
                }
            }else if(liggen3== "nee"){
                alert("je staat te snel op, valt flauw en stikt in je braaksel")
            }
        }else if(liggen2== "nee"){
            alert("je staat te snel op, valt flauw en stikt in je braaksel")
        }


    }else if(liggen== "nee"){
        alert("je staat te snel op, valt flauw en stikt in je braaksel")
    }
}