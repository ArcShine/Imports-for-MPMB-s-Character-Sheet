var iFileName = "all_WotC_published.js";
var iFileName = "pub_20140818_PHB.js";
RequiredSheetVersion(12.999);
// This file adds all material from the Player's Handbook to MPMB's Character Record Sheet

// Define the source
SourceList.P={
	name : "Player's Handbook",
	abbreviation : "PHB",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/rpg_playershandbook",
	date : "2014/08/19"
};

// (sub)Races that are not in the SRD
RaceList["mountain dwarf"] = {
	regExpSearch : /^((?=.*(hylar|daewar))|((?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\b(mountain|shield)\b))).*$/i,
	name : "Mountain dwarf",
	sortname : "Dwarf, Mountain",
	source : ["P", 20],
	plural : "Mountain dwarves",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
	dmgres : ["Poison"],
	weaponprofs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	armor : [true, true, false, false],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (4' + 2d4\")",
	weight : " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
	weightMetric : " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
	improvements : "Mountain Dwarf: +2 Strength, +2 Constitution;",
	scores : [2, 0, 2, 0, 0, 0],
	trait : "Mountain Dwarf (+2 Strength, +2 Constitution)\n\nStonecunning:\n   Whenever I make an Intelligence (History) check related to the origin of stonework, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus."
};
RaceList["dark elf"] = {
	regExpSearch : /^(?!.*half)((?=.*drow)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(dark|underdarks?|deep|depths?)\b))).*$/i,
	name : "Drow",
	sortname : "Elf, Dark (Drow)",
	source : ["P", 24],
	plural : "Drow",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 120], ["Sunlight Sensitivity", 0]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponprofs : [false, false, ["rapier", "shortsword", "hand crossbow"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to 5 1/2 feet tall (4'5\" + 2d6\")",
	weight : " weigh around 100 lb (75 + 2d6 \xD7 1d6 lb)",
	heightMetric : " range from under 1,5 to 1,7 metres tall (135 + 5d6 cm)",
	weightMetric : " weigh around 45 kg (35 + 5d6 \xD7 2d6 / 10 kg)",
	improvements : "Drow: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Drow (+2 Dexterity, +1 Charisma)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest only 4 hours).\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nDrow Magic: 1st level: Dancing Lights cantrip; 3rd level: Faerie Fire; 5th level: Darkness. Both spells can be used once per long rest. Charisma is my spellcasting ability for these.", // errata to specify once per day is long rest
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Drow Magic (level 1)",
		spells : ["dancing lights"],
		selection : ["dancing lights"],
		atwill : true
	},
	features : {
		"faerie fire" : {
			name : "Faerie Fire",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Drow Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Drow Magic (level 3)",
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				oncelr : true
			}
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Drow Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Drow Magic (level 5)",
				spells : ["darkness"],
				selection : ["darkness"],
				oncelr : true
			}
		}
	}
};
RaceList["wood elf"] = {
	regExpSearch : /^(?!.*half)((?=.*(grugach|kagonesti))|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(woodlands?|woods?|forests?|wilds?|green)\b))).*$/i,
	name : "Wood elf",
	sortname : "Elf, Wood",
	source : ["P", 24],
	plural : "Wood elves",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponprofs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Wood Elf: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Wood Elf (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nMask of the Wild: I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
};
RaceList["forest gnome"] = {
	regExpSearch : /^((?=.*\bgnomes?\b)(?=.*\b(woods?|forests?|wilds?|green)\b)).*$/i,
	name : "Forest gnome",
	sortname : "Gnome, Forest",
	source : ["P", 37],
	plural : "Forest gnomes",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Gnomish"],
	vision : [["Darkvision", 60]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " start adult life around age 40 and can live 350 to almost 500 years",
	height : " are 3 to 4 feet tall (2'11\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " are 90 to 120 cm tall (2'11\" + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	improvements : "Forest Gnome: +1 Dexterity, +2 Intelligence;",
	scores : [0, 1, 0, 2, 0, 0],
	trait : "Forest Gnome (+1 Dexterity, +2 Intelligence)" + (typePF ? "\n" : " ") + "\nNatural Illusionist:\n   I know the Minor Illusion cantrip. Intelligence is my spellcasting ability for it.\n\nSpeak with Small Beasts:\n   Through sounds and gestures, I can communicate simple ideas with Small or smaller beasts.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Natural Illusionist",
		spells : ["minor illusion"],
		selection : ["minor illusion"],
		atwill : true
	}
};
RaceList["stout halfling"] = {
	regExpSearch : /^(?=.*\b(halflings?|hobbits?)\b)(?=.*stout).*$/i,
	name : "Stout halfling",
	sortname : "Halfling, Stout",
	source : ["P", 28],
	plural : "Stout halflings",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Halfling"],
	savetxt : { adv_vs : ["frightened", "poison"] },
	dmgres : ["Poison"],
	age : " reach adulthood at age 20 and live around 150 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " average about 90 cm tall (80 + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	improvements : "Stout Halfling: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Stout Halfling (+2 Dexterity, +1 Constitution)\n\nLucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll.\n\nHalfling Nimbleness: I can move through the space of any creature that is of a size larger than me."
};

// Add racial variants that are not part of the SRD
AddRacialVariant("human", "variant", {
	regExpSearch : /variant/i,
	source : ["P", 31],
	skillstxt : "Choose any one skill",
	improvements : "Human: +1 to two different ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Human (+1 to two different ability scores of my choice)\n\nSkills: I gain proficiency in one skill of my choice.\n\nFeat: I gain one feat of my choice.",
	eval : "AddString('Feat Note 1', 'Human bonus feat', '; ');",
	removeeval : "RemoveString('Feat Note 1', 'Human bonus feat');"
});

// Add the subclasses that are not in the SRD
AddSubClass("barbarian", "totem warrior", {
	regExpSearch : /^(?=.*totem)(?=.*(warrior|fighter|marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n)).*$/i,
	subname : "Path of the Totem Warrior",
	fullname : "Totem Warrior",
	source : ["P", 50],
	features : {
		"subclassfeature3" : {
			name : "Spirit Seeker",
			source : ["P", 50],
			minlevel : 3,
			description : "\n   " + "I can cast Beast Sense and Speak with Animals as rituals (PHB 217 \u0026 277)",
			spellcastingBonus : [{
				name : "Spirit Seeker",
				spells : ["beast sense"],
				selection : ["beast sense"]
			}, {
				name : "Spirit Seeker",
				spells : ["speak with animals"],
				selection : ["speak with animals"]
			}]
		},
		"subclassfeature3.1" : {
			name : "Totem Spirit",
			source : ["P", 50],
			minlevel : 3,
			description : "\n   " + "Choose Bear, Eagle, Elk, Wolf, or Tiger Spirit using the \"Choose Feature\" button above",
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Bear Spirit",
				description : "\n   " + "While raging, I have resistance to all damage types except psychic",
				dmgres : [["All -Psychic", "All -Psychic (rage)"]],
				eval : "SetProf('resistance', false, 'Bludgeoning', 'Barbarian: Rage', 'Bludgeon. (in Rage)'); SetProf('resistance', false, 'Piercing', 'Barbarian: Rage', 'Piercing (in Rage)'); SetProf('resistance', false, 'Slashing', 'Barbarian: Rage', 'Slashing (in Rage)');",
				removeeval : "SetProf('resistance', true, 'Bludgeoning', 'Barbarian: Rage', 'Bludgeon. (in Rage)'); SetProf('resistance', true, 'Piercing', 'Barbarian: Rage', 'Piercing (in Rage)'); SetProf('resistance', true, 'Slashing', 'Barbarian: Rage', 'Slashing (in Rage)');"
			},
			"eagle" : {
				name : "Eagle Spirit",
				description : "\n   " + "While raging without heavy armor, others have disadv. on opportunity attacks vs. me" + "\n   " + "I can use the Dash action as a bonus action",
				action : ["bonus action", " (Dash)"]
			},
			"wolf" : {
				name : "Wolf Spirit",
				description : "\n   " + "While raging, friends have advantage on melee attacks vs. hostiles within 5 ft of me"
			}
		},
		"subclassfeature6" : {
			name : "Aspect of the Beast",
			source : ["P", 50],
			minlevel : 6,
			description : "\n   " + "Choose Bear, Eagle, Elk, Wolf, or Tiger Aspect using the \"Choose Feature\" button above",
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Aspect of the Bear",
				description : "\n   " + "Advantage on Strength checks to push/pull/lift/break; Carrying capacity is doubled",
				eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
				removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
			},
			"eagle" : {
				name : "Aspect of the Eagle",
				description : "\n   " + "I can see up to 1 mile away perfectly; No disadvantage on Perception from dim light"
			},
			"wolf" : {
				name : "Aspect of the Wolf",
				description : "\n   " + "I can track while traveling at a fast pace; I can move stealthily at a normal pace"
			}
		},
		"subclassfeature10" : {
			name : "Spirit Walker",
			source : ["P", 50],
			minlevel : 10,
			description : "\n   " + "I can cast Commune with Nature as a ritual (PHB 224)",
			spellcastingBonus : {
				name : "Spirit Walker",
				spells : ["commune with nature"],
				selection : ["commune with nature"]
			}
		},
		"subclassfeature14" : {
			name : "Totemic Attunement",
			source : ["P", 50],
			minlevel : 14,
			description : "\n   " + "Choose Bear, Eagle, Elk, Wolf, or Tiger Attunement using the \"Choose Feature\" button",
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Bear Attunement",
				description : "\n   " + "While raging, any creature that sees me within 5 ft has disadv. on attacks vs. others" + "\n   " + "Enemies that can't perceive me or be frightened are immune"
			},
			"eagle" : {
				name : "Eagle Attunement",
				description : "\n   " + "While raging, I can fly at my current speed, but I can only stay aloft during my turn"
			},
			"wolf" : {
				name : "Wolf Attunement",
				description : "\n   " + "If my melee attack hits while raging, I can knock prone as a bonus action (up to Large)",
				action : ["bonus action", " (raging: knock prone)"]
			}
		}
	}
});
AddSubClass("bard", "college of valor", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*valor).*$/i,
	subname : "College of Valor",
	source : ["P", 55],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["P", 55],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with medium armor, shields, and martial weapons",
			armor : [false, true, false, true],
			weapons : [false, true]
		},
		"subclassfeature3.1" : {
			name : "Combat Inspiration",
			source : ["P", 55],
			minlevel : 3,
			description : "\n   " + "My Bardic Inspiration can also be used to add the die to a weapon damage roll" + "\n   " + "Alternatively, it can be used as a reaction to add the die to AC against one attack"
		},
		"subclassfeature14" : {
			name : "Battle Magic",
			source : ["P", 55],
			minlevel : 14,
			description : "\n   " + "As a bonus action when I use my action to cast a bard spell, I can make a weapon attack",
			action : ["bonus action", " (with Bard spell)"]
		}
	}
});
AddSubClass("cleric", "knowledge domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(knowledge|wisdom|learning)).*$/i,
	subname : "Knowledge Domain",
	source : ["P", 59],
	spellcastingExtra : ["command", "identify", "augury", "suggestion", "nondetection", "speak with dead", "arcane eye", "confusion", "legend lore", "scrying"],
	features : {
		"subclassfeature1" : {
			name : "Blessings of Knowledge",
			source : ["P", 59],
			minlevel : 1,
			description : "\n   " + "I learn two languages and gain proficiency and expertise with two skills" + "\n   " + "I can choose from the following: Arcana, History, Nature, or Religion",
			skillstxt : "\n\n" + toUni("Knowledge Domain") + ": Choose two from Arcana, History, Nature, and Religion. You also gain expertise with these skills.",
			languageProfs : [2]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Knowledge of Ages",
			source : ["P", 59],
			minlevel : 2,
			description : "\n   " + "As an action, I gain proficiency with a chosen skill or tool for 10 minutes",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Read Thoughts",
			source : ["P", 59],
			minlevel : 6,
			description : "\n   " + "As an action, one creature within 60 ft I can see must make a Wisdom save" + "\n   " + "If it fails, I can read its surface thoughts for 1 min, as long as it's within 60 ft of me" + "\n   " + "As an action, I can end this and cast Suggestion on it (it fails its save automatically)" + "\n   " + "If it succeeded on its save, I can't use this feature again on it until I finish a long rest",
			action : ["action", ""]
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["P", 60],
			minlevel : 8,
			description : "\n   " + "I can add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Visions of the Past",
			source : ["P", 60],
			minlevel : 17,
			description : "\n   " + "I can see recent events of an object or area by concentrating and praying for 1 min" + "\n   " + "I can meditate this way for up to a number of minutes equal to my Wisdom score" + "\n   - " + "Object Reading (after meditating for 1 minute per owner):" + "\n      " + "If an owner owned it in the last Wis score in days, I learn how that owner got/lost it" + "\n      " + "I also learn the most recent significant event involving the object and the owner" + "\n   - " + "Area Reading (my immediate surroundings, up to a 50-foot cube):" + "\n      " + "Going back my Wisdom score in days, per minute I meditate, I learn about one event" + "\n      " + "This starts with the most recent event; It can be significant or just important to me",
			usages : 1,
			recovery : "short rest"
		}
	}
});
AddSubClass("cleric", "light domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(light|sun|shining)\b).*$/i,
	subname : "Light Domain",
	source : ["P", 61],
	spellcastingExtra : ["burning hands", "faerie fire", "flaming sphere", "scorching ray", "daylight", "fireball", "guardian of faith", "wall of fire", "flame strike", "scrying"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrip",
			source : ["P", 61],
			minlevel : 1,
			description : "\n   " + "I learn the Light cantrip if I didn't already know it",
			spellcastingBonus : {
				name : "Bonus Cantrip (Light)",
				spells : ["light"],
				selection : ["light"]
			}
		},
		"subclassfeature1.1" : {
			name : "Warding Flare",
			source : ["P", 61],
			minlevel : 1,
			description : desc([
				"When a creature within 30 ft attacks me and I can see it, I can interpose divine light",
				"As a reaction, I impose disadv. on the attacker's attack roll (unless it can't be blinded)"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Radiance of the Dawn",
			source : ["P", 61],
			minlevel : 2,
			description : "\n   " + "As an action, in 30 ft, magical darkness is dispelled and hostiles must make a Con save" + "\n   " + "Each takes radiant damage, saves for half, and negates with total cover",
			additional : ["", "2d10 + 2 damage", "2d10 + 3 damage", "2d10 + 4 damage", "2d10 + 5 damage", "2d10 + 6 damage", "2d10 + 7 damage", "2d10 + 8 damage", "2d10 + 9 damage", "2d10 + 10 dmg", "2d10 + 11 dmg", "2d10 + 12 dmg", "2d10 + 13 dmg", "2d10 + 14 dmg", "2d10 + 15 dmg", "2d10 + 16 dmg", "2d10 + 17 dmg", "2d10 + 18 dmg", "2d10 + 19 dmg", "2d10 + 20 dmg"],
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Improved Flame",
			source : ["P", 61],
			minlevel : 6,
			description : "\n   " + "I can also use my Warding Flare if another is attacked by a creature within 30 ft of me"
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["P", 61],
			minlevel : 8,
			description : "\n   " + "I can add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Corona of Light",
			source : ["P", 61],
			minlevel : 17,
			description : "\n   " + "As an action, I have an aura of 60 ft sunlight and 30 ft dim light for 1 min" + "\n   " + "Enemies in the sunlight have disadv. on saves vs. spells that deal fire or radiant damage",
			action : ["action", " (start/stop)"]
		}
	}
});
AddSubClass("cleric", "nature domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(nature|natural|animal|element(s|al)?)\b).*$/i,
	subname : "Nature Domain",
	source : ["P", 62],
	spellcastingExtra : ["animal friendship", "speak with animals", "barkskin", "spike growth", "plant growth", "wind wall", "dominate beast", "grasping vine", "insect plague", "tree stride"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armor : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Acolyte of Nature",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "I learn a druid cantrip and proficiency with a skill: Animal Handling, Nature, Survival",
			skillstxt : "\n\n" + toUni("Nature Domain") + ": Choose one from Animal Handling, Nature, and Survival.",
			spellcastingBonus : {
				name : "Acolyte of Nature",
				"class" : "druid",
				level : [0, 0]
			}
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Charm Animals and Plants",
			source : ["P", 62],
			minlevel : 2,
			description : "\n   " + "As an action, all beasts and plants within 30 ft that I can see must make a Wis save" + "\n   " + "If failed, each is charmed and friendly to allies and me for 1 min or until damaged",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Dampen Elements",
			source : ["P", 62],
			minlevel : 6,
			description : "\n   " + "As a reaction, if an ally in 30 ft or I takes acid/cold/fire/lightning/thunder damage," + "\n   " + "I can grant resistance against that instance of damage",
			action : ["reaction", ""]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 62],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 cold/fire/lightning damage (choice)";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 cold/fire/lightning damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra cold, fire, or lightning damage (my choice)."]
			}
		},
		"subclassfeature17" : {
			name : "Master of Nature",
			source : ["P", 62],
			minlevel : 17,
			description : "\n   " + "As a bonus action, I can command creatures that are charmed by my Channel Divinity",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("cleric", "tempest domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(tempest|destruction|storm)\b).*$/i,
	subname : "Tempest Domain",
	source : ["P", 62],
	spellcastingExtra : ["fog cloud", "thunderwave", "gust of wind", "shatter", "call lightning", "sleet storm", "control water", "ice storm", "destructive wave", "insect plague"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons and heavy armor",
			armor : [false, false, true, false],
			weapons : [false, true]
		},
		"subclassfeature1.1" : {
			name : "Wrath of the Storm",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "As a reaction, when a creature I can see within 5 ft hits me, I can thunderously rebuke" + "\n   " + "It takes 2d8 lightning or thunder damage (my choice) that a Dex save can halve",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Destructive Wrath",
			source : ["P", 62],
			minlevel : 2,
			description : "\n   " + "Instead of rolling, I can do maximum damage when I do lightning or thunder damage"
		},
		"subclassfeature6" : {
			name : "Thunderbolt Strike",
			source : ["P", 62],
			minlevel : 6,
			description : "\n   " + "When I deal lightning damage to a Large or smaller foe, I can push it up to 10 ft away"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 62],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 thunder damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 thunder damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra thunder damage."]
			}
		},
		"subclassfeature17" : {
			name : "Stormborn",
			source : ["P", 62],
			minlevel : 17,
			description : "\n   " + "Whenever I'm not underground or indoors, I have a fly speed equal to my current speed",
			speed : { fly : { spd : "walk", enc : "walk" } }
		}
	}
});
AddSubClass("cleric", "trickery domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(trickery|trickster|illusion)).*$/i,
	subname : "Trickery Domain",
	source : ["P", 63],
	spellcastingExtra : ["charm person", "disguise self", "mirror image", "pass without trace", "blink", "dispel magic", "dimension door", "polymorph", "dominate person", "modify memory"],
	features : {
		"subclassfeature1" : {
			name : "Blessing of the Trickster",
			source : ["P", 63],
			minlevel : 1,
			description : "\n   " + "As an action, a willing creature I touch (not me) has adv. on Dex (Stealth) checks" + "\n   " + "This lasts for 1 hour or until I use it again",
			action : ["action", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Invoke Duplicity",
			source : ["P", 63],
			minlevel : 2,
			description : desc([
				"As an action, I create illusory duplicates of myself within 30 ft of me for 1 min (conc)",
				"As a bonus action, I can move them 30 ft to space(s) I can see within 120 ft of me",
				"I can cast spells as though I was in an duplicate's space, using my own senses",
				"I have advantage on attacks if the target is within 5 ft of a duplicate and me"
			]),
			additional : levels.map(function (n) { return n < 2 ? "" : (n < 17 ? 1 : 2) + " illusory duplicate" + (n < 17 ? "" : "s"); }),
			action : ["action", ""],
			eval : "AddAction('bonus action', 'Move Duplicate(s)', 'Cleric (Trickery Domain) - Channel Divinity: Invoke Duplicity')",
			removeeval : "RemoveAction('bonus action', 'Move Duplicate(s)')"
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Cloak of Shadows",
			source : ["P", 63],
			minlevel : 6,
			description : "\n   " + "As an action, I become invisible until the end of my next turn or I attack/cast a spell",
			action : ["action", ""]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 63],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) { return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 poison damage"; }),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 poison damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra poison damage."]
			}
		},
		"subclassfeature17" : {
			name : "Improved Duplicity",
			source : ["P", 63],
			minlevel : 17,
			description : desc([
				"When I use Invoke Duplicity, I make four illusory duplicates instead of one",
				"I can move any number of the illusory duplicates as part of the same bonus action"
			])
		}
	}
});
AddSubClass("cleric", "war domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(war|fighting|conflict)\b).*$/i,
	subname : "War Domain",
	source : ["P", 63],
	spellcastingExtra : ["divine favor", "shield of faith", "magic weapon", "spiritual weapon", "crusader's mantle", "spirit guardians", "freedom of movement", "stoneskin", "flame strike", "hold monster"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["P", 63],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons and heavy armor",
			armor : [false, false, true, false],
			weapons : [false, true]
		},
		"subclassfeature1.1" : {
			name : "War Priest",
			source : ["P", 63],
			minlevel : 1,
			description : "\n   " + "When I use the Attack action, I can make a weapon attack as a bonus action",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["bonus action", " (with Attack action)"]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Guided Strike",
			source : ["P", 63],
			minlevel : 2,
			description : "\n   " + "When I make an attack roll, I can add a +10 bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature6" : {
			name : "Channel Divinity: War God's Blessing",
			source : ["P", 63],
			minlevel : 6,
			description : desc([
				"As a reaction, when a creature within 30 ft makes an attack roll, I can grant a ",
				"The creature then adds a +10 bonus to the roll; I can do this after seeing the d20 roll"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 63],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 damage of the weapon's type";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra damage."]
			}
		},
		"subclassfeature17" : {
			name : "Avatar of Battle",
			source : ["P", 63],
			minlevel : 17,
			description : "\n   " + "I have resistance to bludgeoning/piercing/slashing damage from nonmagical weapons",
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});
AddSubClass("druid", "circle of the moon", {
	regExpSearch : /^(?=.*(druid|shaman))((?=.*\bmoon\b)|((?=.*\bmany\b)(?=.*\bforms?\b))).*$/i,
	subname : "Circle of the Moon",
	source : ["P", 69],
	features : {
		"subclassfeature2" : {
			name : "Circle Forms",
			source : ["P", 69],
			minlevel : 2,
			description : "\n   " + "I am able to transform into more dangerous animal forms when using Wild Shape"
		},
		"subclassfeature2.wild shape" : {
			name : "Wild Shape",
			source : ["P", 66],
			minlevel : 2,
			description : "\n   " + "As a bonus action, I assume the shape of a beast I have seen before with these rules:" + "\n    - " + "I gain all its game statistics except Intelligence, Wisdom, or Charisma" + "\n    - " + "I get its skill/saving throw prof. while keeping my own, using whichever is higher" + "\n    - " + "I assume the beast's HP and HD; I get mine back when I revert back" + "\n    - " + "I can't cast spells in beast form, but transforming doesn't break concentration" + "\n    - " + "I retain features from class, race, etc., but I don't retain special senses" + "\n    - " + "I can choose whether equipment falls to the ground, merges, or stays worn" + "\n    - " + "I revert if out of time or unconscious; if KOd by damage, excess damage carries over",
			usages : [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, "\u221E\u00D7 per "],
			recovery : "short rest",
			additional : ["", "CR 1, no fly/swim; 1 hour", "CR 1, no fly/swim; 1 hour", "CR 1, no fly; 2 hours", "CR 1, no fly; 2 hours", "CR 2, no fly; 3 hours", "CR 2, no fly; 3 hours", "CR 2; 4 hours", "CR 3; 4 hours", "CR 3; 5 hours", "CR 3; 5 hours", "CR 4; 6 hours", "CR 4; 6 hours", "CR 4; 7 hours", "CR 5; 7 hours", "CR 5; 8 hours", "CR 5; 8 hours", "CR 6; 9 hours", "CR 6; 9 hours", "CR 6; 10 hours"],
			action : ["bonus action", " (start/stop)"],
			eval : "RemoveAction('action', 'Wild Shape (start)'); RemoveAction('bonus action', 'Wild Shape (end)');"
		},
		"subclassfeature2.1" : {
			name : "Combat Wild Shape",
			source : ["P", 69],
			minlevel : 2,
			description : "\n   " + "As a bonus action while in Wild Shape, I can expend spell slots to heal myself" + "\n   " + "I regain 1d8 HP per expended spell slot level; I can use Wild Shape as a bonus action",
			action : ["bonus action", " (heal)"],
			removeeval : "AddAction('action', 'Wild Shape (start)', 'Druid'); AddAction('bonus action', 'Wild Shape (end)', 'Druid');"

		},
		"subclassfeature6" : {
			name : "Primal Strike",
			source : ["P", 69],
			minlevel : 6,
			description : "\n   " + "My attacks count as magical while in Wild Shape"
		},
		"subclassfeature10" : {
			name : "Elemental Wild Shape",
			source : ["P", 69],
			minlevel : 10,
			description : "\n   " + "I can transform into an air/earth/fire/water elemental by expending 2 Wild Shape uses"
		},
		"subclassfeature14" : {
			name : "Thousand Forms",
			source : ["P", 69],
			minlevel : 14,
			description : "\n   " + "I can cast Alter Self at will without using spell slots (PHB 211)"
		}
	}

});
AddSubClass("fighter", "battle master", {
	regExpSearch : /^(?=.*(war|fighter|battle|martial))(?=.*master).*$/i,
	subname : "Battle Master",
	fullname : "Battle Master",
	source : ["P", 73],
	abilitySave : 1,
	abilitySaveAlt : 2,
	features : {
		"subclassfeature3" : {
			name : "Combat Superiority",
			source : ["P", 73],
			minlevel : 3,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special Maneuvers" + "\n   " + "I regain all superiority dice after a short rest",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest"
		},
		"subclassfeature3.1" : {
			name : "Maneuvers",
			source : ["P", 73],
			minlevel : 3,
			description : "\n   " + "Use the \"Choose Feature\" button above to add a Maneuver to the third page" + "\n   " + "I can use a Maneuver by expending a superiority die (only one Maneuver per attack)",
			additional : ["", "", "3 known", "3 known", "3 known", "3 known", "5 known", "5 known", "5 known", "7 known", "7 known", "7 known", "7 known", "7 known", "9 known", "9 known", "9 known", "9 known", "9 known", "9 known"],
			extraname : "Maneuver",
			extrachoices : ["Commander's Strike", "Disarming Attack", "Distracting Strike", "Evasive Footwork", "Feinting Attack", "Goading Attack", "Lunging Attack", "Maneuvering Attack", "Menacing Attack", "Parry", "Precision Attack", "Pushing Attack", "Rally", "Riposte", "Sweeping Attack", "Trip Attack"],
			"commander's strike" : {
				name : "Commander's Strike",
				source : ["P", 74],
				description : "\n   " + "I forgo one attack of my Attack action to use a bonus action to direct an ally I see/hear" + "\n   " + "The ally can use a reaction to make an attack, adding the superiority die to damage",
				action : ["bonus action", " (with Attack action)"]
			},
			"disarming attack" : {
				name : "Disarming Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Strength save or drops a held object of my choice to its feet"
			},
			"distracting strike" : {
				name : "Distracting Strike",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "The next attack of an ally before my next turn has adv. against the creature"
			},
			"evasive footwork" : {
				name : "Evasive Footwork",
				source : ["P", 74],
				description : "\n   " + "Use when moving; I add the superiority die to my AC until I stop moving"
			},
			"feinting attack" : {
				name : "Feinting Attack",
				source : ["P", 74],
				description : "\n   " + "As a bonus action, I can feint to gain adv. on my next attack against a target within 5 ft" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage",
				action : ["bonus action", ""]
			},
			"goading attack" : {
				name : "Goading Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Wis save or has disadv. vs. other targets until the end of my next turn"
			},
			"lunging attack" : {
				name : "Lunging Attack",
				source : ["P", 74],
				description : "\n   " + "I can spend a superiority die to increase the reach of a melee weapon attack by 5 ft" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage"
			},
			"maneuvering attack" : {
				name : "Maneuvering Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Ally can use reaction to move half speed without opportunity attack from the target"

			},
			"menacing attack" : {
				name : "Menacing Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Wisdom save or is frightened of me until the end of my next turn"
			},
			"parry" : {
				name : "Parry",
				source : ["P", 74],
				description : "\n   " + "When damaged in melee, I can use a reaction to reduce it by superiority die + Dex mod",
				action : ["reaction", " (when damaged in melee)"]
			},
			"precision attack" : {
				name : "Precision Attack",
				source : ["P", 74],
				description : "\n   " + "I add the superiority die to my attack roll, either before or after rolling"
			},
			"pushing attack" : {
				name : "Pushing Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be pushed up to 15 ft away"
			},
			"rally" : {
				name : "Rally",
				source : ["P", 74],
				description : "\n   " + "Ally that can see/hear me gets temporary HP equal to superiority die + Charisma mod",
				action : ["bonus action", ""]
			},
			"riposte" : {
				name : "Riposte",
				source : ["P", 74],
				description : "\n   " + "When missed in melee, I can use my reaction to make one melee attack vs. the attacker" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage",
				action : ["reaction", " (after missed in melee)"]
			},
			"sweeping attack" : {
				name : "Sweeping Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature and a second creature is within 5 ft of the first" + "\n   " + "If the original attack roll hits this second creature, it takes the superiority die in damage"
			},
			"trip attack" : {
				name : "Trip Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be knocked prone"
			}
		},
		"subclassfeature3.2" : {
			name : "Student of War",
			source : ["P", 73],
			minlevel : 3,
			description : "\n   " + "I have proficiency with one artisan's tool set of my choice",
			toolProfs : [["Artisan's tools", 1]]
		},
		"subclassfeature7" : {
			name : "Know Your Enemy",
			source : ["P", 73],
			minlevel : 7,
			description : "\n   " + "If I spend 1 min studying someone, the DM will tell me info about him/her"
		},
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : ["P", 74],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : ["P", 74],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("fighter", "eldritch knight", {
	regExpSearch : /^(?!.*(exalted|sacred|holy|divine|nature|natural|purple.*dragon|green))(?=.*(knight|fighter|warrior|militant|warlord|phalanx|gladiator|trooper))(?=.*\b(eldritch|arcane|magic|mage|witch)\b).*$/i,
	subname : "Eldritch Knight",
	fullname : "Eldritch Knight",
	source : ["P", 75],
	abilitySave : 4,
	spellcastingFactor : 3,
	spellcastingList : {
		"class" : "wizard",
		school : ["Evoc", "Abjur"],
		level : [0, 4] //lower and higher limit
	},
	spellcastingKnown : {
		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells : [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9]
	},
	features : {
		"action surge" : {
			name : "Action Surge",
			source : ["P", 72],
			minlevel : 2,
			description : "\n   " + "I can take one additional action on my turn on top of my normally allowed actions",
			usages : [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
			recovery : "short rest",
			additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "30 ft teleport", "30 ft teleport", "30 ft teleport", "30 ft teleport", "30 ft teleport", "30 ft teleport"]
		},
		"subclassfeature3" : {
			name : "Spellcasting",
			source : ["P", 75],
			minlevel : 3,
			description : "\n   " + "I can cast known wizard cantrips/spells, using Intelligence as my spellcasting ability",
			additional : ["2 cantrips known", "2 cantrips known", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 5 spells known", "2 cantrips \u0026 6 spells known", "2 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 12 spells known", "3 cantrips \u0026 13 spells known"],
			spellcastingBonus : { //for the spells gained at level 3, 8, 14, 20
				name : "From any School",
				"class" : "wizard",
				times : [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4],
				level : [1, 4], //lower and higher limit
			}
		},
		"subclassfeature3.1" : {
			name : "Weapon Bond",
			source : ["P", 75],
			minlevel : 3,
			description : "\n   " + "I can bond with up to two weapons by spending a short rest with each" + "\n   " + "I can't be disarmed of a bonded weapon and I can summon one as a bonus action",
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "War Magic",
			source : ["P", 75],
			minlevel : 7,
			description : "\n   " + "When I use my action to cast a cantrip, I can make a weapon attack as a bonus action",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Eldritch Strike",
			source : ["P", 75],
			minlevel : 10,
			description : "\n   " + "A creature hit by my weapon attack has disadv. on the save vs. the next spell I cast" + "\n   " + "This lasts until the end of my next turn"
		},
		"subclassfeature15" : {
			name : "Arcane Charge",
			source : ["P", 75],
			minlevel : 15,
			description : "\n   " + "When I use Action Surge, I can also teleport up to 30 ft to an empty space I can see" + "\n   " + "I can do so before or after the extra action"
		},
		"subclassfeature18" : {
			name : "Improved War Magic",
			source : ["P", 75],
			minlevel : 18,
			description : "\n   " + "When I use my action to cast a spell, I can make a weapon attack as a bonus action",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("monk", "way of the four elements", {
	regExpSearch : /^(?=.*\b(four|4)\b)((?=.*elements?)|((?=.*earth)|(?=.*(wind|air))|(?=.*fire)|(?=.*water)))((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Four Elements",
	source : ["P", 80],
	features : {
		"subclassfeature3" : {
			name : "Disciple of the Elements",
			source : ["P", 80],
			minlevel : 3,
			description : "\n   " + "I know Elemental Attunement and additional Elemental Disciplines, depending on level" + "\n   " + "Use the \"Choose Feature\" button above to add Elemental Disciplines to the third page" + "\n   " + "From 5th level onward, I can use additional ki points to increase their spell slot level" + "\n   " + "I can trade known Elemental Disciplines for others when I gain new ones",
			additional : ["", "", "2 known", "2 known", "2 known; 3 max ki", "3 known; 3 max ki", "3 known; 3 max ki", "3 known; 3 max ki", "3 known; 4 max ki", "3 known; 4 max ki", "4 known; 4 max ki", "4 known; 4 max ki", "4 known; 5 max ki", "4 known; 5 max ki", "4 known; 5 max ki", "4 known; 5 max ki", "5 known; 6 max ki", "5 known; 6 max ki", "5 known; 6 max ki", "5 known; 6 max ki"],
			extraname : "Elemental Discipline",
			extrachoices : ["Breath of Winter (prereq: level 17 monk)", "Clench of the North Wind (prereq: level 6 monk)", "Eternal Mountain Defense (prereq: level 17 monk)", "Fangs of the Fire Snake", "Fist of Four Thunders", "Fist of Unbroken Air", "Flames of the Phoenix (prereq: level 11 monk)", "Gong of the Summit (prereq: level 6 monk)", "Mist Stance (prereq: level 11 monk)", "Ride the Wind (prereq: level 11 monk)", "Rive of Hungry Flame (prereq: level 17 monk)", "Rush of the Gale Spirits", "Shape the Flowing River", "Sweeping Cinder Strike", "Water Whip", "Wave of Rolling Earth (prereq: level 17 monk)"],
			eval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'elemental attunement', 'extra']);",
			removeeval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'elemental attunement', 'extra'], 'remove');",
			"elemental attunement" : {
				name : "Elemental Attunement",
				source : ["P", 81],
				description : "\n   " + "As an action, I can briefly control elemental forces nearby" + "\n   " + "I can make a harmless sensory effect, light/snuff light, chill/warm 1 lb for 1 hour," + "\n   " + "or I cause earth/fire/water/mist in a 1 ft cube to shape itself into a form for 1 minute",
				action : ["action", ""]
			},
			"breath of winter (prereq: level 17 monk)" : {
				name : "Breath of Winter",
				source : ["P", 81],
				description : " [6 ki points]" + "\n   " + "As an action, I can cast Cone of Cold without material components (PHB 224)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Breath of Winter",
					spells : ["cone of cold"],
					selection : ["cone of cold"],
					firstCol : 6
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			},
			"clench of the north wind (prereq: level 6 monk)" : {
				name : "Clench of the North Wind",
				source : ["P", 81],
				description : " [3 ki points]" + "\n   " + "As an action, I can cast Hold Person without material components (PHB 251)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Clench of the North Wind",
					spells : ["hold person"],
					selection : ["hold person"],
					firstCol : 3
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 6"
			},
			"eternal mountain defense (prereq: level 17 monk)" : { // errata from level 11 to level 17
				name : "Eternal Mountain Defense",
				source : ["P", 81],
				description : " [5 ki points]" + "\n   " + "As an action, I can cast Stoneskin on myself without material components (PHB 278)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Eternal Mountain Defense",
					spells : ["stoneskin"],
					selection : ["stoneskin"],
					firstCol : 5
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			},
			"fangs of the fire snake" : {
				name : "Fangs of the Fire Snake",
				source : ["P", 81],
				description : " [1 ki point]" + "\n   " + "With Attack action, my unarmed strikes +10 ft reach and deal fire damage this turn" + "\n   " + "Also, I can spent an additional 1 ki point to cause an attack to deal +1d10 fire damage",
				calcChanges : {
					atkAdd : ["if ((/unarmed strike/i).test(WeaponName) && (/^(?=.*fire)(?=.*snake).*$/i).test(WeaponText)) {fields.Description += (fields.Description ? '; ' : '') + 'After hit, spend 1 ki point for +1d10 fire damage'; fields.Range = 'Melee (15 ft reach)'; fields.Damage_Type = 'fire'; }; ", "If I include the words 'Fire Snake' in the name of an unarmed strike, it gets +10 ft reach, does fire damage, and gains the option to deal +1d10 fire damage by spending 1 additional ki point."]
				}
			},
			"fist of four thunders" : {
				name : "Fist of Four Thunders",
				source : ["P", 81],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Thunderwave (PHB 282)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Fist of Four Thunders",
					spells : ["thunderwave"],
					selection : ["thunderwave"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"fist of unbroken air" : {
				name : "Fist of Unbroken Air",
				source : ["P", 81],
				description : " [2 ki points; +1d10/extra ki point]" + "\n   " + "As an action, target within 30 ft takes 3d10 bludgeoning damage (spend ki for more)" + "\n   " + "It is also pushed up to 20 ft away from me and knocked prone" + "\n   " + "It can make a Strength save to halve damage and avoid being pushed and knocked prone",
				action : ["action", ""]
			},
			"flames of the phoenix (prereq: level 11 monk)" : {
				name : "Flames of the Phoenix",
				source : ["P", 81],
				description : " [4 ki points]" + "\n   " + "As an action, I can cast Fireball without material components (PHB 241)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Flames of the Phoenix",
					spells : ["fireball"],
					selection : ["fireball"],
					firstCol : 4
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 11"
			},
			"gong of the summit (prereq: level 6 monk)" : {
				name : "Gong of the Summit",
				source : ["P", 81],
				description : " [3 ki points]" + "\n   " + "As an action, I can cast Shatter without material components (PHB 275)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Gong of the Summit",
					spells : ["shatter"],
					selection : ["shatter"],
					firstCol : 3
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 6"
			},
			"mist stance (prereq: level 11 monk)" : {
				name : "Mist Stance",
				source : ["P", 81],
				description : " [4 ki points]" + "\n   " + "As an action, I can cast Gaseous Form on myself without material components (PHB 244)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Mist Stance",
					spells : ["gaseous form"],
					selection : ["gaseous form"],
					firstCol : 4
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 11"
			},
			"ride the wind (prereq: level 11 monk)" : {
				name : "Ride the Wind",
				source : ["P", 81],
				description : " [4 ki points]" + "\n   " + "As an action, I can cast Fly on myself without material components (PHB 243)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Ride the Wind",
					spells : ["fly"],
					selection : ["fly"],
					firstCol : 4
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 11"
			},
			"rive of hungry flame (prereq: level 17 monk)" : {
				name : "Rive of Hungry Flame",
				source : ["P", 81],
				description : " [5 ki points]" + "\n   " + "As an action, I can cast Wall of Fire without material components (PHB 285)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Rive of Hungry Flame",
					spells : ["wall of fire"],
					selection : ["wall of fire"],
					firstCol : 5
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			},
			"rush of the gale spirits" : {
				name : "Rush of the Gale Spirits",
				source : ["P", 81],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Gust of Wind without material components (PHB 248)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Rush of the Gale Spirits",
					spells : ["gust of wind"],
					selection : ["gust of wind"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"shape the flowing river" : {
				name : "Shape the Flowing River",
				source : ["P", 81],
				description : " [1 ki point]" + "\n   " + "As an action, I can affect ice/water up to a 30-foot cube within 120 ft" + "\n   " + "I can switch it between water/ice states and reshape ice up to half its largest dimension",
				action : ["action", ""]
			},
			"sweeping cinder strike" : {
				name : "Sweeping Cinder Strike",
				source : ["P", 81],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Burning Hands (PHB 220)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Sweeping Cinder Strike",
					spells : ["burning hands"],
					selection : ["burning hands"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"water whip" : {
				name : "Water Whip",
				source : ["P", 81],
				description : " [2 ki points; +1d10/extra ki point]" + "\n   " + "As an action, a creature within 30 ft takes 3d10 bludgeoning damage (spend ki for more)" + "\n   " + "It is also knocked prone or pulled up to 25 ft closer to me (my choice)" + "\n   " + "It can make a Dexterity save to halve damage and avoid being pulled or knocked prone",
				action : ["action", ""]
			},
			"wave of rolling earth (prereq: level 17 monk)" : {
				name : "Wave of Rolling Earth",
				source : ["P", 81],
				description : " [6 ki points]" + "\n   " + "As an action, I can cast Wall of Stone without material components (PHB 287)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Wave of Rolling Earth",
					spells : ["wall of stone"],
					selection : ["wall of stone"],
					firstCol : 6
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			}
		}
	}
});
AddSubClass("monk", "way of shadow", {
	regExpSearch : /^(?=.*shadow)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of Shadow",
	source : ["P", 80],
	features : {
		"subclassfeature3" : {
			name : "Shadow Arts",
			source : ["P", 80],
			minlevel : 3,
			description : "\n   " + "I know the Minor Illusion cantrip and can cast certain spells by using ki (see page 3)",
			spellcastingBonus : {
				name : "Shadow Arts",
				spells : ["minor illusion"],
				selection : ["minor illusion"],
				atwill : true
			},
			extraname : "Shadow Art",
			eval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'darkness', 'extra']); ClassFeatureOptions(['monk', 'subclassfeature3', 'darkvision', 'extra']); ClassFeatureOptions(['monk', 'subclassfeature3', 'pass without trace', 'extra']); ClassFeatureOptions(['monk', 'subclassfeature3', 'silence', 'extra']);",
			removeeval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'darkness', 'extra'], 'remove'); ClassFeatureOptions(['monk', 'subclassfeature3', 'darkvision', 'extra'], 'remove'); ClassFeatureOptions(['monk', 'subclassfeature3', 'pass without trace', 'extra'], 'remove'); ClassFeatureOptions(['monk', 'subclassfeature3', 'silence', 'extra'], 'remove');",
			"darkness" : {
				name : "Darkness",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Darkness without material components (PHB 230)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Darkness",
					spells : ["darkness"],
					selection : ["darkness"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"darkvision" : {
				name : "Darkvision",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Darkvision without material components (PHB 230)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Darkvision",
					spells : ["darkvision"],
					selection : ["darkvision"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"pass without trace" : {
				name : "Pass Without Trace",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Pass without Trace without material components (PHB 264)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Pass Without Trace",
					spells : ["pass without trace"],
					selection : ["pass without trace"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"silence" : {
				name : "Silence",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Silence (PHB 275)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Silence",
					spells : ["silence"],
					selection : ["silence"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			}
		},
		"subclassfeature6" : {
			name : "Shadow Step",
			source : ["P", 80],
			minlevel : 6,
			description : "\n   " + "As a bonus action, I can teleport from and into dim light or darkness within 60 ft" + "\n   " + "After I do this, I have adv. on the next melee attack I make before the end of my turn",
			action : ["bonus action", ""]
		},
		"subclassfeature11" : {
			name : "Cloak of Shadows",
			source : ["P", 80],
			minlevel : 11,
			description : "\n   " + "As an action, I can become invisible in dim light or darkness until I attack/cast",
			action : ["action", ""]
		},
		"subclassfeature17" : {
			name : "Opportunist",
			source : ["P", 80],
			minlevel : 17,
			description : "\n   " + "As a reaction, if a creature in 5 ft is hit by another, I can make a melee attack vs. it",
			action : ["reaction", ""]
		}
	}
});
AddSubClass("paladin", "oath of the ancients", {
	regExpSearch : /^(((?=.*(ancient|nature|natural|green|fey|horned))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*(green|fey|horned))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of the Ancients",
	source : ["P", 87],
	spellcastingExtra : ["ensnaring strike", "speak with animals", "moonbeam", "misty step", "plant growth", "protection from energy", "ice storm", "stoneskin", "commune with nature", "tree stride"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Nature's Wrath",
			source : ["P", 87],
			minlevel : 3,
			description : "\n   " + "As an action, a creature I can see within 10 ft must make a Str/Dex save (its choice)" + "\n   " + "If it fails this save, it is restrained until it succeeds on a save at the end of its turn",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Turn the Faithless",
			source : ["P", 87],
			minlevel : 3,
			description : "\n   " + "As an action, all fey/fiends within 30 ft that can hear me must make a Wisdom save" + "\n   " + "If one fails, it is turned for 1 minute or until it takes damage and must show true form" + "\n   " + "Turned: move away, never within 30 ft of me, no reactions or actions other than Dash" + "\n   " + "Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds",
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Aura of Warding",
			source : ["P", 87],
			minlevel : 7,
			description : "\n   " + "Allies within range and I have resistance to damage from spells",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			dmgres : ["Spells"]
		},
		"subclassfeature15" : {
			name : "Undying Sentinel",
			source : ["P", 87],
			minlevel : 15,
			description : "\n   " + "If dropped to 0 hit points and not killed outright, I can choose to stay at 1 hit point" + "\n   " + "Additionally, I suffer no drawbacks of old age and can't be aged magically",
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature20" : {
			name : "Elder Champion",
			source : ["P", 87],
			minlevel : 20,
			description : "\n   " + "As an action, I assume the form of a force of nature for 1 minute and gain benefits:" + "\n    - " + "At the start of each of my turns, I regain 10 hit points" + "\n    - " + "I can cast paladin spells with a casting time of 1 action as a bonus action instead" + "\n    - " + "Enemies within 10 ft have disadv. on saves vs. my paladin spells and channel divinity",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("paladin", "oath of vengeance", {
	regExpSearch : /^(((?=.*(vengeance|wrath|justice))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*dark)(?=.*knight))|(?=.*avenger)).*$/i,
	subname : "Oath of Vengeance",
	source : ["P", 88],
	spellcastingExtra : ["bane", "hunter's mark", "hold person", "misty step", "haste", "protection from energy", "banishment", "dimension door", "hold monster", "scrying"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Abjure Enemy",
			source : ["P", 88],
			minlevel : 3,
			description : "\n   " + "As an action, one creature within 60 ft that I can see me must make a Wisdom save" + "\n   " + "If failed, it is frightened and its speed is 0 despite bonuses; if success, its speed is halved" + "\n   " + "This lasts for 1 minute or until it takes damage; Undead/fiends have disadv. on save",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Vow of Enmity",
			source : ["P", 88],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I utter a vow against a creature I can see within 10 ft" + "\n   " + "I have advantage on attack rolls against it for 1 minute or until it is at 0 HP/unconscious",
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Relentless Avenger",
			source : ["P", 88],
			minlevel : 7,
			description : "\n   " + "After I hit with an opportunity attack, I can move 1/2 my speed in the same reaction" + "\n   " + "This movement doesn't provoke opportunity attacks"
		},
		"subclassfeature15" : {
			name : "Soul of Vengeance",
			source : ["P", 88],
			minlevel : 15,
			description : "\n   " + "When an enemy I have an active Vow of Enmity against makes an attack, I can react" + "\n   " + "As a reaction, I can make a melee weapon attack against it if it is within range",
			action : ["reaction", " (with Vow of Enmity"]
		},
		"subclassfeature20" : {
			name : "Avenging Angel",
			source : ["P", 88],
			minlevel : 20,
			description : "\n   " + "As an action, I gain a flying speed of 60 ft and a 30 ft aura of menace for 1 hour" + "\n   " + "When a creature first enters or starts its turn in the aura, it must make a Wis save" + "\n   " + "If failed, for 1 min or until it takes damage, it is frightened and attacks vs. it have adv.",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("ranger", "beast master", {
	regExpSearch : /^(?=.*(animal|beast))((?=.*(master|ranger|strider))|((?=.*(nature|natural|green))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Beast Master",
	fullname : "Beast Master",
	source : ["P", 93],
	features : {
		"subclassfeature3" : {
			name : "Ranger's Companion",
			source : ["P", 93],
			minlevel : 3,
			description : "\n   " + "It adds my proficiency bonus to AC, attacks, damage, and save/skill proficiencies" + "\n   " + "Its Hit Point maximum equals four times my ranger level if higher than its normal HP" + "\n   " + "It takes a turn on my initiative; It only takes an action if I command it to" + "\n   " + "As an action, I can have it do an Attack/Dash/Disengage/Dodge/Help action on its turn" + "\n   " + "Can attack while commanding with Extra Attack; Order movement at no action cost",
			additional : "1/4 CR up to medium sized beast",
			action : ["action", " (Command)"]
		},
		"subclassfeature7" : {
			name : "Exceptional Training",
			source : ["P", 93],
			minlevel : 7,
			description : "\n   " + "As a bonus action, I can have my beast Dash/Disengage/Dodge/Help on its turn",
			action : ["bonus action", ""]
		},
		"subclassfeature11" : {
			name : "Bestial Fury",
			source : ["P", 93],
			minlevel : 11,
			description : "\n   " + "When I command my beast to use the Attack action, it can attack twice on its turn"
		},
		"subclassfeature15" : {
			name : "Share Spells",
			source : ["P", 93],
			minlevel : 15,
			description : "\n   " + "When I cast a spell on myself, I can have it also affect my beast if it is within 30 ft"
		}
	}
});
AddSubClass("rogue", "arcane trickster", {
	regExpSearch : /^(?=.*(trickster|rogue|miscreant))(?=.*\b(eldritch|arcane|magic|mage|witch)\b).*$/i,
	subname : "Arcane Trickster",
	fullname : "Arcane Trickster",
	source : ["P", 98],
	abilitySave : 4,
	spellcastingFactor : 3,
	spellcastingList : {
		"class" : "wizard",
		school : ["Ench", "Illus"],
		level : [0, 4] //lower and higher limit
	},
	spellcastingKnown : {
		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells : [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9]
	},
	features : {
		"subclassfeature3" : {
			name : "Spellcasting",
			source : ["P", 98],
			minlevel : 3,
			description : "\n   " + "I can cast known wizard cantrips/spells, using Intelligence as my spellcasting ability",
			additional : ["", "", "3 cantrips \u0026 3 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 6 spells known", "3 cantrips \u0026 6 spells known", "4 cantrips \u0026 7 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 9 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 12 spells known", "4 cantrips \u0026 13 spells known"],
			spellcastingBonus : [{//for the Mage Hand cantrip gained at level 1
				name : "Mage Hand cantrip",
				spells : ["mage hand"],
				selection : ["mage hand"]
			}, { //for the spells gained at level 3, 8, 14, 20
				name : "From any School",
				"class" : "wizard",
				times : [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4],
				level : [1, 4], //lower and higher limit
			}]
		},
		"subclassfeature3.1" : {
			name : "Mage Hand Legerdemain",
			source : ["P", 98],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can direct my Mage Hand" + "\n   " + "With a Dex (Sleight of Hand) vs. Wis (Perception) checks, I can do so discreetly" + "\n   " + "I can make it invisible and perform the following tasks:" + "\n    - " + "Stow/retrieve an object the hand is holding in a container worn/carried by another" + "\n    - " + "Use thieves' tools to pick locks and disarm traps at range",
			action : ["bonus action", ""]
		},
		"subclassfeature9" : {
			name : "Magical Ambush",
			source : ["P", 98],
			minlevel : 9,
			description : "\n   " + "When I cast a spell while hidden, the target(s) have disadvantage against that spell"
		},
		"subclassfeature13" : {
			name : "Versatile Trickster",
			source : ["P", 98],
			minlevel : 13,
			description : "\n   " + "As a bonus action, gain adv. on attacks this turn on creature within 5 ft of Mage Hand",
			action : ["bonus action", ""]
		},
		"subclassfeature17" : {
			name : "Spell Thief",
			source : ["P", 98],
			minlevel : 17,
			description : "\n   " + "As a reaction, after a spell is cast at me, I can try to negate and steal it" + "\n   " + "The caster makes a save against my spell DC with his/her spellcasting ability" + "\n   " + "On failure, the caster forgets how to cast that spell for eight hours" + "\n   " + "If I have a spell slot of a high enough level for it, I learn how to cast it during this time",
			action : ["reaction", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("rogue", "assassin", {
	regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*assassin).*$/i,
	subname : "Assassin",
	fullname : "Assassin",
	source : ["P", 97],
	abilitySave : 2,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["P", 97],
			minlevel : 3,
			description : "\n   " + "I am proficient with disguise kits and poisoner's kits",
			toolProfs : ["Disguise kit", "Poisoner's kit"]
		},
		"subclassfeature3.1" : {
			name : "Assassinate",
			source : ["P", 97],
			minlevel : 3,
			description : "\n   " + "I have adv. on attack rolls against creatures that have not taken a turn in combat yet" + "\n   " + "Any hit I score against a creature that is surprised is a critical hit"
		},
		"subclassfeature9" : {
			name : "Infiltration Expertise",
			source : ["P", 97],
			minlevel : 9,
			description : "\n   " + "I can create false identities in 7 days for 25 gp"
		},
		"subclassfeature13" : {
			name : "Imposter",
			source : ["P", 97],
			minlevel : 13,
			description : "\n   " + "After 3 hours of studying a person, I can mimic speech, writing, and behavior" + "\n   " + "I have advantage on Charisma (Deception) checks to maintain this ruse"
		},
		"subclassfeature17" : {
			name : "Death Strike",
			source : ["P", 97],
			minlevel : 17,
			description : "\n   " + "When I hit a surprised creature, it must make a Con save or take double damage",
			additional : "Save DC: 8 + Dex mod + Proficiency bonus"
		}
	}
});
AddSubClass("sorcerer", "wild magic", {
	regExpSearch : /^(?=.*(mage|magus|sorcerer|witch))(?=.*(wild|chaos|chaotic|limbo)).*$/i,
	subname : "Wild Magic",
	fullname : "Wild Mage",
	source : ["P", 103],
	features : {
		"subclassfeature1" : {
			name : "Wild Magic Surge",
			source : ["P", 103],
			minlevel : 1,
			description : desc([
				"Wild Magic Surges happen 5% of the time that I cast a sorcerer spell",
				"This doesn't happen with cantrips and I only take this chance if the DM tells me to",
				"See the \"Notes\" page for the table"
			]),
			wmsurgetable1 : "\u25C6 Wild Magic Surge Table (Wild Magic 1, PHB 104) [results 01-50]" + desc([
				"d100  Effect",
				"01-02 Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
				"03-04 For the next minute, you can see any invisible creature if you have line of sight to it.",
				"05-06 A modron chosen and controlled by the DM appears in an unoccupied space within 5 ft of you, then disappears 1 minute later.",
				"07-08 You cast fireball as a 3rd-level spell centered on yourself.",
				"09-10 You cast magic missile as a 5th-level spell.",
				"11-12 Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",
				"13-14 You cast confusion centered on yourself.",
				"15-16 For the next minute, you regain 5 hit points at the start of each of your turns.",
				"17-18 You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",
				"19-20 You cast grease centered on yourself.",
				"21-22 Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",
				"23-24 Your skin turns a vibrant shade of blue. A remove curse spell can end this effect.",
				"25-26 An eye appears on your forehead for the next minute.",
				"27-28 For the next minute, all your spells with a casting time feet of 1 action have a casting time of 1 bonus action.",
				"29-30 You teleport up to 60 ft to an unoccupied space of your choice that you can see.",
				"31-32 You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.",
				"33-34 Maximize the damage of the next damaging spell you cast within the next minute.",
				"35-36 Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",
				"37-38 1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 ft of you and are frightened of you. They vanish after 1 minute.",
				"39-40 You regain 2d10 hit points.",
				"41-42 You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
				"43-44 For the next minute, you can teleport up to 20 ft as a bonus action on each of your turns.",
				"45-46 You cast levitate on yourself.",
				"47-48 A unicorn controlled by the DM appears in a space within 5 ft of you, then disappears 1 minute later.",
				"49-50 You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth."
			]),
			wmsurgetable2 : "\u25C6 Wild Magic Surge Table (Wild Magic 1, PHB 104) [results 51-100]" + desc([
				"d100  Effect",
				"51-52 A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile.",
				"53-54 You are immune to being intoxicated by alcohol for the next 5d6 days.",
				"55-56 Your hair falls out but grows back within 24 hours.",
				"57-58 For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
				"59-60 You regain your lowest-level expended spell slot.",
				"61-62 For the next minute, you must shout when you speak.",
				"63-64 You cast fog cloud centered on yourself.",
				"65-66 Up to three creatures you choose within 30 ft of you take 4d10 lightning damage.",
				"67-68 You are frightened by the nearest creature until the end of your next turn.",
				"69-70 Each creature within 30 ft of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
				"71-72 You gain resistance to all damage for the next minute.",
				"73-74 A random creature within 60 ft of you becomes poisoned for 1d4 hours.",
				"75-76 You glow with bright light in a 30-ft radius for the next minute. Any creature that ends its turn within 5 ft of you is blinded until the end of its next turn.",
				"79-80 Illusory butterflies and flower petals flutter in the air within 10 ft of you for the next minute.",
				"77-78 You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.",
				"81-82 You can take one additional action immediately.",
				"83-84 Each creature within 30 ft of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.",
				"85-86 You cast mirror image.",
				"87-88 You cast fly on a random creature within 60 ft of you.",
				"89-90 You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
				"91-92 If you die within the next minute, you immediately come back to life as if by the reincarnate spell.",
				"93-94 Your size increases by one size category for the next minute.",
				"95-96 You and all creatures within 30 ft of you gain vulnerability to piercing damage for the next minute.",
				"97-98 You are surrounded by faint, ethereal music for the next minute.",
				"99-100 You regain all expended sorcery points."
			]),
			eval : "try {AddToNotes(ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable1, \"Wild Mage's Wild Magic Surge table, part 1\"); AddToNotes(ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable2, \"Wild Mage's Wild Magic Surge table, part 2\");} catch (er) {};",
			removeeval : "try {AddToNotes('', '', ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable1); AddToNotes('', '', ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable2);} catch (er) {};"
		},
		"subclassfeature1.1" : {
			name : "Tides of Chaos",
			source : ["P", 103],
			minlevel : 1,
			description : "\n   " + "I can gain advantage on either one attack roll, ability check, or saving throw" + "\n   " + "After I cast a 1st-level or higher sorcerer spell, the DM can impose a Wild Magic Surge" + "\n   " + "After I roll on the Wild Magic Surge table, I regain my use of Tides of Chaos",
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Bend Luck",
			source : ["P", 103],
			minlevel : 6,
			description : "\n   " + "As a reaction, I can add/subtract 1d4 from another's attack roll, ability check, or save",
			action : ["reaction", " (2 sorcery points)"],
			additional : "2 sorcery points"
		},
		"subclassfeature14" : {
			name : "Controlled Chaos",
			source : ["P", 103],
			minlevel : 14,
			description : "\n   " + "Whenever I roll on the Wild Magic Surge table, I can roll twice and use either result"
		},
		"subclassfeature18" : {
			name : "Spell Bombardment",
			source : ["P", 103],
			minlevel : 18,
			description : "\n   " + "Once per turn, when I roll spell damage, I can take one damage die that rolled max" + "\n   " + "I can then roll this die again and add it to the spell's damage"
		}
	}
});
AddSubClass("warlock", "the archfey", {
	regExpSearch : /^(?=.*fey)(?=.*warlock).*$/i,
	subname : "the Archfey",
	source : ["P", 109],
	spellcastingExtra : ["faerie fire", "sleep", "calm emotions", "phantasmal force", "blink", "plant growth", "dominate beast", "greater invisibility", "dominate person", "seeming"],
	features : {
		"subclassfeature1" : {
			name : "Fey Presence",
			source : ["P", 109],
			minlevel : 1,
			description : "\n   " + "As an action, all creatures in a 10-ft cube around me must make a Wisdom save" + "\n   " + "If failed, they're all charmed or frightened (my choice) until the end of my next turn",
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Misty Escape",
			source : ["P", 109],
			minlevel : 6,
			description : "\n   " + "As a reaction, when I take damage, I can turn invisible and teleport up to 60 ft" + "\n   " + "I stay invisible until the start of my next turn or until I attack or cast a spell",
			action : ["reaction", " (taking damage)"],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Beguiling Defenses",
			source : ["P", 109],
			minlevel : 10,
			description : "\n   " + "As a reaction, when a creature tries to charm me, I can turn the charm back on it" + "\n   " + "It must make a Wis save or be charmed by me for 1 minute or until taking damage" + "\n   " + "I am immune to being charmed",
			action : ["reaction", " (when charmed)"],
			savetxt : { immune : ["charmed"] }
		},
		"subclassfeature14" : {
			name : "Dark Delirium",
			source : ["P", 109],
			minlevel : 14,
			description : "\n   " + "As an action, a creature within 60 ft must make a Wis save or be charmed/frightened" + "\n   " + "This lasts for 1 minute or until my concentration is broken or it takes damage" + "\n   " + "During this time, it can't see or hear anything but the illusion, me, and itself",
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("warlock", "the great old one", {
	regExpSearch : /^(((?=.*(tharizdun|cthulhu))(?=.*warlock))|((?=.*(great|dread))(?=.*(ancient|old))(?=.*\b(one|entity)\b))).*$/i,
	subname : "the Great Old One",
	source : ["P", 110],
	spellcastingExtra : ["dissonant whispers", "tasha's hideous laughter", "detect thoughts", "phantasmal force", "clairvoyance", "sending", "dominate beast", "evard's black tentacles", "dominate person", "telekinesis"],
	features : {
		"subclassfeature1" : {
			name : "Awakened Mind",
			source : ["P", 110],
			minlevel : 1,
			description : "\n   " + "I can telepathically speak to creatures I can see within 30 ft if they know a language" // 'to' not 'with', so one-way
		},
		"subclassfeature6" : {
			name : "Entropic Ward",
			source : ["P", 110],
			minlevel : 6,
			description : "\n   " + "As a reaction, when I'm attacked, I can impose disadvantage to that attack roll" + "\n   " + "If it misses me, I have adv. on my next attack vs. the attacker during my next turn",
			action : ["reaction", " (when attacked)"],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Thought Shield",
			source : ["P", 110],
			minlevel : 10,
			description : "\n   " + "No one can read my mind unless I allow it; I have resistance to psychic damage" + "\n   " + "When I take psychic damage, the dealer of the psychic damage takes the same amount",
			dmgres : ["Psychic"]
		},
		"subclassfeature14" : {
			name : "Create Thrall",
			source : ["P", 110],
			minlevel : 14,
			description : "\n   " + "As an action, I can charm an incapacitated humanoid by touch" + "\n   " + "While it is charmed, I can communicate with it telepathically if it is on the same plane" + "\n   " + "This lasts until the charm is removed (can be by Remove Curse) or I use this again",
			action : ["action", ""]
		}
	}
});
AddSubClass("wizard", "abjuration", {
	regExpSearch : /(abjuration|abjurer)/i,
	subname : "School of Abjuration",
	fullname : "Abjurer",
	source : ["P", 115],
	features : {
		"subclassfeature2" : {
			name : "Abjuration Savant",
			source : ["P", 115],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy abjuration spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Arcane Ward",
			source : ["P", 115],
			minlevel : 2,
			description : "\n   " + "Whenever I cast an 1st-level or higher abjuration spell, I make/heal a ward" + "\n   " + "I make it at max HP; When I cast again, it heals two HP per spell level" + "\n   " + "It stays active at 0 HP and doesn't go away until my next long rest" + "\n   " + "If I take damage, the ward takes the damage instead, but excess damage carries over",
			additional : levels.map( function(n) {
				if (n < 2) return "";
				return "Ward max HP: " + (n * 2) + "+Int mod";
			}),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Protected Ward",
			source : ["P", 115],
			minlevel : 6,
			description : "\n   " + "As a reaction, my Arcane Ward can absorb damage done to a creature within 30 ft",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Improved Abjuration",
			source : ["P", 115],
			minlevel : 10,
			description : "\n   " + "When I cast an abjuration spell requiring an ability check, I add my proficiency bonus"
		},
		"subclassfeature14" : {
			name : "Spell Resistance",
			source : ["P", 116],
			minlevel : 14,
			description : "\n   " + "I have adv. on spell saves and resistance to damaging spells",
			dmgres : ["Spells"],
			savetxt : { adv_vs : ["spells"] }
		}
	}
});
AddSubClass("wizard", "conjuration", {
	regExpSearch : /(conjuration|conjurer)/i,
	subname : "School of Conjuration",
	fullname : "Conjurer",
	source : ["P", 116],
	features : {
		"subclassfeature2" : {
			name : "Conjuration Savant",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy conjuration spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Minor Conjuration",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "As an action, I can conjure an object up to 3 ft on each side and no more than 10 lbs" + "\n   " + "It must be of a form of a nonmagical object I have seen and is created within 10 ft" + "\n   " + "The object disappears after 1 hour, if it takes or deals damage, or when I use this again",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Benign Transposition",
			source : ["P", 116],
			minlevel : 6,
			description : "\n   " + "As an action, I can teleport to a place within 30 ft that I can see" + "\n   " + "Instead, I can swap places with a willing Small/Medium creature in 30 ft that I can see" + "\n   " + "I can do this again after a long rest or casting a 1st-level or higher conjuration spell",
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Focused Conjuration",
			source : ["P", 116],
			minlevel : 10,
			description : "\n   " + "While I am concentrating on a conjuration spell, it can't be broken by taking damage"
		},
		"subclassfeature14" : {
			name : "Durable Summons",
			source : ["P", 116],
			minlevel : 14,
			description : "\n   " + "Any creature I summon or create with a conjuration spell has 30 temporary hit points"
		}
	}
});
AddSubClass("wizard", "divination", {
	regExpSearch : /(divination|diviner|divinator)/i,
	subname : "School of Divination",
	fullname : "Diviner",
	source : ["P", 116],
	features : {
		"subclassfeature2" : {
			name : "Divination Savant",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy divination spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Portent",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "After a long rest, I roll dice and keep the results to be used before my next rest" + "\n   " + "A result can replace an attack/save/ability check made by me or a creature I can see" + "\n   " + "I choose to switch them before the dice to be replaced are rolled; Max once per turn",
			additional : ["", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest"]
		},
		"subclassfeature6" : {
			name : "Expert Divination",
			source : ["P", 116],
			minlevel : 6,
			description : "\n   " + "When I cast a divination spell, I recover a spell slot of a lower level than the one I cast",
			additional : "Spell slot < 6th-level"
		},
		"subclassfeature10" : {
			name : "The Third Eye",
			source : ["P", 116],
			minlevel : 10,
			description : "\n   " + "As an action, I gain one of the following until my next short or long rest:" + "\n   " + "Darkvision 60ft, see the Ethereal Plane 60ft, read any language, or see invisibility 10ft",
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		},
		"subclassfeature14" : {
			name : "Greater Portent",
			source : ["P", 117],
			minlevel : 14,
			description : "\n   " + "I can roll 3d20 instead of 2d20 when using my Portent feature"
		}
	}
});
AddSubClass("wizard", "enchantment", {
	regExpSearch : /(enchantment|enchanter)/i,
	subname : "School of Enchantment",
	fullname : "Enchanter",
	source : ["P", 117],
	features : {
		"subclassfeature2" : {
			name : "Enchantment Savant",
			source : ["P", 117],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy enchantment spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Hypnotic Gaze",
			source : ["P", 117],
			minlevel : 2,
			description : "\n   " + "As an action, a seen enemy within 5 ft must make a Wis save or be charmed" + "\n   " + "This doesn't work if it can't see/hear me; It's also incapacitated and reduced to 0 speed" + "\n   " + "This lasts until the end of my next turn, but I can use an action to extend the duration" + "\n   " + "It also ends if it takes damage, can't see or hear me, or is more than 5 ft from me" + "\n   " + "On success or once it ends, I can't use this on it again until after a long rest",
			action : ["action", ""],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Instinctive Charm",
			source : ["P", 117],
			minlevel : 6,
			description : "\n   " + "As a reaction, when someone I can see in 30 ft attacks me, it must make a Wis save" + "\n   " + "If failed, it must instead attack the closest creature within range (not me or self)" + "\n   " + "On a success, the target is immune to this until after my long rest; This is a charm effect",
			action : ["reaction", " (when attacked)"]
		},
		"subclassfeature10" : {
			name : "Split Enchantment",
			source : ["P", 117],
			minlevel : 10,
			description : "\n   " + "When I cast an enchantment spell with only one target, I can target a second in range" + "\n   " + "This does not apply to cantrips"
		},
		"subclassfeature14" : {
			name : "Alter Memories",
			source : ["P", 117],
			minlevel : 14,
			description : "\n   " + "When I cast an enchantment spell that charms, I can have one target be unaware of it" + "\n   " + "Also, once before that spell ends, I can have that target forget time while affected" + "\n   " + "It must make an Intelligence save or lose up to 1 + Charisma modifier hours of memory"
		}
	}
});
AddSubClass("wizard", "illusion", {
	regExpSearch : /(illusion|illusionist|illusionary)/i,
	subname : "School of Illusion",
	fullname : "Illusionist",
	source : ["P", 118],
	features : {
		"subclassfeature2" : {
			name : "Illusion Savant",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy illusion spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Improved Minor Illusion",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "I gain the knowledge of the Minor Illusion cantrip (or another if I already knew it)" + "\n   " + "When I cast it, I can create both a sound and an image with a single casting",
			spellcastingBonus : {
				name : "Minor Illusion cantrip",
				spells : ["minor illusion"],
				selection : ["minor illusion"]
			}
		},
		"subclassfeature6" : {
			name : "Malleable Illusion",
			source : ["P", 118],
			minlevel : 6,
			description : "\n   " + "After I cast an illusion spell that lasts 1 min or longer, I can use an action to change it",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Illusory Self",
			source : ["P", 118],
			minlevel : 10,
			description : "\n   " + "As a reaction, when I'm attacked, I can impose an illusion that makes the attack miss",
			action : ["reaction", ""],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Illusory Reality",
			source : ["P", 118],
			minlevel : 14,
			description : "\n   " + "As a bonus action, after I cast a 1st-level or higher illusion spell, I can make it real" + "\n   " + "One inanimate, nonmagical object that is part of the illusion becomes real for 1 minute" + "\n   " + "The object can't be something that directly harms someone",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("wizard", "necromancy", {
	regExpSearch : /(necromancy|necromancer|necromantic)/i,
	subname : "School of Necromancy",
	fullname : "Necromancer",
	source : ["P", 118],
	features : {
		"subclassfeature2" : {
			name : "Necromancy Savant",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy necromancy spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Grim Harvest",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "Once per turn, when I kill something with a 1st-level or higher spell, I regain hit points" + "\n   " + "The number of hit points regained is 2\u00D7 the spell's level (or 3\u00D7 with necromancy spells)" + "\n   " + "This doesn't occur for constructs/undead"
		},
		"subclassfeature6" : {
			name : "Undead Thralls",
			source : ["P", 119],
			minlevel : 6,
			description : "\n   " + "I add Animate Dead to my spellbook and can have an additional target when casting it" + "\n   " + "Undead created by my necromancy spells have the following benefits:" + "\n   " + "They add my proficiency bonus to damage and my wizard level to their HP maximums"
		},
		"subclassfeature10" : {
			name : "Inured to Undead",
			source : ["P", 119],
			minlevel : 10,
			description : "\n   " + "I have resistance to necrotic damage and my hit point maximum can't be reduced",
			dmgres : ["Necrotic"]

		},
		"subclassfeature14" : {
			name : "Command Undead",
			source : ["P", 11],
			minlevel : 14,
			description : "\n   " + "As an action, an undead within 60 ft that I can see must make a Charisma save" + "\n   " + "If its Int is > 7, it has adv. on the save; If its Int is > 11, it repeats the save every hour" + "\n   " + "If failed, it becomes friendly to me and obeys my commands until I use this on another" + "\n   " + "On success, it becomes permanently immune to my further attempts",
			action : ["action", ""]
		}
	}
});
AddSubClass("wizard", "transmutation", {
	regExpSearch : /(transmutation|transmuter)/i,
	subname : "School of Transmutation",
	fullname : "Transmuter",
	source : ["P", 119],
	features : {
		"subclassfeature2" : {
			name : "Transmutation Savant",
			source : ["P", 119],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy transmutation spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Minor Alchemy",
			source : ["P", 119],
			minlevel : 2,
			description : "\n   " + "I can transform an object of wood/stone/iron/copper/silver into another of those" + "\n   " + "For each 10 min I spend, I can transform up to 1 cubic foot of the material" + "\n   " + "It reverts back when I lose concentration or after 1 hour"
		},
		"subclassfeature6" : {
			name : "Transmuter's Stone",
			source : ["P", 119],
			minlevel : 6,
			description : "\n   " + "In 8 hours, I can create a transmuter's stone that gives its wielder one of the following:" + "\n    - " + "Darkvision 60 ft" + "\n    - " + "10 ft increase to speed while unencumbered" + "\n    - " + "Proficiency in Constitution saving throws" + "\n    - " + "Resistance to either acid, cold, fire, lightning, or thunder damage" + "\n   " + "The benefit is chosen at creation; I can have only one active stone at a time" + "\n   " + "I can change the benefit when I cast a 1st-level or higher transmutation spell with it"
		},
		"subclassfeature10" : {
			name : "Shapechanger",
			source : ["P", 119],
			minlevel : 10,
			description : "\n   " + "I add Polymorph to my spellbook; I can cast it on myself without using a spell slot" + "\n   " + "When I do that, I can only transform into a beast with a challenge rating of 1 or lower",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Master Transmuter",
			source : ["P", 119],
			minlevel : 14,
			description : "\n   " + "As an action, I can destroy my transmuter's stone and do one of the four following:" + "\n    " + "1) Major Transformation" + "\n      " + "In 10 minutes, I transmute one nonmagical object up to 5 cubic foot into another" + "\n      " + "This new, nonmagical object must be of similar size and mass and equal or less value" + "\n    " + "2) Panacea" + "\n      " + "One touched has all curses, diseases, and poisons removed and is healed to max HP" + "\n    " + "3) Restore Life" + "\n      " + "I cast Raise Dead without using spell slots or needing to have it in my spellbook" + "\n    " + "4) Restore Youth" + "\n      " + "A touched creature's apparent age is reduced by 3d10 years (to a minimum of 13)",
			action : ["action", ""]
		}
	}
});

// Add the backgrounds that are not in the SRD
BackgroundList["charlatan"] = {
	regExpSearch : /charlatan/i,
	name : "Charlatan",
	source : ["P", 128],
	skills : ["Deception", "Sleight of Hand"],
	gold : 15,
	equipleft : [
		["Disguise kit", "", 3],
		["Tools for chosen con", "", ""],
	],
	equipright : [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "False Identity",
	trait : [
		"I fall in and out of love easily, and am always pursuing someone.",
		"I have a joke for every occasion, especially occasions where humor is inappropriate.",
		"Flattery is my preferred trick for getting what I want.",
		"I'm a born gambler who can't resist taking a risk for a potential payoff.",
		"I lie about almost everything, even when there's no good reason to.",
		"Sarcasm and insults are my weapons of choice.",
		"I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
		"I pocket anything I see that might have some value."
	],
	ideal : [
		["Independence",
			"Independence: I am a free spirit \u2015 no one tells me what to do. (Chaotic)"
		],
		["Fairness",
			"Fairness: I never target people who can't afford to lose a few coins. (Lawful)"
		],
		["Charity",
			"Charity: I distribute the money I acquire to the people who really need it. (Good)"
		],
		["Creativity",
			"Creativity: I never run the same con twice. (Chaotic)"
		],
		["Friendship",
			"Friendship: Material goods come and go. Bonds of friendship last forever. (Good)"
		],
		["Aspiration",
			"Aspiration: I'm determined to make something of myself. (Any)"
		],
	],
	bond : [
		"I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
		"I owe everything to my mentor \u2015 a horrible person who's probably rotting in jail somewhere.",
		"Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
		"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
		"A powerful person killed someone I love. Someday soon, I'll have my revenge.",
		"I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
	],
	flaw : [
		"I can't resist a pretty face.",
		"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
		"I'm convinced that no one could ever fool me the way I fool others.",
		"I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
		"I can't resist swindling people who are more powerful than me.",
		"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
	],
	extra : [
		"Select a Favorite Scheme",
		"Cheat at games of chance",
		"Shave coins, forge documents",
		"User/manipulator",
		"Change identity",
		"Sleight-of-hand cons",
		"Sell junk as expensive necessities"
	],
	toolProfs : ["Disguise kit", "Forgery kit"],
	lifestyle : "comfortable"
};
BackgroundList["criminal"] = {
	regExpSearch : /(criminal|blackmailer|burglar|fence|robber|killer|assassin|pickpocket|smuggler)/i,
	name : "Criminal",
	source : ["P", 129],
	skills : ["Deception", "Stealth"],
	gold : 15,
	equipright : [
		["Dark, common clothes with hood", "", 3],
		["Crowbar", "", 5],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Criminal Contact",
	trait : [
		"I always have a plan for what to do when things go wrong.",
		"I am always calm, no matter the situation. I never raise my voice or let my emotions control me.",
		"The first thing I do in a new place is note the locations of everything valuable \u2015 or where such things could be hidden.",
		"I would rather make a new friend than a new enemy.",
		"I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
		"I don't pay attention to the risks in a situation. Never tell me the odds.",
		"The best way to get me to do something is to tell me I can't do it.",
		"I blow up at the slightest insult."
	],
	ideal : [
		["Honor",
			"Honor: I don't steal from others in the trade. (Lawful)"
		],
		["Freedom",
			"Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)"
		],
		["Charity",
			"Charity: I steal from the wealthy so that I can help people in need. (Good)"
		],
		["Greed",
			"Greed: I will do whatever it takes to become wealthy. (Evil)"
		],
		["People",
			"People: I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)"
		],
		["Redemption",
			"Redemption: There's a spark of good in everyone. (Good)"
		],
	],
	bond : [
		"I'm trying to pay off an old debt I owe to a generous benefactor.",
		"My ill-gotten gains go to support my family.",
		"Something important was taken from me, and I aim to steal it back.",
		"I will become the greatest thief that ever lived.",
		"I'm guilty of a terrible crime. I hope I can redeem myself for it.",
		"Someone I loved died because of a mistake I made. That will never happen again."
	],
	flaw : [
		"When I see something valuable, I can't think about anything but how to steal it.",
		"When faced with a choice between money and my friends, I usually choose the money.",
		"If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
		"I have a \"tell\" that reveals when I'm lying.",
		"I turn tail and run when things look bad.",
		"An innocent person is in prison for a crime that I committed. I'm okay with that."
	],
	extra : [
		"Select a Criminal Specialty",
		"Blackmailer",
		"Burglar",
		"Enforcer",
		"Fence",
		"Highway robber",
		"Hired killer",
		"Pickpocket",
		"Smuggler",
		"Spy"
	],
	toolProfs : [["Gaming set", 1], ["Thieves' tools", "Dex"]],
	lifestyle : "poor"
};
BackgroundList["entertainer"] = {
	regExpSearch : /(entertainer|actor|dancer|fire.?eater|jester|juggler|instrumentalist|poet|singer|storyteller|tumbler)/i,
	name : "Entertainer",
	source : ["P", 130],
	skills : ["Acrobatics", "Performance"],
	gold : 15,
	equipright : [
		["Costume", "", 4],
		["Favor of an admirer", "", ""],
		["Belt pouch (with coins)", "", 1],
		["Musical instrument of my choice", "", ""],
	],
	feature : "By Popular Demand",
	trait : [
		"I know a story relevant to almost every situation.",
		"Whenever I come to a new place, I collect local rumors and spread gossip.",
		"I'm a hopeless romantic, always searching for that 'special someone'.",
		"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
		"I love a good insult, even one directed at me.",
		"I get bitter if I'm not the center of attention.",
		"I'll settle for nothing less than perfection.",
		"I change my mood or my mind as quickly as I change key in a song."
	],
	ideal : [
		["Beauty",
			"Beauty: When I perform, I make the world better than it was. (Good)"
		],
		["Tradition",
			"Tradition: The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)"
		],
		["Creativity",
			"Creativity: The world is in need of new ideas and bold action. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money and fame. [Evil]"
		],
		["People",
			"People: I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)"
		],
		["Honesty",
			"Honesty: Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
		],
	],
	bond : [
		"My instrument is my most treasured possession, and it reminds me of someone I love.",
		"Someone stole my precious instrument, and someday I'll get it back.",
		"I want to be famous, whatever it takes.",
		"I idolize a hero of the old tales and measure my deeds against that person's.",
		"I will do anything to prove myself superior to my hated rival.",
		"I would do anything for the other members of my old troupe."
	],
	flaw : [
		"I'll do anything to win fame and renown.",
		"I'm a sucker for a pretty face.",
		"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
		"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
		"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
		"Despite my best efforts, I am unreliable to my friends."
	],
	extra : [
		"Select an Entertainer Routine",
		"Actor",
		"Dancer",
		"Fire-eater",
		"Jester",
		"Juggler",
		"Instrumentalist",
		"Poet",
		"Singer",
		"Storyteller",
		"Tumbler"
	],
	toolProfs : ["Disguise kit", ["Musical instrument", 1]],
	lifestyle : "modest"
};
BackgroundList["folk hero"] = {
	regExpSearch : /^(?=.*folk)(?=.*hero).*$/i,
	name : "Folk Hero",
	source : ["P", 131],
	skills : ["Animal Handling", "Survival"],
	gold : 10,
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Shovel", "", 5],
		["Iron pot", "", 10],
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Rustic Hospitality",
	trait : [
		"I judge people by their actions, not their words.",
		"If someone is in trouble, I'm always ready to lend help.",
		"When I set my mind to something, I follow through no matter what gets in my way.",
		"I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
		"I'm confident in my own abilities and do what I can to instill confidence in others.",
		"Thinking is for other people. I prefer action.",
		"I misuse long words in an attempt to sound smarter.",
		"I get bored easily. When am I going to get on with my destiny?"
	],
	ideal : [
		["Respect",
			"Respect: People deserve to be treated with dignity and respect. (Good)"
		],
		["Fairness",
			"Fairness: No one should get preferential treatment before the law, and no one is above the law. (Lawful)"
		],
		["Freedom",
			"Freedom: Tyrants must not be allowed to oppress the people. (Chaotic)"
		],
		["Might",
			"Might: If I become strong, I can take what I want\u2015 what I deserve. (Evil)"
		],
		["Sincerity",
			"Sincerity: There's no good in pretending to be something I'm not. (Neutral)"
		],
		["Destiny",
			"Destiny: Nothing and no one can steer me away from my higher calling. (Any)"
		],
	],
	bond : [
		"I have a family, but I have no idea where they are. One day, I hope to see them again.",
		"I worked the land, I love the land, and I will protect the land.",
		"A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
		"My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
		"I protect those who cannot protect themselves.",
		"I wish my childhood sweetheart had come with me to pursue my destiny."
	],
	flaw : [
		"The tyrant who rules my land will stop at nothing to see me killed.",
		"I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
		"The people who knew me when I was young know my shameful secret, so I can never go home again.",
		"I have a weakness for the vices of the city, especially hard drink.",
		"Secretly, I believe that things would be better if I were a tyrant lording over the land.",
		"I have trouble trusting in my allies."
	],
	extra : [
		"Select a Defining Event",
		"I stood up to a tyrant's agents",
		"I saved people during a natural disaster",
		"I stood alone against a terrible monster",
		"I stole from a corrupt merchant for the poor",
		"I led a militia to fight off an invading army",
		"I stole weapons from a tyrant to arm the people",
		"I trained peasantry to fight a tyrant with farm tools",
		"A decree was rescinded after I led a protest against it",
		"A magical creature gave me a blessing or insight",
		"I rose to leadership in a lord's army"
	],
	toolProfs : [["Artisan's tools", 1], "Vehicles (land)"],
	lifestyle : "modest"
};
BackgroundList["guild artisan"] = {
	regExpSearch : /^(?=.*guild)(?=.*artisan).*$/i,
	name : "Guild Artisan",
	source : ["P", 132],
	skills : ["Insight", "Persuasion"],
	gold : 15,
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Letter of introduction from guild", "", ""],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Guild Membership",
	trait : [
		"I believe that anything worth doing is worth doing right. I can't help it\u2015 I'm a perfectionist.",
		"I'm a snob who looks down on those who can't appreciate fine art.",
		"I always want to know how things work and what makes people tick.",
		"I'm full of witty aphorisms and have a proverb for every occasion.",
		"I'm rude to people who lack my commitment to hard work and fair play.",
		"I like to talk at length about my profession.",
		"I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
		"I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
	],
	ideal : [
		["Community",
			"Community: It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)"
		],
		["Generosity",
			"Generosity: My talents were given to me so that I could use them to benefit the world. (Good)"
		],
		["Freedom",
			"Freedom: Everyone should be free to pursue his or her own livelihood. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money. (Evil)"
		],
		["People",
			"People: I'm committed to the people I care about, not to ideals. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I work hard to be the best there is at my craft. (Any)"
		],
	],
	bond : [
		"The workshop where I learned my trade is the most important place in the world to me.",
		"I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
		"I owe my guild a great debt for forging me into the person I am today.",
		"I pursue wealth to secure someone's love.",
		"One day I will return to my guild and prove that I am the greatest artisan of them all.",
		"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
	],
	flaw : [
		"I'll do anything to get my hands on something rare or priceless.",
		"I'm quick to assume that someone is trying to cheat me.",
		"No one must ever learn that I once stole money from guild coffers.",
		"I'm never satisfied with what I have\u2015 I always want more.",
		"I would kill to acquire a noble title.",
		"I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
	],
	extra : [
		"Select a Guild Business",
		"Alchemists and apothecaries",
		"Armorers, locksmiths, and finesmiths",
		"Brewers, distillers, and vintners",
		"Calligraphers, scribes, and scriveners",
		"Carpenters, roofers, and plasterers",
		"Cartographers, surveyors, and chart-makers",
		"Cobblers and shoemakers",
		"Cooks and bakers",
		"Glassblowers and glaziers",
		"Jewelers and gemcutters",
		"Leatherworkers, skinners, and tanners",
		"Masons and stonecutters",
		"Painters, limners, and sign-makers",
		"Potters and tile-makers",
		"Shipwrights and sailmakers",
		"Smiths and metal-forgers",
		"Tinkers, pewterers, and casters",
		"Wagon-makers and wheelwrights",
		"Weavers and dyers",
		"Woodcarvers, coopers, and bowyers"
	],
	toolProfs : [["Artisan's tools", 1]],
	languageProfs : [1],
	lifestyle : "comfortable"
};
BackgroundList["hermit"] = {
	regExpSearch : /hermit/i,
	name : "Hermit",
	source : ["P", 134],
	skills : ["Medicine", "Religion"],
	gold : 5,
	equipleft : [
		["Winter blanket", "", 3],
		["Herbalism kit", "", 3],
	],
	equipright : [
		["Common clothes", "", 3],
		["Scroll case with notes", "", 1],
	],
	feature : "Discovery",
	trait : [
		"I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
		"I am utterly serene, even in the face of disaster.",
		"The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
		"I feel tremendous empathy for all who suffer.",
		"I'm oblivious to etiquette and social expectations.",
		"I connect everything that happens to me to a grand, cosmic plan.",
		"I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
		"I am working on a grand philosophical theory and love sharing my ideas."
	],
	ideal : [
		["Greater Good",
			"Greater Good: My gifts are meant to be shared with all, not used for my own benefit. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)"
		],
		["Free Thinking",
			"Free Thinking: Inquiry and curiosity are the pillars of progress. (Chaotic)"
		],
		["Power",
			"Power: Solitude and contemplation are paths toward mystical or magical power. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Meddling in the affairs of others only causes trouble. (Neutral)"
		],
		["Self-Knowledge",
			"Self-Knowledge: If you know yourself, there's nothing left to know. (Any)"
		],
	],
	bond : [
		"Nothing is more important than the other members of my hermitage, order, or association.",
		"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
		"I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
		"I entered seclusion because I loved someone I could not have.",
		"Should my discovery come to light, it could bring ruin to the world.",
		"My isolation gave me great insight into a great evil that only I can destroy."
	],
	flaw : [
		"Now that I've returned to the world, I enjoy its delights a little too much.",
		"I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
		"I am dogmatic in my thoughts and philosophy.",
		"I let my need to win arguments overshadow friendships and harmony.",
		"I'd risk too much to uncover a lost bit of knowledge.",
		"I like keeping secrets and won't share them with anyone."
	],
	extra : [
		"Select a Life of Seclusion",
		"Searching for spiritual enlightenment",
		"Living in accordance with a religious order",
		"Exiled for a crime I didn't commit",
		"Retreated from society after a life-altering event",
		"Worked on my art, literature, music, or manifesto",
		"Commune with nature, far from civilization",
		"Caretaker of an ancient ruin or relic",
		"Pilgrim in search of a thing of spiritual significance"
	],
	toolProfs : ["Herbalism kit"],
	languageProfs : [1],
	lifestyle : "poor"
};
BackgroundList["noble"] = {
	regExpSearch : /^(?!.*(waterdhavian|waterdeep|knight))(?=.*noble).*$/i,
	name : "Noble",
	source : ["P", 135],
	skills : ["History", "Persuasion"],
	gold : 25,
	equipleft : [
		["Scroll of pedigree", "", ""],
	],
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Purse (with coins)", "", 1],
	],
	feature : "Position of Privilege",
	trait : [
		"My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
		"The common folk love me for my kindness and generosity.",
		"No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
		"I take great pains to always look my best and follow the latest fashions.",
		"I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
		"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
		"My favor, once lost, is lost forever.",
		"If you do me an injury, I will crush you, ruin your name, and salt your fields."
	],
	ideal : [
		["Respect",
			"Respect: Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)"
		],
		["Responsibility",
			"Responsibility: It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)"
		],
		["Independence",
			"Independence: I must prove that I can handle myself without the coddling of my family. (Chaotic)"
		],
		["Power",
			"Power: If I can attain more power, no one will tell me what to do. (Evil)"
		],
		["Family",
			"Family: Blood runs thicker than water. (Any)"
		],
		["Noble Obligation",
			"Noble Obligation: It is my duty to protect and care for the people beneath me. (Good)"
		],
	],
	bond : [
		"I will face any challenge to win the approval of my family.",
		"My house's alliance with another noble family must be sustained at all costs.",
		"Nothing is more important than the other members of my family.",
		"I am in love with the heir of a family that my family despises.",
		"My loyalty to my sovereign is unwavering.",
		"The common folk must see me as a hero of the people."
	],
	flaw : [
		"I secretly believe that everyone is beneath me.",
		"I hide a truly scandalous secret that could ruin my family forever.",
		"I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
		"I have an insatiable desire for carnal pleasures.",
		"In fact, the world does revolve around me.",
		"By my words and actions, I often bring shame to my family."
	],
	toolProfs : [["Gaming set", 1]],
	languageProfs : [1],
	lifestyle : "wealthy"
};
BackgroundList["outlander"] = {
	regExpSearch : /^(?!.*urban)(?=.*(outlander|forester|trapper|homesteader|guide|exile|outcast|bounty.?hunter|tribal nomad|hunter-gatherer|tribal.?marauder)).*$/i,
	name : "Outlander",
	source : ["P", 136],
	skills : ["Athletics", "Survival"],
	gold : 10,
	equipright : [
		["Traveler's clothes", "", 4],
		["Staff", "", 4],
		["Hunting trap", "", 25],
		["Trophy from animal", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Wanderer",
	trait : [
		"I'm driven by a wanderlust that led me away from home.",
		"I watch over my friends as if they were a litter of newborn pups.",
		"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
		"I have a lesson for every situation, drawn from observing nature.",
		"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
		"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
		"I feel far more comfortable around animals than people.",
		"I was, in fact, raised by wolves."
	],
	ideal : [
		["Change",
			"Change: Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
		],
		["Greater Good",
			"Greater Good: It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
		],
		["Honor",
			"Honor: If I dishonor myself, I dishonor my whole clan. (Lawful)"
		],
		["Might",
			"Might: The strongest are meant to rule. (Evil)"
		],
		["Nature",
			"Nature: The natural world is more important than all the constructs of civilization. (Neutral)"
		],
		["Glory",
			"Glory: I must earn glory in battle, for myself and my clan. (Any)"
		],
	],
	bond : [
		"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
		"An injury to the unspoiled wilderness of my home is an injury to me.",
		"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
		"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
		"I suffer awful visions of a coming disaster and will do anything to prevent it.",
		"It is my duty to provide children to sustain my tribe."
	],
	flaw : [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
	],
	extra : ["Select an Origin",
		"Forester",
		"Trapper",
		"Homesteader",
		"Guide",
		"Exile or outcast",
		"Bounty hunter",
		"Pilgrim",
		"Tribal nomad",
		"Hunter-gatherer",
		"Tribal marauder"
	],
	toolProfs : [["Musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "poor"
};
BackgroundList["sage"] = {
	regExpSearch : /(sage|alchemist|astronomer|academic|librarian|professor|researcher|apprentice|scribe)/i,
	name : "Sage",
	source : ["P", 137],
	skills : ["Arcana", "History"],
	gold : 10,
	equipleft : [
		["Ink, 1 ounce bottle of", 1, ""],
		["Ink pen (quill)", "", ""],
		["Small knife", "", 0.5],
		["Letter from dead colleague", "", ""],
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Researcher",
	trait : [
		"I use polysyllabic words that convey the impression of great erudition.",
		"I've read every book in the world's greatest libraries\u2015 or I like to boast that I have.",
		"I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
		"There's nothing I like more than a good mystery.",
		"I'm willing to listen to every side of an argument before I make my own judgment.",
		"I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost. . . everyone . . . is . . . compared . . . to me.",
		"I am horribly, horribly awkward in social situations.",
		"I'm convinced that people are always trying to steal my secrets."
	],
	ideal : [
		["Knowledge",
			"Knowledge: The path to power and self-improvement is through knowledge. (Neutral)"
		],
		["Beauty",
			"Beauty: What is beautiful points us beyond itself toward what is true. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our logical thinking. (Lawful)"
		],
		["No Limits",
			"No Limits: Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)"
		],
		["Power",
			"Power: Knowledge is the path to power and domination. (Evil)"
		],
		["Self-Improvement",
			"Self-Improvement: The goal of a life of study is the betterment of oneself. (Any)"
		],
	],
	bond : [
		"It is my duty to protect my students.",
		"I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
		"I work to preserve a library, university, scriptorium, or monastery.",
		"My life's work is a series of tomes related to a specific field of lore.",
		"I've been searching my whole life for the answer to a certain question.",
		"I sold my soul for knowledge. I hope to do great deeds and win it back."
	],
	flaw : [
		"I am easily distracted by the promise of information.",
		"Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
		"Unlocking an ancient mystery is worth the price of a civilization.",
		"I overlook obvious solutions in favor of complicated ones.",
		"I speak without really thinking through my words, invariably insulting others.",
		"I can't keep a secret to save my life, or anyone else's."
	],
	extra : ["Select a Specialty",
		"Alchemist",
		"Astronomer",
		"Discredited academic",
		"Librarian",
		"Professor",
		"Researcher",
		"Wizard's apprentice",
		"Scribe"
	],
	languageProfs : [2],
	lifestyle : "modest"
};
BackgroundList["sailor"] = {
	regExpSearch : /sailor/i,
	name : "Sailor",
	source : ["P", 139],
	skills : ["Athletics", "Perception"],
	gold : 10,
	equipleft : [
		["Silk rope, feet of", 50, 0.1]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belaying pin (club)", "", 2],
		["Lucky charm", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Ship's Passage",
	trait : [
		"My friends know they can rely on me, no matter what.",
		"I work hard so that I can play hard when the work is done.",
		"I enjoy sailing into new ports and making new friends over a flagon of ale.",
		"I stretch the truth for the sake of a good story.",
		"To me, a tavern brawl is a nice way to get to know a new city.",
		"I never pass up a friendly wager.",
		"My language is as foul as an otyugh nest.",
		"I like a job well done, especially if I can convince someone else to do it."
	],
	ideal : [
		["Respect",
			"Respect: The thing that keeps a ship together is mutual respect between captain and crew. (Good)"
		],
		["Fairness",
			"Fairness: We all do the work, so we all share in the rewards. (Lawful)"
		],
		["Freedom",
			"Freedom: The sea is freedom\u2015 the freedom to go anywhere and do anything. (Chaotic)"
		],
		["Mastery",
			"Mastery: I'm a predator, and the other ships on the sea are my prey. (Evil)"
		],
		["People",
			"People: I'm committed to my crewmates, not to ideals. (Neutral)"
		],
		["Aspiration",
			"Aspiration: Someday I'll own my own ship and chart my own destiny. (Any)"
		],
	],
	bond : [
		"I'm loyal to my captain first, everything else second.",
		"The ship is most important\u2015 crewmates and captains come and go.",
		"I'll always remember my first ship.",
		"In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
		"I was cheated out of my fair share of the profits, and I want to get my due.",
		"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
	],
	flaw : [
		"I follow orders, even if I think they're wrong.",
		"I'll say anything to avoid having to do extra work.",
		"Once someone questions my courage, I never back down no matter how dangerous the situation.",
		"Once I start drinking, it's hard for me to stop.",
		"I can't help but pocket loose coins and other trinkets I come across.",
		"My pride will probably lead to my destruction."
	],
	toolProfs : ["Navigator's tools", "Vehicles (water)"],
	lifestyle : "modest",
};
BackgroundList["soldier"] = {
	regExpSearch : /^(?!.*mercenary)(?=.*soldier).*$/i,
	name : "Soldier",
	source : ["P", 140],
	skills : ["Athletics", "Intimidation"],
	gold : 10,
	equipright : [
		["Common clothes", "", 3],
		["Insignia of rank", "", ""],
		["Trophy from fallen enemy", "", ""],
		["Bone dice or playing cards", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Military Rank",
	trait : [
		"I'm always respectful and polite.",
		"I'm haunted by memories of war. I can't get the violent images out of my mind.",
		"I'm slow to make new friends, because I've lost too many old ones.",
		"I'm full of inspiring and cautionary tales from my military experience with some relevance to almost every type of combat situation.",
		"I can stare down a owlbear without flinching.",
		"I enjoy my strength and like to break things.",
		"I have a rough sense of humor.",
		"I approach problems head-on. A simple, direct course is the best path to a solution."
	],
	ideal : [
		["Greater Good",
			"Greater Good: Our fate is to give our lives in the defense of others. (Good)"
		],
		["Responsibility",
			"Responsibility: I do what I have to and follow just authority. (Lawful)"
		],
		["Independence",
			"Independence: When people obey orders blindly, they affirm a kind of tyranny. (Chaotic)"
		],
		["Might",
			"Might: In life as in war, the mightier force prevails. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
		],
		["Nation",
			"Nation: My city, state, or people are the only things that matter. (Any)"
		],
	],
	bond : [
		"I would still give my life for the people I have served with.",
		"Someone saved my life on the battlefield. Even now, I would never leave a friend behind.",
		"My honor is my life.",
		"I'll never forget the crushing defeat my company endured or the foes who inflicted it.",
		"Those who fight with me are those worth laying down my life for.",
		"I fight for those who cannot fight for themselves."
	],
	flaw : [
		"The atrocious enemy we faced in battle still leaves me trembling with fear.",
		"I have little respect for those who are not a tested warrior.",
		"A disastrous mistake I made in battle cost many lives\u2015 I will do anything to keep that mistake a secret.",
		"My hatred of my foes is blind and unreasoning. ",
		"I uphold the law, even if the law causes suffering.",
		"I'd rather eat my weapon than admit when I'm wrong."
	],
	extra : ["Select a Specialty",
		"Officer",
		"Scout",
		"Infantry",
		"Cavalry",
		"Healer",
		"Quartermaster",
		"Standard-bearer",
		"Support staff"
	],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"],
	lifestyle : "modest"
};
BackgroundList["urchin"] = {
	regExpSearch : /urchin/i,
	name : "Urchin",
	source : ["P", 141],
	skills : ["Sleight of Hand", "Stealth"],
	gold : 10,
	equipleft : [
		["Map of the city", "", ""],
		["Small knife", "", 0.5],
	],
	equipright : [
		["Common clothes", "", 3],
		["Token from my parents", "", ""],
		["Pet mouse", "", 0.1],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "City Secrets",
	trait : [
		"I keep scraps of food and trinkets hidden away in my pockets.",
		"I ask questions all the time.",
		"I like to squeeze into compact places where nobody can harm me.",
		"I sleep with my back to solid surface, with all that I own embraced tightly in my arms.",
		"I have bad manners and eat like a pig.",
		"I expect that anybody who's nice to me is hiding malicious intent.",
		"I eschew bathing.",
		"I say, without reserve, what other people are implying or masking."
	],
	ideal : [
		["Respect",
			"Respect: Everybody, no matter their riches, deserves respect. (Good)"
		],
		["Community",
			"Community: We have to take look out for each other, because nobody else will do it for us. (Lawful)"
		],
		["Change",
			"Change: The low rise up, and the high and mighty come down. Change is natural. (Chaotic)"
		],
		["Retribution",
			"Retribution: The rich need to be shown how it is to live and die in the poor quarters. (Evil)"
		],
		["People",
			"People: I help those who help me\u2015 that is what lets us stay alive. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I'm going to prove that I'm worthy of a better life. (Any)"
		],
	],
	bond : [
		"My town or city is my home, and I'll battle those that threaten it.",
		"I'm the benefactor of an orphanage so others may be kept from enduring what I was forced to endure.",
		"I owe my life to another urchin who taught me the ways of living in the gutters.",
		"I owe a debt I can never repay to the person who showed me sympathy.",
		"I got away from my life of poverty by robbing an influential person, and I'm wanted for it.",
		"No one else should have to suffer the difficulties I've been through."
	],
	flaw : [
		"I will run away from a fight if I'm outnumbered.",
		"A gold piece already has a lot of value to me, and I'll do just about anything for more of it.",
		"I will never completely trust another. I only trust myself.",
		"I would rather use an unfair advantage than fight honorably.",
		"It's not theft if I have more use for it than someone else.",
		"People who are incapable of taking care of themselves get what they deserve."
	],
	toolProfs : ["Disguise kit", ["Thieves' tools", "Dex"]],
	lifestyle : "modest"
};

// Add the background variants
AddBackgroundVariant("entertainer", "gladiator", {
	regExpSearch : /gladiator/i,
	name : "Gladiator",
	source : ["P", 131],
	equipright : [
		["Costume", "", 4],
		["Favor of an admirer", "", ""],
		["Belt pouch (with coins)", "", 1],
		["Inexpensive, unusual weapon", "", ""]
	],
	feature : "Are You Entertained?",
	extra : ""
});
AddBackgroundVariant("guild artisan", "guild merchant", {
	regExpSearch : /^(?=.*guild)(?=.*merchant).*$/i,
	name : "Guild Merchant",
	source : ["P", 133],
	equipleft : [
		["Letter of introduction from guild", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Cart", "", ""],
		["Mule", "", ""]
	],
	extra : [
		"Select a Guild Business",
		"Traders",
		"Caravan masters",
		"Shopkeepers"
	],
	toolProfs : ["Navigator's tools (or language)"]
});
AddBackgroundVariant("noble", "knight", {
	regExpSearch : /^(?!.*order)(?=.*knight).*$/i,
	name : "Knight",
	source : ["P", 136],
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Purse (with coins)", "", 1],
		["Banner or token from devoted love", "", ""]
	],
	feature : "Retainers"
});
AddBackgroundVariant("sailor", "pirate", {
	regExpSearch : /pirate/i,
	name : "Pirate",
	source : ["P", 139],
	feature : "Bad Reputation"
});

// Add the backgrounds features that are not in the SRD
BackgroundFeatureList["are you entertained?"] = {
	description : "I can always find a place to perform (arena/pit fight), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.",
	source : ["P", 131]
};
BackgroundFeatureList["bad reputation"] = {
	description : "No matter where I go, people are afraid of me due to my reputation. When I am in a civilized settlement, I can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report my activity to the authorities.",
	source : ["P", 139]
};
BackgroundFeatureList["by popular demand"] = {
	description : "I can always find a place to perform (inn/tavern/circus/etc.), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.",
	source : ["P", 130]
};
BackgroundFeatureList["city secrets"] = {
	description : "I know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When I am not in combat, I (and companions I lead) can travel between any two locations in the city twice as fast as my speed would normally allow.",
	source : ["P", 141]
};
BackgroundFeatureList["criminal contact"] = {
	description : "I have a reliable and trustworthy contact who acts as my liaison to a network of other criminals. I know how to get messages to and from my contact, even over great distances; specifically, I know the local messengers, corrupt caravan masters, and seedy sailors who can deliver my messages.",
	source : ["P", 129]
};
BackgroundFeatureList["discovery"] = {
	description : "The quiet seclusion of my extended hermitage gave me access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of my seclusion. It might be a great truth, a hidden site, a long forgotten fact, or unearthed some relic of the past that could rewrite history.",
	source : ["P", 134]
};
BackgroundFeatureList["false identity"] = {
	description : "I have created a second identity that includes documentation, established acquaintances, and disguises that allow me to assume that persona. Additionally, I can forge documents, including official papers and personal letters, as long as I have seen an example of the kind of document or the handwriting I am trying to copy.",
	source : ["P", 128]
};
BackgroundFeatureList["guild membership"] = {
	description : "5 gp membership fees per month: The guild offers lodging if possible. In case of being accused of a crime, the guild will support me if a good case can be made for my innocence or the crime is justifiable. I can also gain access to powerful political figures through the guild, as long as I'm in good standing and the guild is paid enough.",
	source : ["P", 133]
};
BackgroundFeatureList["military rank"] = {
	description : "I have a military rank from my career as a soldier. Soldiers loyal to my former military organization still recognize my authority and influence. I can invoke my rank to influence soldiers and temporarily requisition simple equipment or horses. I can usually gain access to friendly military encampments and fortresses where my rank is recognized.",
	source : ["P", 140]
};
BackgroundFeatureList["position of privilege"] = {
	description : "I am welcome in high society, and people assume I have the right to be wherever I am. The common folk make every effort to accommodate me and avoid my displeasure, and other people of high birth treat me as a member of the same social sphere. I can secure an audience with a local noble if I need to.",
	source : ["P", 135]
};
BackgroundFeatureList["researcher"] = {
	description : "When I attempt to learn or recall a piece of lore, if I do not know that information, I often know where and from whom I can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.",
	source : ["P", 138]
};
BackgroundFeatureList["retainers"] = {
	description : "I have the service of three retainers loyal to me family, one of whom is another noble and my squire. My other retainers are commoners who can perform mundane tasks for me, but they do not fight for me, will not follow me into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.",
	source : ["P", 136]
};
BackgroundFeatureList["rustic hospitality"] = {
	description : "Since I come from the ranks of the common folk, I fit in among them with ease. I can find a place to hide, rest, or recuperate among other commoners, unless I have shown myself to be a danger to them. They will shield me from the law or anyone else searching for me, though they will not risk their lives for me.",
	source : ["P", 131]
};
BackgroundFeatureList["ship's passage"] = {
	description : "When I need to, I can secure free passage on a sailing ship for myself and my companions. I might sail on the ship I served on, or another ship I have good relations with. Because I'm calling in a favor, I can't be certain of a schedule or route that will meet my every need. My companions and I are expected to assist the crew during the voyage.",
	source : ["P", 139]
};
BackgroundFeatureList["wanderer"] = {
	description : "I have an excellent memory for maps and geography, and I can always recall the general layout of terrain, settlements, and other features around me. In addition, I can find food and fresh water for myself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.",
	source : ["P", 136]
};

// Add the feats that are not in the SRD
FeatsList["actor"] = {
	name : "Actor",
	source : ["P", 165],
	description : "Advantage on Charisma (Deception) and (Performance) if trying to pass as another. I can mimic a person's speech or other creature's sounds if I've heard it for at least 1 minute. Wisdom (Insight) vs. Charisma (Deception) to determine the sound is faked. [+1 Charisma]",
	improvements : "Actor (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1]
};
FeatsList["alert"] = {
	name : "Alert",
	source : ["P", 165],
	description : "I can't be surprised while I'm conscious. I have a +5 bonus on initiative rolls. Other creatures don't gain advantage on attack rolls against me as a result of being hidden from me.",
	addMod : { type : "skill", field : "Init", mod : 5, text : "I have a +5 bonus on initiative rolls." }
};
FeatsList["athlete"] = {
	name : "Athlete",
	source : ["P", 165],
	description : "Standing up from prone uses only 5 ft of movement. Climbing doesn't cost me extra movement. I can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet. [+1 Strength or Dexterity]",
	improvements : "Athlete (feat): +1 Strength or Dexterity;"
};
FeatsList["charger"] = {
	name : "Charger",
	source : ["P", 165],
	description : "When taking the Dash action and moving 10 feet or more in a straight line, I can immediately take a bonus action to make either one melee weapon attack with +5 damage or try to shove the target up to 10 feet away.",
	action : ["bonus action", " (after Dash action)"]
};
FeatsList["crossbow expert"] = {
	name : "Crossbow Expert",
	source : ["P", 165],
	description : "I ignore the loading quality of crossbows I'm proficient with. I don't suffer disadvantage on ranged attack rolls for being within 5 feet of a hostile. When I attack with a one-handed weapon, I can use a bonus action to attack with a hand crossbow I'm holding.",
	action : ["bonus action", " (with Attack action)"],
	calcChanges : {
		atkAdd : ["if ((/crossbow/i).test(WeaponName) && fields.Proficiency) {fields.Description = fields.Description.replace(/(,? ?loading|loading,? ?)/i, '');};", "I ignore the loading quality of crossbows I'm proficient with."]
	}
};
FeatsList["defensive duelist"] = {
	name : "Defensive Duelist",
	source : ["P", 165],
	description : "When wielding a finesse weapon with which I am proficient and another creature hits me with a melee attack, I can use my reaction to add my proficiency bonus to my AC for that attack, potentially causing the attack to miss me.",
	prerequisite : "Dexterity 13 or higher",
	prereqeval : "What('Dex') >= 13",
	action : ["reaction", " (when hit in melee)"]
};
FeatsList["dual wielder"] = {
	name : "Dual Wielder",
	source : ["P", 165],
	description : "I can use two-weapon fighting even when the one-handed melee weapons I'm wielding aren't light. I can draw or stow two one-handed weapons when I would normally be able to draw or stow only one. +1 AC while wielding separate melee weapons in each hand.",
	eval : "AddACMisc(1, 'Dual Wielder (if 2 weapons)', 'When wielding a melee weapon in each hand, the Dual Wielder feat gives a +1 bonus to AC', 'ACshield');",
	removeeval : "AddACMisc(0, 'Dual Wielder (if 2 weapons)', 'When wielding a melee weapon in each hand, the Dual Wielder feat gives a +1 bonus to AC');"
};
FeatsList["dungeon delver"] = {
	name : "Dungeon Delver",
	source : ["P", 166],
	description : "I have advantage on Wis (Perception) and Int (Investigation) checks made to detect the presence of secret doors. I can search for traps while traveling at a normal pace. I have resistance to damage dealt by traps and advantage on saves to avoid or resist traps.",
	dmgres : ["Traps"],
	savetxt : { adv_vs : ["traps"] },
	vision : [["Adv. on Perception and Investigation for secret doors", 0]]
};
FeatsList["durable"] = {
	name : "Durable",
	source : ["P", 166],
	description : "When I roll a hit die to regain hit points, the minimum number of hit points I regain from the roll equals twice my Constitution modifier (minimum of 2). [+1 Constitution]",
	improvements : "Durable (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0]
};
FeatsList["elemental adept"] = {
	name : "Elemental Adept",
	source : ["P", 166],
	description : "Choose one of the damage types: acid, cold, fire, lightning, or thunder. Spells I cast ignore resistance to damage from this damage type. For any spell I cast that deals this damage type, I can treat any 1 on a damage die as a 2.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'"
};
FeatsList["grappler"] = {
	name : "Grappler",
	source : [["SRD", 75], ["P", 167]],
	description : "I have advantage on attack rolls against a creature I am grappling. As an action, I can try to pin a creature grappled by me. If I succeed on a grapple check, both the creature and I are restrained until the grapple ends.",
	prerequisite : "Strength 13 or higher",
	prereqeval : "What('Str') >= 13",
	action : ["action", " feat (pin grappled)"]
};
FeatsList["great weapon master"] = {
	name : "Great Weapon Master",
	source : ["P", 167],
	description : "If I score a critical hit or reduce a creature to 0 hit points with a melee weapon in my turn, I can make one melee weapon attack as a bonus action. With a heavy melee weapon, I can choose to take a -5 penalty on the attack roll for +10 on the attack's damage.",
	action : ["bonus action", " (after crit or take-down)"],
	calcChanges : {
		atkCalc : ["if (isMeleeWeapon && (/heavy/i).test(fields.Description) && (/power.{0,3}attack|great.{0,3}weapon.{0,3}master/i).test(WeaponText)) {output.extraDmg += 10; output.extraHit -= 5;};", "If I include the words 'Power Attack' or 'Great Weapon Master' in a heavy melee weapon's name or description, the calculation will put a -5 penalty on the attack's To Hit and +10 on its Damage."]
	}
};
FeatsList["healer"] = {
	name : "Healer",
	source : ["P", 167],
	description : "Using a healer's kit to stabilize someone gives them 1 hit point as well. As an action, I can spend one use of a healer's kit to restore 1d6 + 4 + (creature's HD) hit points. After that, the creature can't gain hit points from this feat again until it finishes a short rest.",
	action : ["action", " (1d6+4+HD with healing kit)"]
};
FeatsList["heavily armored"] = {
	name : "Heavily Armored",
	source : ["P", 167],
	description : "I gain proficiency with heavy armor. [+1 Strength]",
	prerequisite : "Proficiency with medium armor",
	prereqeval : "tDoc.getField('Proficiency Armor Medium').isBoxChecked(0)",
	improvements : "Heavily Armored (feat): +1 Strength;",
	scores : [1, 0, 0, 0, 0, 0],
	armor : [false, false, true, false]
};
FeatsList["heavy armor master"] = {
	name : "Heavy Armor Master",
	source : ["P", 167],
	description : "While wearing heavy armor, bludgeoning, piercing, and slashing damage taken from nonmagical weapons is reduced by 3. [+1 Strength]",
	prerequisite : "Proficiency with heavy armor",
	prereqeval : "tDoc.getField('Proficiency Armor Heavy').isBoxChecked(0)",
	improvements : "Heavy Armor Master (feat): +1 Strength;",
	scores : [1, 0, 0, 0, 0, 0]
};
FeatsList["inspiring leader"] = {
	name : "Inspiring Leader",
	source : ["P", 167],
	calculate : "event.value = 'I can spend 10 minutes inspiring up to 6 friendly creatures within 30 feet who can see or hear and can understand me. Each gains lvl (' + What('Character Level') + ') + Cha mod (' + What('Cha Mod') + \") temporary hit points. One can't gain temporary hit points from this feat again until after a short rest.\";",
	prerequisite : "Charisma 13 or higher",
	prereqeval : "What('Cha') >= 13"
};
FeatsList["keen mind"] = {
	name : "Keen Mind",
	source : ["P", 167],
	description : "I always know which way is north and the number of hours left before the next sunrise or sunset. I can accurately recall anything I have seen or heard within the past month. [+1 Intelligence]",
	improvements : "Keen Mind (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0]
};
FeatsList["lightly armored"] = {
	name : "Lightly Armored",
	source : ["P", 167],
	description : "I gain proficiency with light armor. [+1 Strength or Dexterity]",
	improvements : "Lightly Armored (feat): +1 Strength or Dexterity;",
	armor : [true, false, false, false]
};
FeatsList["linguist"] = {
	name : "Linguist",
	source : ["P", 167],
	calculate : "event.value = \"I can ably create written ciphers that others can't decipher unless I teach them, they succeed on an Intelligence check DC \" + (What('Int') + What('Proficiency Bonus')) + ' (Intelligence score + proficiency bonus), or they use magic to decipher it. I learn three languages of my choice. [+1 Intelligence]';",
	improvements : "Linguist (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	languageProfs : [3]
};
FeatsList["lucky"] = {
	name : "Lucky",
	source : ["P", 167],
	description : "Use one of three luck points to roll an extra d20 for attacking, being attacked, an ability check, or a saving throw before the outcome is determined. If more than one creature uses luck, no extra dice are rolled. I regain expended luck points when I finish a long rest.",
	usages : 3,
	recovery : "long rest",
	additional : "attack/check/save"
};
FeatsList["mage slayer"] = {
	name : "Mage Slayer",
	source : ["P", 168],
	description : "As a reaction, I can make a melee weapon attack on a creature within 5 ft of me that casts a spell. Concentration checks from damage from me are made with disadvantage. I have advantage on saving throws against spells cast by creatures within 5 feet of me.",
	savetxt : { adv_vs : ["spells cast within 5 ft"] },
	eval : "AddAction('reaction', 'Melee weapon attack (if spell cast in 5 ft)', 'the Mage Slayer feat');",
	removeeval : "RemoveAction('reaction', 'Melee weapon attack (if spell cast in 5 ft)');"
};
FeatsList["magic initiate [bard]"] = {
	name : "Magic Initiate [Bard]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the bard's spell list.\nI can cast the spell it at its lowest level once per long rest.\nCharisma is my spellcasting ability for these.",
	eval : "CurrentSpells['magic initiate bard'] = {name : 'Magic Initiate [Bard]', ability : 6, list : {class : 'bard'}, known : {cantrips : 2}, bonus : {bonus1 : {name : '1st-Level Spell', class : 'bard', level : [1, 1], oncelr : true}}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['magic initiate bard']; SetStringifieds('spells');"
};
FeatsList["magic initiate [cleric]"] = {
	name : "Magic Initiate [Cleric]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the cleric's spell list.\nI can cast the spell it at its lowest level once per long rest.\nWisdom is my spellcasting ability for these.",
	eval : "CurrentSpells['magic initiate cleric'] = {name : 'Magic Initiate [Cleric]', ability : 5, list : {class : 'cleric'}, known : {cantrips : 2}, bonus : {bonus1 : {name : '1st-Level Spell', class : 'cleric', level : [1, 1], oncelr : true}}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['magic initiate cleric']; SetStringifieds('spells');"
};
FeatsList["magic initiate [druid]"] = {
	name : "Magic Initiate [Druid]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the druid's spell list.\nI can cast the spell it at its lowest level once per long rest.\nWisdom is my spellcasting ability for these.",
	eval : "CurrentSpells['magic initiate druid'] = {name : 'Magic Initiate [Druid]', ability : 5, list : {class : 'druid'}, known : {cantrips : 2}, bonus : {bonus1 : {name : '1st-Level Spell', class : 'druid', level : [1, 1], oncelr : true}}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['magic initiate druid']; SetStringifieds('spells');"
};
FeatsList["magic initiate [sorcerer]"] = {
	name : "Magic Initiate [Sorcerer]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the sorcerer's spell list.\nI can cast the spell it at its lowest level once per long rest.\nCharisma is my spellcasting ability for these.",
	eval : "CurrentSpells['magic initiate sorcerer'] = {name : 'Magic Initiate [Sorcerer]', ability : 6, list : {class : 'sorcerer'}, known : {cantrips : 2}, bonus : {bonus1 : {name : '1st-Level Spell', class : 'sorcerer', level : [1, 1], oncelr : true}}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['magic initiate sorcerer']; SetStringifieds('spells');"
};
FeatsList["magic initiate [warlock]"] = {
	name : "Magic Initiate [Warlock]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the warlock's spell list.\nI can cast the spell it at its lowest level once per long rest.\nCharisma is my spellcasting ability for these.",
	eval : "CurrentSpells['magic initiate warlock'] = {name : 'Magic Initiate [Warlock]', ability : 6, list : {class : 'warlock'}, known : {cantrips : 2}, bonus : {bonus1 : {name : '1st-Level Spell', class : 'warlock', level : [1, 1], oncelr : true}}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['magic initiate warlock']; SetStringifieds('spells');"
};
FeatsList["magic initiate [wizard]"] = {
	name : "Magic Initiate [Wizard]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the wizard's spell list.\nI can cast the spell it at its lowest level once per long rest.\nIntelligence is my spellcasting ability for these.",
	eval : "CurrentSpells['magic initiate wizard'] = {name : 'Magic Initiate  [Wizard]', ability : 4, list : {class : 'wizard'}, known : {cantrips : 2}, bonus : {bonus1 : {name : '1st-Level Spell', class : 'wizard', level : [1, 1], oncelr : true}}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['magic initiate wizard']; SetStringifieds('spells');"
};
FeatsList["martial adept"] = {
	name : "Martial Adept",
	source : ["P", 168],
	calculate : "event.value = 'I learn two maneuvers of my choice from those available to the Battle Master archetype. The saving throw DC for this is ' + (8 + What('Proficiency Bonus') + Math.max(What('Str Mod'), What('Dex Mod'))) + ' (8 + proficiency bonus + Str/Dex mod). I gain one superiority die (d6), which I regain when I finish a short rest.';",
	eval : "AddFeature('Combat Superiority ', 1, '(d6)', 'short rest', 'the Martial Adept feat', 'bonus');",
	removeeval : "RemoveFeature('Combat Superiority ', 1);"
};
FeatsList["medium armor master"] = {
	name : "Medium Armor Master",
	source : ["P", 168],
	description : "Wearing medium armor doesn't impose disadvantage on my Dexterity (Stealth) checks. When I wear medium armor, I can add up to 3, rather than 2, to my AC if my Dexterity is 16 or higher.",
	prerequisite : "Proficiency with medium armor",
	prereqeval : "tDoc.getField('Proficiency Armor Medium').isBoxChecked(0)",
	eval : "Value('Medium Armor Max Mod', 3); if (CurrentArmour.known && ArmourList[CurrentArmour.known].type === 'medium') {Checkbox('AC Stealth Disadvantage', false); ShowHideStealthDisadv();}",
	removeeval : "tDoc.resetForm(['Medium Armor Max Mod']); if (CurrentArmour.known && ArmourList[CurrentArmour.known].type === 'medium') {Checkbox('AC Stealth Disadvantage', ArmourList[CurrentArmour.known].stealthdis && !(/mithral/i).test(CurrentArmour.field)); ShowHideStealthDisadv();};"
};
FeatsList["mobile"] = {
	name : "Mobile",
	source : ["P", 168],
	description : "When I use the Dash action, difficult terrain doesn't cost me extra movement that turn. When I make a melee attack against a creature, I don't provoke opportunity attacks from that creature for the rest of the turn, whether I hit or not. [+10 ft speed]",
	speed : { allModes : "+10" }
};
FeatsList["moderately armored"] = {
	name : "Moderately Armored",
	source : ["P", 168],
	description : "I gain proficiency with medium armor and shields. [+1 Strength or Dexterity]",
	prerequisite : "Proficiency with light armor",
	prereqeval : "tDoc.getField('Proficiency Armor Light').isBoxChecked(0)",
	improvements : "Moderately Armored (feat): +1 Strength or Dexterity;",
	armor : [false, true, false, true]
};
FeatsList["mounted combatant"] = {
	name : "Mounted Combatant",
	source : ["P", 168],
	description : "I have advantage on melee attack rolls against unmounted creatures smaller than my mount. I can force attacks targeting my mount to target me instead. When a Dex save would halve damage, my mount takes no damage on success and half damage on failure."
};
FeatsList["observant"] = {
	name : "Observant",
	source : ["P", 168],
	description : "If I can see a creature's mouth while it is speaking a language I understand, I can interpret what it's saying by reading its lips. I have a +5 bonus to passive Wisdom (Perception) and passive Intelligence (Investigation) scores. [+1 Intelligence or Wisdom]",
	improvements : "Observant (feat): +1 Intelligence or Wisdom;",
	addMod : { type : "skill", field : "passive perception", mod : 5, text : "I have a +5 bonus to passive Wisdom (Perception)." }
};
FeatsList["polearm master"] = {
	name : "Polearm Master",
	source : ["P", 168],
	description : "As a bonus action, when I take the Attack action with only a glaive/halberd/quarterstaff, I can make an attack with the butt end for 1d4 bludgeoning. While wielding a glaive/ halberd/pike/quarterstaff, I get an opportunity attack when a creature enters my reach.",
	eval : "AddAction('bonus action', 'Butt end attack (after attack with polearm)', 'the Polearm Master feat'); AddWeapon('polearm butt end');",
	removeeval : "RemoveAction('bonus action', 'Butt end attack (after attack with polearm)'); RemoveWeapon('polearm butt end');",
	weapons : [false, false, ["polearm butt end"]]
};
FeatsList["resilient [strength]"] = {
	name : "Resilient [Strength]",
	source : ["P", 168],
	description : "I gain proficiency with Strength saving throws. [+1 Strength]",
	improvements : "Resilient (feat): +1 Strength;",
	scores : [1, 0, 0, 0, 0, 0],
	saves : ["Str"]

};
FeatsList["resilient [dexterity]"] = {
	name : "Resilient [Dexterity]",
	source : ["P", 168],
	description : "I gain proficiency with Dexterity saving throws. [+1 Dexterity]",
	improvements : "Resilient (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0],
	saves : ["Dex"]

};
FeatsList["resilient [constitution]"] = {
	name : "Resilient [Constitution]",
	source : ["P", 168],
	description : "I gain proficiency with Constitution saving throws. [+1 Constitution]",
	improvements : "Resilient (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0],
	saves : ["Con"]

};
FeatsList["resilient [intelligence]"] = {
	name : "Resilient [Intelligence]",
	source : ["P", 168],
	description : "I gain proficiency with Intelligence saving throws. [+1 Intelligence]",
	improvements : "Resilient (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	saves : ["Int"]

};
FeatsList["resilient [wisdom]"] = {
	name : "Resilient [Wisdom]",
	source : ["P", 168],
	description : "I gain proficiency with Wisdom saving throws. [+1 Wisdom]",
	improvements : "Resilient (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	saves : ["Wis"]

};
FeatsList["resilient [charisma]"] = {
	name : "Resilient [Charisma]",
	source : ["P", 168],
	description : "I gain proficiency with Charisma saving throws. [+1 Charisma]",
	improvements : "Resilient (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	saves : ["Cha"]

};
FeatsList["ritual caster [bard]"] = {
	name : "Ritual Caster [Bard]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual bard spells.\nI can copy ritual bard spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Charisma is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster bard'] = {name : 'Ritual Book [Bard]', ability : 6, list : {class : 'bard', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster bard']; SetStringifieds('spells');"
};
FeatsList["ritual caster [cleric]"] = {
	name : "Ritual Caster [Cleric]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual cleric spells.\nI can copy ritual cleric spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Wisdom is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster cleric'] = {name : 'Ritual Book [Cleric]', ability : 5, list : {class : 'cleric', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster cleric']; SetStringifieds('spells');"
};
FeatsList["ritual caster [druid]"] = {
	name : "Ritual Caster [Druid]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual druid spells.\nI can copy ritual druid spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Wisdom is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster druid'] = {name : 'Ritual Book [Druid]', ability : 5, list : {class : 'druid', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster druid']; SetStringifieds('spells');"
};
FeatsList["ritual caster [sorcerer]"] = {
	name : "Ritual Caster [Sorcerer]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual sorcerer spells.\nI can copy ritual sorcerer spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Charisma is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster sorcerer'] = {name : 'Ritual Book [Sorcerer]', ability : 6, list : {class : 'sorcerer', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster sorcerer']; SetStringifieds('spells');"
};
FeatsList["ritual caster [warlock]"] = {
	name : "Ritual Caster [Warlock]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual warlock spells.\nI can copy ritual warlock spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Charisma is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster warlock'] = {name : 'Ritual Book [Warlock]', ability : 6, list : {class : 'warlock', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster warlock']; SetStringifieds('spells');"
};
FeatsList["ritual caster [wizard]"] = {
	name : "Ritual Caster [Wizard]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual wizard spells.\nI can copy ritual wizard spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Intelligence is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster wizard'] = {name : 'Ritual Book [Wizard]', ability : 4, list : {class : 'wizard', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster wizard']; SetStringifieds('spells');"
};
FeatsList["savage attacker"] = {
	name : "Savage Attacker",
	source : ["P", 169],
	description : "Once per turn, when I roll damage for a melee weapon attack, I can reroll the weapon's damage dice and use either total."
};
FeatsList["sentinel"] = {
	name : "Sentinel",
	source : ["P", 169],
	description : "Creatures I hit with opportunity attacks have 0 speed for this turn. The Disengage action doesn't work on me. When a creature within 5 ft makes an attack against a target other than me, I can use my reaction to make a melee weapon attack against the attacker.",
	action : ["reaction", " (after attack on ally)"]
};
FeatsList["sharpshooter"] = {
	name : "Sharpshooter",
	source : ["P", 170],
	description : "My ranged weapon attacks don't have disadvantage on long range and ignore half cover and three-quarters cover. With a ranged weapon that I am proficient with, I can choose to take a -5 penalty on the attack roll for +10 on the attack's damage.",
	calcChanges : {
		atkCalc : ["if (isRangedWeapon && (/power.{0,3}attack|sharp.{0,3}shoo?t/i).test(WeaponText)) {output.extraDmg += 10; output.extraHit -= 5;};", "If I include the words 'Power Attack', 'Sharpshooter', or 'Sharpshot' in a ranged weapon's name or description, the calculation will put a -5 penalty on the attack's To Hit and +10 on its Damage."]
	}
};
FeatsList["shield master"] = {
	name : "Shield Master",
	source : ["P", 170],
	description : "As a bonus action, when I use the Attack action, I can shove someone within 5 ft with my shield. I add my shield's AC bonus to Dex saves vs. effects targeting only me. As a reaction, if I succeed on a Dex save for half damage, I can interpose my shield to avoid the damage.",
	eval : "AddAction('bonus action', 'Shove with shield (with Attack action)', 'the Shield Master feat'); AddAction('reaction', 'Interpose shield (if Dex save half dmg)', 'the Shield Master feat');",
	removeeval : "RemoveAction('bonus action', 'Shove with shield (with Attack action)'); RemoveAction('reaction', 'Interpose shield (if Dex save half dmg)');"
};
FeatsList["skilled"] = {
	name : "Skilled",
	source : ["P", 170],
	description : "I gain proficiency with any combination of three skills or tools of my choice.",
	skills : "\n\n" + toUni("Skilled (feat)") + ": Choose three skills or tools."
};
FeatsList["skulker"] = {
	name : "Skulker",
	source : ["P", 170],
	description : "I can try to hide when I am lightly obscured. My position is not revealed when I am hidden from a creature and miss it with a ranged weapon attack. Dim light doesn't impose disadvantage on my Wisdom (Perception) checks relying on sight.",
	prerequisite : "Dexterity 13 or higher",
	prereqeval : "What('Dex') >= 13",
	vision : [["No disadv. on Perception in dim light", 0]]
};
FeatsList["spell sniper [bard]"] = {
	name : "Spell Sniper [Bard]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one bard cantrip that requires an attack roll. Charisma is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper bard'] = {name : 'Spell Sniper [Bard]', ability : 6, list : {class : 'bard', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper bard']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+ ?(f.{0,2}t|m).*$/i).test(fields.Range)) {var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+/); rangeNmbr.forEach(function(dR) {fields.Range = fields.Range.replace(dR, Number(dR) * 2);});}; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["spell sniper [cleric]"] = {
	name : "Spell Sniper [Cleric]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one cleric cantrip that requires an attack roll. Wisdom is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper cleric'] = {name : 'Spell Sniper [Cleric]', ability : 5, list : {class : 'cleric', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper cleric']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+ ?(f.{0,2}t|m).*$/i).test(fields.Range)) {var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+/); rangeNmbr.forEach(function(dR) {fields.Range = fields.Range.replace(dR, Number(dR) * 2);});}; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["spell sniper [druid]"] = {
	name : "Spell Sniper [Druid]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one druid cantrip that requires an attack roll. Wisdom is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper druid'] = {name : 'Spell Sniper [Druid]', ability : 5, list : {class : 'druid', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper druid']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+ ?(f.{0,2}t|m).*$/i).test(fields.Range)) {var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+/); rangeNmbr.forEach(function(dR) {fields.Range = fields.Range.replace(dR, Number(dR) * 2);});}; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["spell sniper [sorcerer]"] = {
	name : "Spell Sniper [Sorcerer]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one sorcerer cantrip that requires an attack roll. Charisma is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper sorcerer'] = {name : 'Spell Sniper [Sorcerer]', ability : 6, list : {class : 'sorcerer', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper sorcerer']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+ ?(f.{0,2}t|m).*$/i).test(fields.Range)) {var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+/); rangeNmbr.forEach(function(dR) {fields.Range = fields.Range.replace(dR, Number(dR) * 2);});}; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["spell sniper [warlock]"] = {
	name : "Spell Sniper [Warlock]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one warlock cantrip that requires an attack roll. Charisma is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper warlock'] = {name : 'Spell Sniper [Warlock]', ability : 6, list : {class : 'warlock', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper warlock']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+ ?(f.{0,2}t|m).*$/i).test(fields.Range)) {var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+/); rangeNmbr.forEach(function(dR) {fields.Range = fields.Range.replace(dR, Number(dR) * 2);});}; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["spell sniper [wizard]"] = {
	name : "Spell Sniper [Wizard]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one wizard cantrip that requires an attack roll. Intelligence is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper wizard'] = {name : 'Spell Sniper [Wizard]', ability : 4, list : {class : 'wizard', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper wizard']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+ ?(f.{0,2}t|m).*$/i).test(fields.Range)) {var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+/); rangeNmbr.forEach(function(dR) {fields.Range = fields.Range.replace(dR, Number(dR) * 2);});}; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["tavern brawler"] = {
	name : "Tavern Brawler",
	source : ["P", 170],
	description : "I am proficient with improvised weapons. My unarmed strike does 1d4 damage. When I hit a creature with an unarmed strike or improvised weapon on my turn, I can attempt to grapple the target as a bonus action. [+1 Strength or Constitution]",
	improvements : "Tavern Brawler (feat): +1 Strength or Constitution;",
	eval : "AddAction('bonus action', 'Grapple (on hit with unarmed/improv.)', 'the Tavern Brawler feat');",
	removeeval : "RemoveAction('bonus action', 'Grapple (on hit with unarmed/improv.)');",
	weapons : [false, false, ["improvised weapons"]],
	calcChanges : {
		atkAdd : ["if (isMeleeWeapon && ((/unarmed strike/i).test(WeaponName) || (/improvised/i).test(WeaponName) || (/improvised weapon/i).test(theWea.type))) {fields.Description += (fields.Description ? '; ' : '') + 'After hitting, can attempt to grapple as a bonus action'; fields.Proficiency = true; }; if ((/unarmed strike/i).test(WeaponName) && fields.Damage_Die == 1) {fields.Damage_Die = '1d4'; }; ", "My unarmed strikes do 1d4 damage instead of 1;\n - After hitting a creature with an unarmed strike or improvised weapon in melee, I can attempt to start a grapple as a bonus action."]
	}
};
FeatsList["tough"] = {
	name : "Tough",
	source : ["P", 170],
	description : "My hit point maximum increases by an amount equal to twice my character level.",
	calcChanges : {
		hp : "extrahp += totalhd * 2; extrastring += '\\n + ' + totalhd + ' \\u00D7 2 from the Tough feat (' + (totalhd * 2) + ')';"
	}
};
FeatsList["war caster"] = {
	name : "War Caster",
	source : ["P", 170],
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	description : "Advantage on Con saves to maintain concentration on spells when damaged. Perform somatic components even when holding weapons or shield in one or both hands. Cast spell of 1 action casting time that targets only one creature instead of an opportunity attack.",
	action : ["reaction", " - Opportunity Spell"],
	eval : "AddString('Saving Throw advantages \/ disadvantages', 'Adv. on Con (Concentration) saves when damaged', '; ');",
	removeeval : "RemoveString('Saving Throw advantages \/ disadvantages', 'Adv. on Con (Concentration) saves when damaged', false);"
};
FeatsList["weapon master"] = {
	name : "Weapon Master",
	source : ["P", 170],
	description : "I gain proficiency with four simple or martial weapons of my choice.\n[+1 Strength or Dexterity]",
	improvements : "Weapon Master (feat): +1 Strength or Dexterity;"
};

// Add equipment that is not in the SRD
WeaponsList["polearm butt end"] = {
	regExpSearch : /^(?=.*(polearm|(glaive|guandao|bisento|naginata)|(halberd|\bji\b|kamayari)|(quarterstaff|\bstaff\b|\bbo\b)))(?=.*butt)(?=.*end).*$/i,
	name : "Polearm butt end",
	source : ["P", 168],
	ability : 1,
	type : "Other",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "As bonus action after taking an attack action with only a glaive, halberd, or quarterstaff",
	abilitytodamage : true
};
WeaponsList["thorn whip"] = {
	regExpSearch : /^(?=.*thorn)(?=.*whip).*$/i,
	name : "Thorn Whip",
	source : ["P", 282],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 6, "piercing"],
	range : "Melee, 30 ft",
	description : "Melee spell attack, pull target 10 ft closer to me (PHB 282)",
	abilitytodamage : false
};

// Add spells that are not in the SRD
SpellsList["arcane gate"] = {
	name : "Arcane Gate",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["P", 214],
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "500 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "Two portals, up to 500 ft apart, teleport any to other side; portals are filled with opaque mist",
	descriptionFull : "You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost." + "\n   " + "The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal." + "\n   " + "Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other, passing through a portal from the non-portal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction."
};
SpellsList["armor of agathys"] = {
	name : "Armor of Agathys",
	classes : ["warlock"],
	source : ["P", 215],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A cup of water",
	duration : "1 h",
	description : "5+5/SL temp hp; as long as temp hp last any crea that hits in melee takes 5+5/SL Cold dmg",
	descriptionFull : "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st."
};
SpellsList["arms of hadar"] = {
	name : "Arms of Hadar",
	classes : ["warlock"],
	source : ["P", 215],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "10-ft rad",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	description : "2d6+1d6/SL Necrotic dmg; save halves; on failed save no reactions until next turn",
	descriptionFull : "You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["aura of life"] = {
	name : "Aura of Life",
	classes : ["paladin"],
	source : ["P", 216],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	description : "You + any crea while in area Necrotic dmg resist.; heals all living crea at 0 hp at start of turn to 1 hp",
	descriptionFull : "Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a non-hostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points."
};
SpellsList["aura of purity"] = {
	name : "Aura of Purity",
	classes : ["paladin"],
	source : ["P", 216],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	description : "You + any crea while in area Poison dmg resist., immune to disease, adv. on saves vs. conditions",
	descriptionFull : "Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions - blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned."
};
SpellsList["aura of vitality"] = {
	name : "Aura of Vitality",
	classes : ["paladin"],
	source : ["P", 216],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 1 min",
	description : "You can heal 1 creature in range for 2d6 hp as a bonus action for the duration",
	descriptionFull : "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."
};
SpellsList["banishing smite"] = {
	name : "Banishing Smite",
	classes : ["paladin"],
	source : ["P", 216],
	level : 5,
	school : "Abjur",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "Next melee hit +5d10 Force dmg; if this brings target hp<50, you banish it until spell ends",
	descriptionFull : "The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points of fewer, you banish it. If the target is native to a different plane of existence than the one you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the tart reappears in the space it left or in the nearest unoccupied space if that space is occupied."
};
SpellsList["beast sense"] = {
	name : "Beast Sense",
	classes : ["druid", "ranger"],
	source : ["P", 217],
	ritual : true,
	level : 2,
	school : "Div",
	time : "1 a",
	range : "Touch",
	components : "S",
	duration : "Conc, 1 h",
	description : "Use 1 willing beast's senses; you are blinded and deafened while doing so",
	descriptionFull : "You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses."
};
SpellsList["blade ward"] = {
	name : "Blade Ward",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["P", 218],
	level : 0,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	description : "Until the end of your next turn, Bludgeoning, Piercing, and Slashing dmg resist. vs. weapons",
	descriptionFull : "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
};
SpellsList["blinding smite"] = {
	name : "Blinding Smite",
	classes : ["paladin"],
	source : ["P", 219],
	level : 3,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Next melee hit +3d8 Radiant dmg; save or blinded; extra save at end of every turn",
	descriptionFull : "The next time you hit a creature with a melee weapon attack during this spell's duration, you weapon flares with a bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends." + "\n   " + "A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded."
};
SpellsList["chromatic orb"] = {
	name : "Chromatic Orb",
	classes : ["sorcerer", "wizard"],
	source : ["P", 221],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M\u0192",
	compMaterial : "A diamond worth at least 50 gp",
	duration : "Instantaneous",
	description : "Spell attack for 3d8+1d8/SL Acid, Cold, Fire, Lightning, Poison or Thunder dmg (50gp)",
	descriptionFull : "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
SpellsList["circle of power"] = {
	name : "Circle of Power",
	classes : ["paladin"],
	source : ["P", 221],
	level : 5,
	school : "Abjur",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	description : "Any crea while in area adv. on saves vs. magical effects; if save would half dmg it takes no dmg",
	descriptionFull : "Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw."
};
SpellsList["cloud of daggers"] = {
	name : "Cloud of Daggers",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["P", 222],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A sliver of glass",
	duration : "Conc, 1 min",
	description : "5-ft cube 4d4+2d4/SL Slashing dmg to all that enter or start turn in area",
	descriptionFull : "You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell's area for the first time on a turn or starts its turn there." + AtHigherLevels + "when you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd."
};
SpellsList["compelled duel"] = {
	name : "Compelled Duel",
	classes : ["paladin"],
	source : ["P", 224],
	level : 1,
	school : "Ench",
	time : "1 bns",
	range : "30 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or dis. on attacks vs. not-you and save if moving more than 30 ft away",
	descriptionFull : "You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you, if it succeeds on this saving throw, this spell doesn't restrict the target's movement for that turn." + "\n   " + "The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target."
};
SpellsList["conjure barrage"] = {
	name : "Conjure Barrage",
	classes : ["ranger"],
	source : ["P", 225],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60-ft cone",
	components : "V,S,M",
	compMaterial : "One piece of ammunition or a thrown weapon",
	duration : "Instantaneous",
	save : "Dex",
	description : "Throw weapon or ammo; copies rain down for 3d8 dmg; dmg type as weapon; save halves",
	descriptionFull : "You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component."
};
SpellsList["conjure volley"] = {
	name : "Conjure Volley",
	classes : ["ranger"],
	source : ["P", 226],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "One piece of ammunition or one thrown weapon",
	duration : "Instantaneous",
	save : "Dex",
	description : "Turn ammo/thrown wea into volley; 40-ft rad 20-ft high 8d8 dmg; dmg type as weapon; save halves",
	descriptionFull : "You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius. 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon."
};
SpellsList["cordon of arrows"] = {
	name : "Cordon of Arrows",
	classes : ["ranger"],
	source : ["P", 228],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "5 ft",
	components : "V,S,M",
	compMaterial : "Four or more arrows or bolts",
	duration : "8 h",
	save : "Dex",
	description : "4+2/SL arrows/bolts attack first crea in 30 ft one at a time for 1d6 Piercing dmg; save halves",
	descriptionFull : "You plant four pieces of nonmagical ammunition - arrows or crossbow bolts - in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains." + "\n   " + "When you cast this spell, you can designate any creatures you choose, and the spell ignores them." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd."
};
SpellsList["crown of madness"] = {
	name : "Crown of Madness",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["P", 229],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 humanoid save or charmed and must melee attack against crea chosen by you; extra save/rnd",
	descriptionFull : "One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes." + "\n   " + "The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach." + "\n   " + "On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends."
};
SpellsList["crusader's mantle"] = {
	name : "Crusader's Mantle",
	classes : ["paladin"],
	source : ["P", 230],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 1 min",
	description : "You and allies in range deal extra 1d4 Radiant dmg with weapon attacks",
	descriptionFull : "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each non-hostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack."
};
SpellsList["destructive wave"] = {
	name : "Destructive Wave",
	classes : ["paladin"],
	source : ["P", 231],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Instantaneous",
	save : "Con",
	description : "Any crea 5d6 Thunder + 5d6 Radiant/Necrotic dmg and knocked prone; save halves not prone",
	descriptionFull : "You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone."
};
SpellsList["dissonant whispers"] = {
	name : "Dissonant Whispers",
	classes : ["bard"],
	source : ["P", 234],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea 3d6+1d6/SL Psychic dmg and flee; save halves and no fleeing; deaf crea are immune",
	descriptionFull : "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["elemental weapon"] = {
	name : "Elemental Weapon",
	classes : ["paladin"],
	source : ["P", 237],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "+1 magical weapon; +1d4 Acid, Cold, Fire, Lightning, or Thunder dmg; SL5: +2/+2d4, SL7: +3/+3d4",
	descriptionFull : "A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types - acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits." + AtHigherLevels + "When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
};
SpellsList["ensnaring strike"] = {
	name : "Ensnaring Strike",
	classes : ["ranger"],
	source : ["P", 237],
	level : 1,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Next crea hit save (Large adv.) or restrained, 1d6+1d6/SL Piercing dmg/rnd; Str check to escape",
	descriptionFull : "The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away." + "\n   " + "While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed." + AtHigherLevels + "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["feign death"] = {
	name : "Feign Death",
	classes : ["bard", "cleric", "druid", "wizard"],
	source : ["P", 240],
	ritual : true,
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A pinch of graveyard dirt",
	duration : "1 h (D)",
	description : "Willing creature appears dead; it is blinded, incapacitated, has dmg resist. all but Psychic, and speed 0",
	descriptionFull : "You touch a willing creature and put it into a cataleptic state that is indistinguishable from death." + "\n   " + "For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell's effect, the disease and poison have no effect until the spell ends."
};
SpellsList["friends"] = {
	name : "Friends",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["P", 244],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "Self",
	components : "S,M",
	compMaterial : "A small amount of makeup applied to the face as this spell is cast",
	duration : "Conc, 1 min",
	description : "Adv. on Cha checks vs. 1 crea currently not hostile; when spell ends, crea knows and becomes hostile",
	descriptionFull : "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it."
};
SpellsList["grasping vine"] = {
	name : "Grasping Vine",
	classes : ["druid", "ranger"],
	source : ["P", 246],
	level : 4,
	school : "Conj",
	time : "1 bns",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Conjure vine with 30 ft reach; bns a to direct to 1 crea save or pulled 20 ft to vine",
	descriptionFull : "You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine." + "\n   " + "Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns."
};
SpellsList["hail of thorns"] = {
	name : "Hail of Thorns",
	classes : ["ranger"],
	source : ["P", 249],
	level : 1,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Next ranged weapon attack, all within 5 ft of target 1d10+1d10/SL Piercing dmg; save halves",
	descriptionFull : "The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10)."
};
SpellsList["hex"] = {
	name : "Hex",
	classes : ["warlock"],
	source : ["P", 251],
	level : 1,
	school : "Ench",
	time : "1 bns",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "The petrified eye of a newt",
	duration : "Conc, 1 h",
	description : "1 crea +1d6 Necrotic dmg from your atks; dis. on chosen ability checks; SL3: conc, 8h; SL5: conc, 24h",
	descriptionFull : "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability." + "\n   " + "If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature." + "\n   " + "A remove curse cast on the target ends this spell early." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
};
SpellsList["hunger of hadar"] = {
	name : "Hunger of Hadar",
	classes : ["warlock"],
	source : ["P", 251],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "A pickled octopus tentacle",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "20-ft rad blinds all while in; all start turn in 2d6 Cold dmg; all end turn in save or 2d6 Acid dmg",
	descriptionFull : "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded." + "\n   " + "The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it."
};
SpellsList["lightning arrow"] = {
	name : "Lightning Arrow",
	classes : ["ranger"],
	source : ["P", 255],
	level : 3,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Next rngd wea atk +4d8+1d8/SL Lightn. dmg, miss half; 10 ft all 2d8+1d8/SL Lightn. dmg, save half",
	descriptionFull : "The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage." + "\n   " + "Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one." + "\n   " + "The piece of ammunition or weapon then returns to its normal form." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd."
};
SpellsList["phantasmal force"] = {
	name : "Phantasmal Force",
	classes : ["bard", "sorcerer", "wizard"],
	source : ["P", 264],
	level : 2,
	school : "Illus",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A bit of fleece",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or sees 10 ft cube illusion that does 1d6 Psychic dmg/rnd; Int(Investigation) vs. Spell DC",
	descriptionFull : "You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs." + "\n   " + "The phantasm includes sound, temperature, and other stimuli, also evident only to the creature." + "\n   " + "The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends." + "\n   " + "While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall - it was pushed, it slipped, or a strong wind might have knocked it off." + "\n   " + "An affected target is so convinced of the phantasm's reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm's area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion."
};
SpellsList["power word heal"] = {
	name : "Power Word Heal",
	classes : ["bard"],
	source : ["P", 266],
	level : 9,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "1 crea heals all hp and stops being charmed, frightened, paralyzed, stunned; it can use rea to stand up",
	descriptionFull : "A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs."
};
SpellsList["ray of sickness"] = {
	name : "Ray of Sickness",
	classes : ["sorcerer", "wizard"],
	source : ["P", 271],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Spell attack for 2d8+1d8/SL Poison dmg; save or also poisoned until end of your next turn",
	descriptionFull : "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
SpellsList["searing smite"] = {
	name : "Searing Smite",
	classes : ["paladin"],
	source : ["P", 274],
	level : 1,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Next melee weapon hit +1d6+1d6/SL Fire dmg and target ignites; save to end spell or 1d6 Fire dmg",
	descriptionFull : "The next time you hit a creature with a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot above the 1st."
};
SpellsList["staggering smite"] = {
	name : "Staggering Smite",
	classes : ["paladin"],
	source : ["P", 278],
	level : 4,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "Next melee weapon hit +4d6 Psychic dmg and save or dis. on atks/chks, no rea, until end next turn",
	descriptionFull : "The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can't take reactions, until the end of its next turn."
};
SpellsList["swift quiver"] = {
	name : "Swift Quiver",
	classes : ["ranger"],
	source : ["P", 279],
	level : 5,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A quiver containing at least one piece of ammunition",
	duration : "Conc, 1 min",
	description : "Quiver gives nonmagical ammo; bns a to make 2 atks with weapon that uses ammo from that quiver",
	descriptionFull : "You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it." + "\n   " + "On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends."
};
SpellsList["telepathy"] = {
	name : "Telepathy",
	classes : ["wizard"],
	source : ["P", 281],
	level : 8,
	school : "Evoc",
	time : "1 a",
	range : "Unlimited",
	components : "V,S,M",
	compMaterial : "A pair of linked silver rings",
	duration : "24 h",
	description : "1 willing crea Int>0 and you telepathic link; share words, sensory information if on same plane",
	descriptionFull : "You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane." + "\n   " + "Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it."
};
SpellsList["thorn whip"] = {
	name : "Thorn Whip",
	classes : ["druid"],
	source : ["P", 282],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "The stem of a plant with thorns",
	duration : "Instantaneous",
	description : "Melee spell attack for 1d6 Piercing dmg and pull crea 10 ft to you; +1d6 at CL 5, 11, and 17",
	descriptionFull : "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you." + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["thunderous smite"] = {
	name : "Thunderous Smite",
	classes : ["paladin"],
	source : ["P", 282],
	level : 1,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Next melee weapon hit +2d6 Thunder dmg and save or 10 ft push and prone; audible in 300 ft",
	descriptionFull : "The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone."
};
SpellsList["tsunami"] = {
	name : "Tsunami",
	classes : ["druid"],
	source : ["P", 284],
	level : 8,
	school : "Conj",
	time : "1 min",
	range : "Sight",
	components : "V,S",
	duration : "Conc, 6 rnd",
	save : "Str",
	description : "300\u00D750\u00D7300ft (l\u00D7w\u00D7h) wall of water moves away at 50 ft/rnd; 6d10 Bludg. dmg; save halves; see B",
	descriptionMetric : "90\u00D715\u00D790m (l\u00D7w\u00D7h) wall of water moves away at 15 m/rnd; 6d10 Bludg. dmg; save halves; see B",
	descriptionFull : "A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration." + "\n   " + "When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save." + "\n   " + "At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends." + "\n   " + "A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can't move. A creature that moves out of the area falls to the ground."
};
SpellsList["witch bolt"] = {
	name : "Witch Bolt",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["P", 289],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A twig from a tree that has been struck by lightning",
	duration : "Conc, 1 min",
	description : "Spell attack 1d12+1d12/SL Lightning dmg; 1 a, if consecutive, for dmg again; ends if out of range",
	descriptionFull : "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st."
};
SpellsList["wrathful smite"] = {
	name : "Wrathful Smite",
	classes : ["paladin"],
	source : ["P", 289],
	level : 1,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "Next melee weapon hit +1d6 Psychic dmg and save or frightened; it can take 1 a for extra save",
	descriptionFull : "The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell."
};

// Add a function if not already defined
if (typeof AddToNotes === 'undefined') {
	AddToNotes = function(noteStr, alertTxt, oldNoteStr) {
		if (What("Unit System") === "metric") {
			noteStr = ConvertToMetric(noteStr, 0.5);
			if (oldNoteStr) oldNoteStr = ConvertToMetric(oldNoteStr, 0.5);
		};
		noteStr = noteStr.replace(/\n/g, "\r");
		if (oldNoteStr) oldNoteStr = oldNoteStr.replace(/\n/g, "\r");
		var replaceOldNote = false;
		if (!isTemplVis("ASnotes")) {
			var noteFld = DoTemplate("ASnotes", "Add");
			noteFld += "Notes.Left";
		} else {
			var noteFld = false;
			var noteFlds = ["Notes.Left", "Notes.Right"];
			var notesPrefix = What("Template.extras.ASnotes").split(",");
			for (var i = 1; i < notesPrefix.length; i++) {
				for (var n = 0; n < noteFlds.length; n++) {
					var aFld = notesPrefix[i] + noteFlds[n];
					var inFld = What(aFld);
					if (noteStr && inFld.toLowerCase().indexOf(noteStr.toLowerCase()) !== -1) {
						return;
					} else if (oldNoteStr && inFld.toLowerCase().indexOf(oldNoteStr.toLowerCase()) !== -1) {
						noteFld = aFld;
						replaceOldNote = true;
						i = noteFlds.length;
						break;
					} else if (inFld === "" && !noteFld) {
						noteFld = aFld;
					};
				};
			};
			if (!noteFld && noteStr) {
				noteFld = DoTemplate("ASnotes", "Add");
			} else if (!noteStr && !oldNoteStr) {
				return;
			};
		};
		ReplaceString(noteFld, noteStr, false, oldNoteStr ? oldNoteStr : "");
		if (!replaceOldNote && noteStr && alertTxt) {
			app.alert({
				cTitle : alertTxt + " is added on the Notes page",
				cMsg : "You can find the rules for " + alertTxt + " on the \"Notes\" page at page no. " + (tDoc.getField(noteFld).page + 1) + ".\n\nThese rules are simply to much for the Class Features section and do not fit with the rest that needs to go in the third page's Notes section. Thus, these rules will be put on a Notes page and will be updated there.",
				nIcon : 3
			});
		};
	};
};
var iFileName = "pub_20140819_HotDQ.js";
RequiredSheetVersion(12.999);
// This file adds the background features from the Hoard of the Dragon Queen adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.HotDQ={
	name : "Hoard of the Dragon Queen [background features]",
	abbreviation : "HotDQ",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/hoard-dragon-queen",
	date : "2014/08/19"
};

// Background features
BackgroundFeatureList["cult of the dragon infiltrator"] = {
	description : "I have infiltrated the ranks of the Cult of the Dragon. Having spied on the organization for quite some time, I am familiar with its inner workings and customs. I have a second identity as an initiate of the cult, enough of a facade to blend in as a simple grunt or servant.",
	source : ["HotDQ", 87]
};
BackgroundFeatureList["dragon scholar"] = {
	description : "I have studied dragons and their lore for many years. I can automatically identify locations built or used by dragons, and I can identify dragon eggs and scales by sight. If I fail an Intelligence check to recall lore relating to dragons, I know someone or some book that I can consult for the answer unless the DM rules that the lore is unknown.",
	source : ["HotDQ", 87]
};
var iFileName = "pub_20140930_MM.js";
RequiredSheetVersion(12.999);
// This file adds all the player-material from the Monster Manual to MPMB's Character Record Sheet

// Define the source
SourceList.M={
	name : "Monster Manual",
	abbreviation : "MM",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/monster-manual",
	date : "2014/09/30"
};

// Dinosaurs not in the SRD
CreatureList["allosaurus"] = {
	name : "Allosaurus",
	source : ["M", 79],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 51,
	hd : [6, 10], //[#, die]
	speed : "60 ft",
	scores : [19, 13, 17, 2, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 5
	},
	senses : "",
	passivePerception : 15,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 30 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [2, 10, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Can be used in combination with claw while pouncing (see Pounce trait)"
		}
	],
	traits : [{
			name : "Pounce",
			description : "If the allosaurus moves at least 30 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action."
		}
	]
};
CreatureList["ankylosaurus"] = {
	name : "Ankylosaurus",
	source : ["M", 79],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 15,
	hp : 68,
	hd : [8, 12], //[#, die]
	speed : "30 ft",
	scores : [19, 11, 15, 2, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 11,
	languages : "",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Tail",
			ability : 1,
			damage : [4, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : "Target must succeed on a DC 14 Strength saving throw or be knocked prone",
			modifiers : [1, "", ""] //[to hit, to damage, add ability to damage] "" means ignore
		}
	]
};
CreatureList["pteranodon"] = {
	name : "Pteranodon",
	source : ["M", 79],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 13,
	hd : [3, 8], //[#, die]
	speed : "10 ft, fly 60 ft",
	scores : [12, 15, 10, 2, 9, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 1
	},
	senses : "",
	passivePerception : 11,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Flyby",
			description : "The pteranodon doesn't provoke opportunity attacks when it flies out of an enemy's reach."
		}
	]
};

// Special familiars not in the SRD
CreatureList["faerie dragon"] = { // With contributions by Patrick O.
	name : "Faerie Dragon",
	source : ["M", 133],
	size : 5, //Tiny
	type : "Dragon",
	subtype : "",
	alignment : "Chaotic Good",
	ac : 15,
	hp : 14,
	hd : [4, 4],
	speed : "10 ft, fly 60 ft",
	scores : [3, 20, 13, 14, 12, 16], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"arcana" : 4,
		"perception" : 3,
		"stealth" : 7
	},
	senses : "Darkvision 60 ft",
	passivePerception : 13,
	languages : "Draconic, Sylvan",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"],
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["", "", false]
		}, {
			name : "Euphoria Breath (Recharge 5-6)",
			ability : 3,
			damage : ["Wis save", "", "Euphoria"],
			range : "5 ft",
			description : "For 1 min, target rolls d6 at turn start: 1-4 move random (no actions), 5-6 save again (no actions/move)",
			dc : true,
			modifiers : ["", "", false],
			tooltip : "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn: 1-4 - the target takes no action or bonus action and uses all its movment to move in a random direction. 5-6 - the target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
		}
	],
	traits : [{
			name : "Superior Invisibility",
			description : "As a bonus action, the dragon can magically turn invisible until its concentration ends (as with a spell). Anything it wears or carries is invisible with it."
		}, {
			name : "Limited Telepathy",
			description : "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
		}, {
			name : "Magic Resistance",
			description : "The dragon has advantage on saves against spells and magical effects."
		}, {
			name : "Euphoria Breath (Recharge 5-6)",
			description : "Exhale a puff of euphoria gas at a creature within 5 ft. It must succeed on a DC 11 Wisdom save, or for 1 minute, it can't take reactions and must roll a d6 at the start of each of its turns:\n 1-4 - No action or bonus action, using all movment to move in a random direction.\n 5-6 - The target does nothing except attempt another save to try end the effect on itself."
		}
	],
	features : [{
			name : "Innate Spellcasting",
			description : "Cast spells using Charisma (save DC 13), requiring no material components. The spells it knows depends on its age (and stack):\n Red: 1/day - Dancing Lights, Mage Hand, Minor Illusion\n Orange (6-10 years): 1/day - Color Spray\n Yellow (11-20 years): 1/day - Mirror Image\n Green (21-30 years): 1/day - Suggestion\n Blue (31-40 years): 1/day - Major Image\n Indigo (41-50 years): 1/day - Hallucinatory Terrain\n Violet (51+ years): 1/day - Polymorph"
		}
	]
};
CreatureList["crawling claw"] = {
	name : "Crawling Claw",
	source : ["M", 44],
	size : 5, //Tiny
	type : "Undead",
	subtype : "",
	alignment : "Neutral Evil",
	ac : 12,
	hp : 2,
	hd : [1, 4], //[#, die]
	speed : "20 ft, climb 20 ft",
	scores : [13, 14, 11, 5, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Blindsight 30 ft (blind beyond this radius)",
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, poisoned",
	passivePerception : 10,
	languages : "understands Common but can't speak",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 4, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Does bludgeoning or slashing damage (claw's choice)"
		}
	],
	traits : [{
			name : "Turn Immunity",
			description : "The claw is immune to effects that turn undead."
		}
	]
};
CreatureList["peryton"] = {
	name : "Peryton",
	source : ["M", 251],
	size : 3, //Medium
	type : "Monstrosity",
	subtype : "",
	companion : "steed",
	alignment : "Chaotic Evil",
	ac : 13,
	hp : 33,
	hd : [6, 8], //[#, die]
	speed : "20 ft, fly 60 ft",
	scores : [16, 12, 13, 9, 12, 10], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 5
	},
	senses : "Adv. on Wis (Perception) checks using sight/smell",
	passivePerception : 16,
	languages : "understands Common and Elvish, but can't speak",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One gore and one talons attack as an Attack action; +2d8 after 30 ft dive straight down"
		}, {
			name : "Talons",
			ability : 1,
			damage : [2, 4, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One talons and one gore attack as an Attack action; +2d8 after 30 ft dive straight down"
		}
	],
	traits : [{
			name : "Dive Attack",
			description : "If the peryton is flying and dives at least 30 ft. straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 9 (2d8) damage to the target."
		}, {
			name : "Flyby",
			description : "The peryton doesn't provoke an opportunity attack when it flies out of an enemy's reach."
		}, {
			name : "Keen Sight and Smell",
			description : "The peryton has advantage on Wisdom (Perception) checks that rely on sight or smell."
		}
	]
};

// Blights and spores
CreatureList["needle blight"] = {
	name : "Needle Blight",
	source : ["M", 32],
	size : 3, //Medium
	type : "Plant",
	subtype : "",
	alignment : "Neutral Evil",
	ac : 12,
	hp : 11,
	hd : [2, 8], //[#, die]
	speed : "30 ft",
	scores : [12, 12, 13, 4, 8, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	condition_immunities : "blinded, deafened",
	senses : "Blindsight 60 ft (blind beyond this radius).",
	passivePerception : 9,
	languages : "understands Common but can't speak",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claws",
			ability : 2,
			damage : [2, 4, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}, {
			name : "Needles",
			ability : 2,
			damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "30/60 ft",
			description : ""
		}
	]
};
CreatureList["twig blight"] = {
	name : "Twig Blight",
	source : ["M", 32],
	size : 4, //Small
	type : "Plant",
	subtype : "",
	alignment : "Neutral Evil",
	ac : 13,
	hp : 4,
	hd : [1, 6], //[#, die]
	speed : "20 ft",
	scores : [6, 13, 12, 4, 8, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	damage_vulnerabilities : "fire",
	condition_immunities : "blinded, deafened",
	senses : "Blindsight 60 ft (blind beyond this radius).",
	passivePerception : 9,
	languages : "understands Common but can't speak",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, 4, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "False Appearance",
			description : "While the blight remains motionless, it is indistinguishable from a dead shrub."
		}
	]
};
CreatureList["vine blight"] = {
	name : "Vine Blight",
	source : ["M", 32],
	size : 3, //Medium
	type : "Plant",
	subtype : "",
	alignment : "Neutral Evil",
	ac : 12,
	hp : 26,
	hd : [4, 8], //[#, die]
	speed : "10 ft",
	scores : [15, 8, 14, 5, 10, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 1
	},
	condition_immunities : "blinded, deafened",
	senses : "Blindsight 60 ft (blind beyond this radius).",
	passivePerception : 9,
	languages : "Common",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Constrict",
			ability : 1,
			damage : [2, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : "Large or smaller target is grappled and restrained (escape DC 12); Can't use constrict again until grapple ends"
		}
	],
	traits : [{
			name : "False Appearance",
			description : "While the blight remains motionless, it is indistinguishable from a tangle of vines."
		}
	],
	actions : [{
			name : "Entangling Plants (Recharge 5-6)",
			description : "As an action, grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check, freeing it self or another entangled creature within reach on a success."
		}
	],
	wildshapeString : "Blindsight 60 ft (blind beyond)| Immune to blinded, deafened| Entangling Plants (Recharge 5-6): As an action, 15-ft radius is difficult terrain for nonplant creatures, for 1 minute. Chosen creatures in it must make a DC 12 Str save or become restrained. A creature can use its action to make a DC 12 Str check to free itself or another within reach| False Appearance: While motionless, it's indistinguishable from a tangle of vines."
};
CreatureList["gas spore"] = {
	name : "Gas Spore",
	source : ["M", 138],
	size : 2, //Large
	type : "Plant",
	subtype : "",
	alignment : "Unaligned",
	ac : 5,
	hp : 1,
	hd : [1, 10], //[#, die]
	speed : "fly 10 ft (hover)",
	scores : [5, 1, 3, 1, 1, 1], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	condition_immunities : "blinded, deafened, frightened",
	senses : "Blindsight 30 ft (blind beyond this radius).",
	passivePerception : 5,
	languages : "",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Touch",
			ability : 1,
			damage : [1, "", "poison"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "DC 10 Con save or infected with Death Burst disease, see traits",
			modifiers : [1, "", false] //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Death Burst",
			description : "The gas spore explodes when it drops to 0 hit points. Each creature within 20 feet of it must succeed on a DC 15 Constitution saving throw or take 10 (3d6) poison damage and become infected with a disease on a failed save. Creatures immune to the poisoned condition are immune to this disease.\n   Spores invade an infected creature's system, killing the creature in a number of hours equal to 1d12+the creature's Constitution score, unless the disease is removed. In half that time, the creature becomes poisoned for the rest of the duration. After the creature dies, it sprouts 2d4 Tiny gas spores that grow to full size in 7 days."
		}, {
			name : "Eerie Resemblance",
			description : "The gas spore resembles a beholder. A creature that can see the gas spore can discern its true nature with a successful DC 15 Intelligence (Nature) check."
		}
	],
	wildshapeString : "Blindsight 30 ft (blind beyond)| Immune to: blinded, deafened, frightened| Distinguishable form a beholder only with a DC 15 Int (Nature) check| When at 0 HP, explodes: all within 20 ft DC 15 Con save or 3d6 poison damage and infected with disease| The disease kills a creature in 1d12+it's Con score of hours. In half that, it becomes poisoned for the remainder. When dies, sprouts 2d4 Tiny gas spores that grow to full size in 7 days."
};
var iFileName = "pub_20141209_DMG.js";
RequiredSheetVersion(12.999);
// This file adds all the player-material from the Dungeon Master's Guide to MPMB's Character Record Sheet

// Define the source
SourceList.D={
	name : "Dungeon Master's Guide",
	abbreviation : "DMG",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/dungeon-masters-guide",
	date : "2014/12/09"
};

// Races
RaceList["aasimar"] = {
	regExpSearch : /^(?!.*(fallen|protector|scourge))((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel)))).*$/i,
	name : "Aasimar",
	source : ["D", 286],
	plural : "Aasimar",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from 5 to over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Aasimar: +1 Wisdom, +2 Charisma;",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Aasimar (+1 Wisdom, +2 Charisma)\n\nCelestial Legacy:\n   I know the Light cantrip.\n   Once I reach 3rd level, I can cast the Lesser Restoration spell once per long rest.\n   Once I reach 5th level, I can cast the Daylight spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Celestial Legacy (level 1)",
		spells : ["light"],
		selection : ["light"],
		atwill : true
	},
	features : {
		"lesser restoration" : {
			name : "Lesser Restoration",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			tooltip : " (Celestial Legacy)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Celestial Legacy (level 3)",
				spells : ["lesser restoration"],
				selection : ["lesser restoration"],
				oncelr : true
			}
		},
		"daylight" : {
			name : "Daylight",
			usages : 1,
			minlevel : 5,
			recovery : "long rest",
			tooltip : " (Celestial Legacy)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Celestial Legacy (level 5)",
				spells : ["daylight"],
				selection : ["daylight"],
				oncelr : true
			}
		}
	}
};
RaceList["eladrin"] = {
	regExpSearch : /^(?!.*half)((?=.*eladrin)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(feys?|feywild)\b))).*$/i,
	name : "Eladrin",
	sortname : "Elf, Fey (Eladrin)",
	source : ["D", 286],
	plural : "Eladrin",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponprofs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d12\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d12 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Eladrin: +2 Dexterity, +1 Intelligence;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Eladrin (+2 Dexterity, +1 Intelligence)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nFey Step: I can cast the Misty Step spell once using this trait. I regain the ability to do so when I finish a short rest.",
	spellcastingAbility : 4,
	features : {
		"fey step" : {
			name : "Misty Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : " (Fey Step)",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Fey Step",
				spells : ["misty step"],
				selection : ["misty step"],
				oncesr : true
			}
		}
	}
};

// Subclasses
AddSubClass("cleric", "death domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(death|dead|dying)).*$/i,
	subname : "Death Domain",
	source : ["D", 96],
	spellcastingExtra : ["false life", "ray of sickness", "blindness/deafness", "ray of enfeeblement", "animate dead", "vampiric touch", "blight", "death ward", "antilife shell", "cloudkill"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["D", 96],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons",
			weapons : [false, true]
		},
		"subclassfeature1.1" : {
			name : "Reaper",
			source : ["D", 96],
			minlevel : 1,
			description : "\n   " + "I learn one necromancy cantrip of my choice from any spell list" + "\n   " + "My necromancy, single-target cantrips can affect two targets within 5 ft of each other",
			spellcastingBonus : {
				name : "Reaper",
				"class" : "any",
				school : ["Necro"],
				level : [0, 0]
			}
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Touch of Death",
			source : ["D", 97],
			minlevel : 2,
			description : "\n   " + "When I hit a creature with a melee attack, I can deal extra necrotic damage",
			additional : ["", "+9 damage", "+11 damage", "+13 damage", "+15 damage", "+17 damage", "+19 damage", "+21 damage", "+23 damage", "+25 damage", "+27 damage", "+29 damage", "+31 damage", "+33 damage", "+35 damage", "+37 damage", "+39 damage", "+41 damage", "+43 damage", "+45 damage"]
		},
		"subclassfeature6" : {
			name : "Inescapable Destruction",
			source : ["D", 97],
			minlevel : 6,
			description : "\n   " + "When I deal necrotic damage with spells or Channel Divinity, I ignore resistance to it"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["D", 97],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 necrotic damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 necrotic damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra necrotic damage."]
			}
		},
		"subclassfeature17" : {
			name : "Improved Reaper",
			source : ["D", 97],
			minlevel : 17,
			description : "\n   " + "If I cast a 5th-level or lower necromancy spell that has one target, I can target two" + "\n   " + "They need to be within 5 ft of each other; I have to provide material comp. for both"
		}
	}
});
AddSubClass("paladin", "oathbreaker", {
	regExpSearch : /^((?=.*blackguard)|((?=.*(oath.*breaker|breaker.*oath))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))).*$/i,
	subname : "Oathbreaker",
	source : ["D", 97],
	spellcastingExtra : ["hellish rebuke", "inflict wounds", "crown of madness", "darkness", "animate dead", "bestow curse", "blight", "confusion", "contagion", "dominate person"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Control Undead",
			source : ["D", 97],
			minlevel : 3,
			description : "\n   " + "As an action, one undead (CR < paladin level) I can see in 30 ft must make a Wis save" + "\n   " + "If failed, it must obey my commands for 24 hours or until I use this on another",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Dreadful Aspect",
			source : ["D", 97],
			minlevel : 3,
			description : "\n   " + "As an action, anyone I choose within 30 ft that can see me must make a Wisdom save" + "\n   " + "If failed, it is frightened for 1 min or until it succeeds a save at the end of its turns" + "\n   " + "It can't save at the end of its turn if it's still within 30 ft of me",
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Aura of Hate",
			source : ["D", 97],
			minlevel : 7,
			description : "\n   " + "Fiends/undead within range and I add my Cha mod as bonus on melee weapon damage" + "\n   " + "Multiple Auras of Hate don't stack; only the strongest applies",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"]
		},
		"subclassfeature15" : {
			name : "Supernatural Resistance",
			source : ["P", 97],
			minlevel : 15,
			description : "\n   " + "I have resistance to bludgeoning/piercing/slashing damage from nonmagical weapons",
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		},
		"subclassfeature20" : {
			name : "Dread Lord",
			source : ["D", 97],
			minlevel : 20,
			description : "\n   " + "As an action, I gain a 30-ft aura of gloom that reduces bright light to dim for 1 min" + "\n   " + "If frightened of me, foes starting their turn in the aura take 4d10 psychic damage" + "\n   " + "Attacks vs. my allies and me inside the aura have disadvantage if attackers need sight" + "\n   " + "As a bonus action, I can make a melee spell attack vs. a target inside the aura" + "\n   " + "If this attack hits, it does 3d10 + Charisma modifier necrotic damage",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});

// Firearms [weapons and ammunition] (includes contributions by grungydan)
WeaponsList["pistol"] = {
	regExpSearch : /^(?=.*pistol)(?!.*automatic).*$/i,
	name : "Pistol",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [1, 10, "piercing"],
	range : "30/90 ft",
	weight : 3,
	description : "Ammunition, loading",
	abilitytodamage : true,
	ammo : "renaissance bullet"
};
WeaponsList["musket"] = {
	regExpSearch : /musket/i,
	name : "Musket",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [1, 12, "piercing"],
	range : "40/120 ft",
	weight : 10,
	description : "Ammunition, loading, two handed",
	abilitytodamage : true,
	ammo : "renaissance bullet"
};
WeaponsList["pistol automatic"] = {
	regExpSearch : /^(?!.*rifle)(?=.*pistol)(?=.*automatic).*$/i,
	name : "Pistol, automatic",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [2, 6, "piercing"],
	range : "50/150 ft",
	weight : 3,
	description : "Ammunition, reload (15 shots)",
	abilitytodamage : true,
	ammo : "modern bullet"
};
WeaponsList["revolver"] = {
	regExpSearch : /revolver/i,
	name : "Revolver",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [2, 8, "piercing"],
	range : "40/120 ft",
	weight : 3,
	description : "Ammunition, reload (6 shots)",
	abilitytodamage : true,
	ammo : "modern bullet"
};
WeaponsList["rifle hunting"] = {
	regExpSearch : /^(?!=laser|antimatter)(?=.*hunting)(?=.*rifle).*$/i,
	name : "Hunting Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [2, 10, "piercing"],
	range : "80/240 ft",
	weight : 8,
	description : "Ammunition, reload (5 shots), two handed",
	abilitytodamage : true,
	ammo : "modern bullet"
};
WeaponsList["rifle automatic"] = {
	regExpSearch : /^(?!=.*laser|antimatter)(?=.*automatic)(?=.*rifle).*$/i,
	name : "Automatic Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [2, 8, "piercing"],
	range : "80/240 ft",
	weight : 8,
	description : "Ammunition, burst fire, reload (30 shots), two handed",
	abilitytodamage : true,
	ammo : "modern bullet"
};
WeaponsList["shotgun"] = {
	regExpSearch : /shotgun/i,
	name : "Shotgun",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [2, 8, "piercing"],
	range : "30/90 ft",
	weight : 7,
	description : "Ammunition, reload (2 shots), two handed",
	abilitytodamage : true,
	ammo : "modern bullet"
};
WeaponsList["laser pistol"] = {
	regExpSearch : /^(?=.*laser)(?=.*pistol).*$/i,
	name : "Laser Pistol",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [3, 6, "radiant"],
	range : "40/120 ft",
	weight : 2,
	description : "Ammunition, reload (50 shots), two handed",
	abilitytodamage : true,
	ammo : "energy cell"
};
WeaponsList["antimatter rifle"] = {
	regExpSearch : /^(?!.*laser)(?=.*antimatter)(?=.*rifle).*$/i,
	name : "Antimatter Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [6, 8, "necrotic"],
	range : "120/360 ft",
	weight : 10,
	description : "Ammunition, reload (2 shots), two handed",
	abilitytodamage : true,
	ammo : "energy cell"
};
WeaponsList["laser rifle"] = {
	regExpSearch : /^(?!.*antimatter)(?=.*laser)(?=.*rifle).*$/i,
	name : "Laser Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [3, 8, "radiant"],
	range : "100/300 ft",
	weight : 7,
	description : "Ammunition, reload (30 shots), two handed",
	abilitytodamage : true,
	ammo : "energy cell"
};
AmmoList["renaissance bullet"] = {
	name : "Bullets, Renaissance",
	source : ["D", 268],
	weight : 0.2,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, renaissance",
	alternatives : [/^(?=.*bullet)(?=.*renaissance).*$/i]
};
AmmoList["modern bullet"] = {
	name : "Bullets, Modern",
	source : ["D", 268],
	weight : 0.1,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, modern",
	alternatives : [/^(?=.*bullet)(?=.*modern).*$/i]
};
AmmoList["energy cell"] = {
	name : "Energy Cell",
	source : ["D", 268],
	weight : 0,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Energy Cell"
};


var iFileName = "pub_20150415_AL-EE.js";
RequiredSheetVersion(12.999);
// This file adds the optional backgrounds from the Adventurers League season 2 (Elemental Evil) to MPMB's Character Record Sheet

// Define the source
SourceList["AL:EE"]={
	name : "Elemental Evil Backgrounds [Mulmaster]",
	abbreviation : "AL:EE",
	group : "Adventurers League",
	url : "https://dndadventurersleague.org/wp-content/uploads/2015/04/Mulmaster-Bonds-and-Backgrounds.pdf",
	date : "2015/04/15"
};

// Backgrounds
BackgroundList["caravan specialist"] = {
	regExpSearch :  /^(?=.*caravan)(?=.*specialist).*$/i,
	name : "Caravan Specialist",
	source : ["AL:EE", 2],
	skills : ["Animal Handling", "Survival"],
	gold : 10,
	equipleft : [
		["Two-person tent", "", 20],
		["Regional map", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wagonmaster",
	trait : [
		"Any group is only as strong as its weakest link. Everyone has to pull their own weight.",
		"There's always someone out there trying to take what I've got. Always be vigilent.",
		"Anything can be learned if you have the right teacher. Most folks just need a chance.",
		"Early to bed and early to rise; this much at least is under my control.",
		"You can listen to me or don't and wish you had. Everyone ends up on one side of that fence.",
		"Eventually my hard work will be rewarded. Maybe that time has finally come.",
		"A strong ox or horse is more reliable than most people I've met.",
		"I never had time for books, but wish I had. I admire folks who have taken the time to learn."
	],
	ideal : [
		["Service",
			"Service: Using my talents to help others is the best way of helping myself. (Good)"
		],
		["Selfish",
			"Selfish: What people don't know WILL hurt them, but why is that my problem? (Evil)"
		],
		["Wanderer",
			"Wanderer: I go where the road takes me. Sometimes that's a good thing… (Chaotic)"
		],
		["Fittest",
			"Fittest: On the open road, the law of nature wins. Victims are the unprepared. (Lawful)"
		],
		["Focused",
			"Focused: I simply have a job to do, and I'm going to do it. (Neutral)"
		],
		["Motivated",
			"Motivated: There's a reason I'm good at what I do, I pay attention to the details. (Any)"
		]
	],
	bond : [
		"My brother has a farm In Elmwood and I've helped him and his neigbors move their goods to Mulmaster and other surrounding towns. Those are good people.",
		"A caravan I lead was attacked by bandits and many innocents died. I swear that I will avenge them by killing any bandits I encounter.",
		"The Soldiery are mostly good guys who understand the importance of protecting the roads. The City Watch is who you have to look out for. If they are inspecting your goods, get ready to pay a fine.",
		"The new commander of Southroad Tower, Capt. Holke, understands the importance of safe roads. He's hired me for several jobs and I'm grateful.",
		"There's always a road I haven't traveled before. I'm always looking for new places to explore.",
		"Wealth and power mean little without the freedom to go where and when you want."
	],
	flaw : [
		"I have trouble trusting people I've just met.",
		"I enjoy the open road. Underground and tight spaces make me very nervous.",
		"I expect others to heed my orders and have little respect or sympathy if they don't.",
		"I am very prideful and have trouble admitting when I'm wrong.",
		"Once I decide on a course of action, I do not waiver.",
		"I like to explore, and my curiosity will sometimes get me into trouble."
	],
	toolProfs : ["Vehicles (land)"],
	languageProfs : [1],
	lifestyle : "poor"
};
BackgroundList["earthspur miner"] = {
	regExpSearch :  /^(?=.*earthspur)(?=.*miner).*$/i,
	name : "Earthspur Miner",
	source : ["AL:EE", 3],
	skills : ["Athletics", "Survival"],
	gold : 5,
	equipleft : [
		["Shovel or miner's pick", "", 5],
		["Block and tackle", "", 5],
		["Climber's kit", "", 12]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Deep Miner",
	trait : [
		"Nothing bothers me for long.",
		"I hate the horrors of the Underdark with a passion. They took my friends and family and almost got me.",
		"Anything worth doing takes time and patience. I have learned to plan and wait for the things I want and to be patient to achieve my goals.",
		"I can party with everyone. Whether with dwarves, or goliaths, or deep gnomes, I can find a way to have a good time.",
		"I'd rather be mining. This is okay; mining is better.",
		"I think that I will stumble upon great riches if I just keep looking.",
		"People who don't work with their hands and who live in houses are soft and weak.",
		"I wish I were more educated. I look up to people who are."
	],
	ideal : [
		["Generosity",
			"Generosity: The riches of the earth are to be shared by all. (Good)"
		],
		["Greed",
			"Greed: Gems and precious metals, I want them all for myself. (Evil)"
		],
		["Mooch",
			"Mooch: Property, schmoperty. If I need it, I take and use it. If I don't, I leave it for someone else. (Chaotic)"
		],
		["Boundaries",
			"Boundaries: Everything and everyone has its prescribed place; I respect that and expect others to do the same. (Lawful) "
		],
		["Let it Be",
			"Let it Be: I don't meddle in the affairs of others if I can avoid it. They're none of my business. (Neutral)"
		],
		["Materialist",
			"Materialist: I want riches to improve my life. (Any)"
		]
	],
	bond : [
		"The people of the Earthspur mines are my family. I will do anything to protect them.",
		"A deep gnome saved my life when I was injured and alone. I owe his people a great debt.",
		"I must behold and preserve the natural beauty of places below the earth.",
		"Gems hold a special fascination for me, more than gold, land, magic, or power.",
		"I want to explore new depths and scale new heights.",
		"Someday I'm going to find the mother lode, then I'll spend the rest of my life in luxury."
	],
	flaw : [
		"I'm uncomfortable spending time under the open sky. I'd rather be indoors or underground.",
		"I'm not used to being around other people much and sometimes get grouchy about it.",
		"Good tools are more reliable than people. In a cave in, I would save a sturdy pick before a stranger.",
		"I jealously guard my secrets, because I think others will take advantage of me if they learn what I know.",
		"I am obsessed with getting rich. I always have a scheme brewing for making it big.",
		"I'm afraid of the dark."
	],
	languageProfs : ["Dwarvish", "Undercommon"],
	lifestyle : "poor"
};
BackgroundList["harborfolk"] = {
	regExpSearch :  /harborfolk/i,
	name : "Harborfolk",
	source : ["AL:EE", 4],
	skills : ["Athletics", "Sleight of Hand"],
	gold : 5,
	equipleft : [
		["Fishing tackle", "", 4],
		["Set of dice, playing cards, or three-dragon ante", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
		["Rowboat", "", 100]
	],
	feature : "Harborfolk",
	trait : [
		"I am curious. I want to know why things are the way they are and why people do the things that they do.",
		"I can't sing, but that never stops me from doing it, loudly. Everyone loves a good sea chanty!",
		"I think the High Blade is doing a terrific job, don't you?",
		"I'm very excited that the House Built on Gold is being restored. I am a zealous worshipper of Waukeen.",
		"I am quite superstitious. I see portents in everyday occurances.",
		"I resent the rich and enjoy thwarting their plans and spoiling their fun in small ways.",
		"I have a sea story to fit every occasion.",
		"I'm a fisher, but I secretly detest eating fish. I will do anything to avoid it."
	],
	ideal : [
		["Calm",
			"Calm: For all things, there is a tide. I set sail when it is right, and mend my nets when it is not. (Lawful)"
		],
		["Windblown",
			"Windblown: I go where the winds blow. No man or woman tells me where or when to sail. (Chaotic)"
		],
		["Aspiring",
			"Aspiring: I will gain the favor of a Zor or Zora patron, maybe even one of the Blades! (Any)"
		],
		["Salty",
			"Salty: I want people to look to me as an expert on plying Mulmaster Harbor. (Any)"
		],
		["Selfless",
			"Selfless: We are all children of the sea. I help everyone in peril afloat and ashore. (Good)"
		],
		["Let them Drown",
			"Let them Drown: I refuse to risk my hide to help others. They wouldn't help me if roles were reversed. (Evil)"
		]
	],
	bond : [
		"I once lost everything but my rowboat. I'll do anything to protect it.",
		"My brother was in the Soldiery, but he was killed. I really look up to the men and women who serve.",
		"The Cloaks killed my friend for spellcasting. I'll get them back somehow, someday.",
		"The High House of Hurting helped me when I was hurt and asked nothing in return. I owe them my life.",
		"I was robbed in the Zhent ghetto once. It will not happen again.",
		"I would do anything to protect the other harborfolk. They are my family."
	],
	flaw : [
		"I drink too much, which causes me to miss the tide.",
		"I killed a drunk member of the City Watch in a brawl. I am terrified that they might find out.",
		"I oversell myself and make promises I can't keep when I want to impress someone.",
		"Book learning is a waste of time. I have no patience for people who don't speak from experience.",
		"I almost always cheat. I can't help myself.",
		"I am a secret informant for the Hawks. I send them reports about everything I see and hear, even what my friends and allies are up to."
	],
	toolProfs : [["Gaming set", 1], "Vehicles (water)"],
	lifestyle : "poor"
};
BackgroundList["mulmaster aristocrat"] = {
	regExpSearch :  /^(?=.*mulmaster)(?=.*aristocrat).*$/i,
	name : "Mulmaster Aristocrat",
	source : ["AL:EE", 5],
	skills : ["Deception", "Performance"],
	gold : 10,
	equipleft : [
		["Artisan's tools or musical instrument", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Purse (with coins)", "", 1]
	],
	feature : "Highborn",
	trait : [
		"My ambitions are boundless. I will be a Zor or Zora one day!",
		"I must alwayss look my best.",
		"Beauty is everywhere. I can find it in even the homliest person and the most horrible tragedy.",
		"Décorum must be preserved at all costs.",
		"I will not admit I am wrong if I can avoid it.",
		"I am extremely well-educated and frequently remind others of that fact.",
		"I take what I can today, because I do not know what tomorrow holds.",
		"My life is full of dance, song, drink, and love."
	],
	ideal : [
		["Generous",
			"Generous: I have a responsibility to help and protect the less fortunate. (Good)"
		],
		["Loyal",
			"Loyal: My word, once given, is my bond. (Lawful)"
		],
		["Callous",
			"Callous: I am unconcerned with any negative effects my actions may have on the lives and fortunes of others. (Evil)"
		],
		["Impulsive",
			"Impulsive: I follow my heart. (Chaotic)"
		],
		["Ignorant",
			"Ignorant: Explanations bore me. (Neutral)"
		],
		["Isolationist",
			"Isolationist: I am concerned with the fortunes of my friends and family. Others must see to themselves. (Any)"
		]
	],
	bond : [
		"I have dedicated my wealth and my talents to the service of one of the city's many temples.",
		"My family and I are loyal supporters of High Blade Jaseen Drakehorn. Our fortunes are inexorably tied to hers. I would do anything to support her.",
		"Like many families who were close to High Blade Selfaril Uoumdolphin, mine has suffered greatly since his fall. We honor his memory in secret.",
		"My family plotted with Rassendyll Uoumdolphin brother usurped brother as High Blade. Betrayal is the quickest route to power.",
		"Wealth and power are nothing. Fulfillment can only be found in artistic expression.",
		"It's not how you feel, who you know, or what you can do - it's how you look, and I look fabulous."
	],
	flaw : [
		"I have difficulty caring about anyone or anything other than myself.",
		"Having grown up with wealth, I am careless with my finances. I overspend and am overly generous.",
		"The ends (my advancement) justify any means.",
		"I must have what I want and will brook no delay.",
		"My family has lost everything. I must keep up appearances, lest we become a laughingstock.",
		"I have no artistic sense. I hide that fact behind extreme opinons and have become a trendsetter."
	],
	toolProfs : [["Artisan's tools", 1], ["Musical instrument", 1]],
	lifestyle : "wealthy"
};
BackgroundList["phlan refugee"] = {
	regExpSearch :  /^(?=.*phlan)(?=.*refugee).*$/i,
	name : "Phlan Refugee",
	source : ["AL:EE", 6],
	skills : ["Insight", "Athletics"],
	gold : 15,
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Token of the life I once knew", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Phlan Survivor",
	trait : [
		"I may have lost everything I worked for most of my life, but there's work to be done, no time to linger on the past.",
		"I worked hard to get where I am and I refuse to let a little hardship stop me from succeeding.",
		"I protect those around me, you never know when one of them will be useful.",
		"I have always gotten ahead by giving, why change now?",
		"I prepare for everything, it paid off in Phlan and it will pay off again.",
		"I will reclaim my home, though the path may be long, I will never give up hope.",
		"I never cared for personal hygiene, and am amazed that It bothers others.",
		"I am always willing to volunteer my services, just as long as don't have to do anything."
	],
	ideal : [
		["Justice",
			"Justice: Corruption brought Phlan down, I will not tolerate that any longer. (Lawful)"
		],
		["Acceptance",
			"Acceptance: Stability is a myth, to think you can control your future is futile. (Chaotic)"
		],
		["Hope",
			"Hope: I am guided by a higher power and I trust that everything will be right in the end. (Good)"
		],
		["Restraint",
			"Restraint: I hate those who caused my loss. It is all I can do not to lash out at them. (Any)"
		],
		["Strength",
			"Strength: As shown in Phlan, the strong survive. If you are weak you deserve what you get (Evil)"
		],
		["Openness",
			"Openness: I am always willing to share my life story with anyone who will listen. (Any)"
		]
	],
	bond : [
		"I have the chance at a new life and this time I am going to do things right.",
		"The Lord Regent brought this suffering upon his people. I will see him brought to justice.",
		"I await the day I will be able to return to my home in Phlan.",
		"I will never forget the debt owed to Glevith of the Welcomers. I will be ready to repay that debt when called upon.",
		"There was someone I cared about in Phlan, I will find out what happened to them.",
		"Some say my life wasn't worth saving, I will prove them wrong."
	],
	flaw : [
		"I used the lives of children to facilitate my escape from Phlan.",
		"I am a sucker for the underdog, and always bet on the loosing team.",
		"I am incapable of standing up for myself.",
		"I will borrow money from friends with no intention to repay it.",
		"I am unable to keep secrets. A secret is just an untold story.",
		"When something goes wrong, it's never my fault."
	],
	toolProfs : [["Artisan's tools", 1]],
	languageProfs : [1],
	lifestyle : "modest"
};

// Background features
BackgroundFeatureList["wagonmaster"] = {
	description : "I'm used to being in charge. My reputation has me on a short list for critical jobs, allows me to attract two more loyal workers for caravaning, and causes others to look to me for direction. I can identify the most defensible locations for camping. I have a great memory for maps and geography. While travelling, I can always find my cardinal directions.",
	source : ["AL:EE", 2]
};
BackgroundFeatureList["deep miner"] = {
	description : "I am used to navigating the deep places of the earth. I never get lost in caves or mines if I have either seen an accurate map of them or have been through them before. Furthermore, I am able to scrounge fresh water and food for myself and as many as five other people each day if I am in a mine or natural caves.",
	source : ["AL:EE", 3]
};
BackgroundFeatureList["harborfolk"] = {
	description : "I grew up on the docks and waters of Mulmaster Harbor. The harborfolk remember me and still treat me as one of them. They welcome me and my companions. While they might charge me for it, they'll always offer what food and shelter they have; they'll even hide me if the City Watch is after me (but not if the Hawks are).",
	source : ["AL:EE", 4]
};
BackgroundFeatureList["highborn"] = {
	description : "Mulmaster is run by and for its aristoracy. Every other class of citizen in the city defers to me, and even the priesthood, Soldiery, Hawks, and Cloaks treat me with deference. Other aristocrats and nobles accept me in their circles and likely know me or of me. My connections can get me the ear of a Zor or Zora under the right circumstances.",
	source : ["AL:EE", 5]
};
BackgroundFeatureList["phlan survivor"] = {
	description : "Whatever my prior standing I'm now one of the many refugees that came to Mulmaster. I'm able to find refuge with others from Phlan and those who sympathize with my plight. Within Mulmaster this means that I can find a place to sleep, recover, and hide from the watch with either other refugees from Phlan, or the Zhents within the ghettos.",
	source : ["AL:EE", 6]
};
var iFileName = "pub_20150416_EE.js";
RequiredSheetVersion(12.999);
// This file adds all the player-material from the Elemental Evil Player's Companion (November 2017, after the XGtE update) to MPMB's Character Record Sheet

// Define the source
SourceList.E={
	name : "Elemental Evil Player's Companion", // November 2017 version
	abbreviation : "EE",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/player%E2%80%99s-companion",
	date : "2015/04/16"
};

// Races
RaceList["aarakocra"] = {
	regExpSearch : /aarakocra/i,
	name : "Aarakocra",
	source : ["E", 5],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 50, enc : 0 }
	},
	languageProfs : ["Common", "Aarakocra", "Auran"],
	weapons : ["talons"],
	age : " rearch maturity by age 3 and live about 30 years",
	height : " are about 5 feet tall",
	weight : " weigh between 80 and 100 lb",
	heightMetric : " are about 1,5 metres tall",
	weightMetric : " weigh between 36 and 45 kg",
	improvements : "Aarakocra: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Aarakocra (+2 Dexterity, +1 Wisdom)\n\nFlight: I have a flying speed of 50 feet. To use this speed, I can't be wearing medium or heavy armor.\n\nTalons: My unarmed strikes deal 1d4 slashing damage on a hit.",
	features : {
		"talons" : {
			name : "Talons",
			minlevel : 1,
			calcChanges : {
				atkAdd : ["if ((/unarmed strike/i).test(WeaponName)) { fields.Damage_Type = 'slashing'; if (fields.Damage_Die == 1) {fields.Damage_Die = '1d4'; }; }; ", "I have talons, which cause my unarmed strikes to deal 1d4 slashing damage."]
			}
		}
	}
};
RaceList["deep gnome"] = {
	regExpSearch : /^((?=.*svirfneblin)|((?=.*\bgnomes?\b)(?=.*\b(underdarks?|deep|depths?)\b))).*$/i,
	name : "Svirfneblin",
	sortname : "Gnome, Deep (Svirfneblin)",
	source : [["E", 7], ["S", 115], ["MToF", 113]],
	plural : "Svirfneblin",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Gnomish", "Undercommon"],
	vision : [["Darkvision", 120]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " are considered full-grown adults when they reach 25 and live 200 to 250 years",
	height : " stand between 3 and 3 1/2 feet tall (2'9\" + 2d4\")",
	weight : " weigh around 90 lb (80 + 2d4 \xD7 1d4 lb)",
	heightMetric : " stand between 90 and 105 cm tall (85 + 5d4 cm)",
	weightMetric : " weigh around 50 kg (35 + 5d4 \xD7 4d4 / 10 kg)",
	improvements : "Svirfneblin: +1 Dexterity, +2 Intelligence;",
	scores : [0, 1, 0, 2, 0, 0],
	trait : "Svirfneblin (+1 Dexterity, +2 Intelligence)\n\nStone Camouflage:\n   I have advantage on Dexterity (stealth) checks to hide in rocky terrain."
};
RaceList["air genasi"] = {
	regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bairs?\b).*$/i,
	name : "Air genasi",
	sortname : "Genasi, Air",
	source : ["E", 9],
	plural : "Air genasi",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Primordial"],
	age : " reach adulthood in their late teens and live up to 120 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Air Genasi: +1 Dexterity, +2 Constitution;",
	scores : [0, 1, 2, 0, 0, 0],
	trait : "Air Genasi (+1 Dexterity, +2 Constitution)\n\nUnending Breath: I can hold my breath indefinitely while I am not incapacitated.\n\nMingle with the Wind: I can cast the Levitate spell once with this trait, requiring no material components, and I regain the ability to cast it this way when I finish a long rest. Constitution is my spellcasting ability for this spell.",
	abilitySave : 3,
	spellcastingAbility : 3,
	features : {
		"levitate" : {
			name : "Levitate",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Mingle with the Wind)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Mingle with the Wind",
				spells : ["levitate"],
				selection : ["levitate"],
				oncelr : true
			}
		}
	}
};
RaceList["earth genasi"] = {
	regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bearths?\b).*$/i,
	name : "Earth genasi",
	sortname : "Genasi, Earth",
	source : ["E", 9],
	plural : "Earth genasi",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Primordial"],
	age : " reach adulthood in their late teens and live up to 120 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Earth Genasi: +1 Strength, +2 Constitution;",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Earth Genasi (+1 Strength, +2 Constitution)" + (typePF ? "\n" : "") + "\nEarth Walk: I can move across difficult terrain made of earth or stone without expending extra movement." + (typePF ? "\n" : "") + "\nMerge with Stone: I can cast the Pass without Trace spell once with this trait, requiring no material components, and I regain the ability to cast it this way when I finish a long rest. Constitution is my spellcasting ability for this spell.",
	spellcastingAbility : 3,
	features : {
		"pass without trace" : {
			name : "Pass without Trace",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Merge with Stone)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Merge with Stone",
				spells : ["pass without trace"],
				selection : ["pass without trace"],
				oncelr : true
			}
		}
	}
};
RaceList["fire genasi"] = {
	regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bfires?\b).*$/i,
	name : "Fire genasi",
	sortname : "Genasi, Fire",
	source : ["E", 9],
	plural : "Fire genasi",
	vision : [["Darkvision", 60]],
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Primordial"],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live up to 120 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Fire Genasi: +2 Constitution, +1 Intelligence;",
	scores : [0, 0, 2, 1, 0, 0],
	trait : "Fire Genasi (+2 Constitution, +1 Intelligence)\n\nReach to the Blaze:\n   I know the Produce Flame cantrip.\n   Once I reach 3rd level, I can cast the Burning Hands spell once as a 1st-level spell.\n   I regain the ability to cast it this way when I finish a long rest.\n   Constitution is my spellcasting ability for these spells.",
	abilitySave : 3,
	spellcastingAbility : 3,
	spellcastingBonus : {
		name : "Reach to the Blaze (level 1)",
		spells : ["produce flame"],
		selection : ["produce flame"],
		atwill : true
	},
	features : {
		"burning hands" : {
			name : "Burning Hands",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Reach to the Blaze)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Reach to the Blaze (level 3)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				oncelr : true
			}
		}
	}
};
RaceList["water genasi"] = {
	regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bwaters?\b).*$/i,
	name : "Water genasi",
	sortname : "Genasi, Water",
	source : ["E", 10],
	plural : "Water genasi",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Primordial"],
	dmgres : ["Acid"],
	age : " reach adulthood in their late teens and live up to 120 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Water Genasi: +2 Constitution, +1 Wisdom;",
	scores : [0, 0, 2, 0, 1, 0],
	trait : "Water Genasi (+2 Constitution, +1 Wisdom)\nAmphibious: I can breathe air and water.\nSwim: I have a swimming speed of 30 feet.\nCall to the Wave: I know the Shape Water cantrip.\n   When I reach 3rd level, I can cast the Create or Destroy Water spell as a 2nd-level spell once with this trait, and I regain the ability to cast it this way when I finish a long rest.\n   Constitution is my spellcasting ability for these spells.",
	spellcastingAbility : 3,
	spellcastingBonus : {
		name : "Call to the Wave (level 1)",
		spells : ["shape water"],
		selection : ["shape water"],
		atwill : true
	},
	features : {
		"create or destroy water" : {
			name : "Create/Destroy Water (level 2)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Call to the Wave)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Call to the Wave (level 3)",
				spells : ["create or destroy water"],
				selection : ["create or destroy water"],
				oncelr : true
			}
		}
	}
};
RaceList["goliath"] = {
	regExpSearch : /goliath/i,
	name : "Goliath",
	source : [["E", 11], ["V", 108]],
	plural : "Goliaths",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Giant"],
	skills : ["Athletics"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " are between 6 and a half and 8 feet tall (6'2\" + 2d10\")",
	weight : " weigh between 280 and 340 lb (200 + 2d10 \xD7 2d6 lb)",
	heightMetric : " are between 2 and 2,4 metres tall (190 + 5d10 cm)",
	weightMetric : " weigh between 100 and 155 kg (90 + 5d10 \xD7 4d6 / 10 kg)",
	improvements : "Goliath: +2 Strength, +1 Constitution;",
	scores : [2, 0, 1, 0, 0, 0],
	features : {
		"stone's endurance" : {
			name : "Stone's Endurance",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["reaction", ""]
		}
	},
	trait : "Goliath (+2 Strength, +1 Constitution)" + (typePF ? "\n" : "") + "\nStone's Endurance: Once per short rest, when I take damage, I can use my reaction to reduce the damage by 1d12 + my Con" + (typePF ? "" : "stitution") + " modifier." + (typePF ? "\n" : "") + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + (typePF ? "\n" : "") + "\nMountain Born: I'm acclimated to high altitude, including elevations above 20000 feet. I'm also naturally adapted to cold climates.",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};

// Feat
FeatsList["svirfneblin magic"] = {
	name : "Svirfneblin Magic",
	source : [["E", 7], ["S", 115]],
	prerequisite : "Being a Svirfneblin (Deep Gnome)",
	prereqeval : "CurrentRace.known === 'deep gnome'",
	description : "I can cast Nondetection on myself at will, without a material component. I can also cast the spells Blindness/Deafness, Blur, and Disguise Self once each. I regain the ability to cast these spells when I finish a long rest. Intelligence is my spellcasting ability for these spells.",
	spellcastingBonus : [{
		name : "at will (self only)",
		spellcastingAbility : 4,
		spells : ["nondetection"],
		selection : ["nondetection"],
		atwill : true
	}, {
		name : "1x long rest (self only)",
		spells : ["blindness/deafness", "blur", "disguise self"],
		selection : ["blindness/deafness", "blur", "disguise self"],
		oncelr : true,
		times : 3
	}]
};

// Spells
SpellsList["abi-dalzim's horrid wilting"] = {
	name : "Abi-Dalzim's Horrid Wilting",
	nameShort : "Abi-D's Horrid Wilting",
	nameAlt : "Horrid Wilting",
	classes : ["sorcerer", "wizard"],
	source : [["X", 150], ["E", 15]],
	level : 8,
	school : "Necro",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "A bit of sponge",
	duration : "Instantaneous",
	save : "Con",
	description : "30-ft cube all crea 12d8 Necrotic dmg; save halves; plants/water elem. dis. const/undead immune",
	descriptionFull : "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one." + "\n   " + "Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly."
};
SpellsList["absorb elements"] = {
	name : "Absorb Elements",
	classes : ["druid", "ranger", "sorcerer", "wizard"],
	source : [["X", 150], ["E", 15]],
	level : 1,
	school : "Abjur",
	time : "1 rea",
	range : "Self",
	components : "S",
	duration : "1 rnd",
	description : "Acid, Cold, Fire, Lightning, or Thunder resistance vs. 1 atk; first melee hit next rnd +1d6+1d6/SL dmg",
	descriptionFull : "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."
};
SpellsList["aganazzar's scorcher"] = {
	name : "Aganazzar's Scorcher",
	nameAlt : "Scorch", //as per the Spell Compandium's (DnD 3.5e) alternative name
	classes : ["sorcerer", "wizard"],
	source : [["X", 150], ["E", 15]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "30-ft line",
	components : "V,S,M",
	compMaterial : "A red dragon's scale",
	duration : "Instantaneous",
	save : "Dex",
	description : "30-ft long 5-ft wide line all creatures 3d8+1d8/SL Fire dmg; save halves",
	descriptionFull : "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
};
SpellsList["beast bond"] = {
	name : "Beast Bond",
	classes : ["druid", "ranger"],
	source : [["X", 150], ["E", 15]],
	level : 1,
	school : "Div",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A bit of fur wrapped in a cloth",
	duration : "Conc, 10 min",
	description : "Telepathic link with 1 beast Int<4 while in line of sight; beast has adv. on attacks vs. crea you can see",
	descriptionFull : "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see."
};
SpellsList["bones of the earth"] = {
	name : "Bones of the Earth",
	classes : ["druid"],
	source : [["X", 150], ["E", 15]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "6+2/SL 2.5-ft rad ground burst up 30-ft, \u2265 Med. creas save or lifted, 6d6 bludg. dmg if ceiling; see B",
	descriptionFull : "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot-diameter portion of the area requires at least 1 minute to clear by hand." + "\n   " + "If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save." + "\n   " + "If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature's choice) against the spell's save DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, you can create."
};
SpellsList["catapult"] = {
	name : "Catapult",
	classes : ["sorcerer", "wizard"],
	source : [["X", 150], ["E", 15]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Dex",
	description : "Send 5+5/SL lb unattended object in 90 ft straight line; if hits crea, save or 3d8+1d8/SL Bludg. dmg",
	descriptionFull : "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage."
};
SpellsList["control flames"] = {
	name : "Control Flames",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 152], ["E", 16]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Instant. or 1 h",
	description : "Nonmagical flame up to 5 cu ft; instant: expand/exinguish, 1h: brighten/dim/color/create shapes",
	descriptionFull : "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways." + "\n \u2022 " + "You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location." + "\n \u2022 " + "You instantaneously extinguish the flames within the cube." + "\n \u2022 " + "You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour." + "\n \u2022 " + "You cause simple shapes-such as the vague form of a creature, an inanimate object, or a location-to appear within the flames and animate as you like. The shapes last for 1 hour." + "\n   " + "If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
};
SpellsList["control winds"] = {
	name : "Control Winds",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 152], ["E", 16]],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "300 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "100-ft cube of air either gusts, downdraft, or updraft; affects flying/jump/ranged; 1 a change; see B",
	descriptionFull : "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted." + "\n   " + toUni("Gusts") + ": A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved." + "\n   " + toUni("Downdraft") + ": You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone." + "\n   " + toUni("Updraft") + ": You cause a sustained updraft within the cube, rising upward from the cube's bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal."
};
SpellsList["create bonfire"] = {
	name : "Create Bonfire",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 152], ["E", 16]],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "5-ft cube all crea at casting or entering save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionFull : "You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there." + "\n   " + "The bonfire ignites flammable objects in its area that aren't being worn or carried." + "\n   " + "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
SpellsList["dust devil"] = {
	name : "Dust Devil",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 154], ["E", 17]],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A pinch of dust",
	duration : "Conc, 1 min",
	save : "Str",
	description : "5-ft cube; all in 5-ft 1d8+1d8/SL Bludg. dmg and pushed 10 ft away; save halves, no push; see book",
	descriptionFull : "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration." + "\n   " + "Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away from the dust devil. On a successful save, the creature takes half as much damage and isn't pushed." + "\n   " + "As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
};
SpellsList["earthbind"] = {
	name : "Earthbind",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 154], ["E", 17]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "300 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Str",
	description : "1 creatures save or fly speed is reduced to 0; airborne creatures safely descend at 60 ft per round",
	descriptionFull : "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends."
};
SpellsList["earth tremor"] = {
	name : "Earth Tremor",
	classes : ["bard", "druid", "sorcerer", "wizard"],
	source : [["X", 155], ["E", 17]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "10 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "All crea in range except you save or 1d6+1d6/SL Bludgeoning dmg and prone; loose ground is dif. ter.",
	descriptionFull : "You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["elemental bane"] = {
	name : "Elemental Bane",
	classes : ["druid", "warlock", "wizard"],
	source : [["X", 155], ["E", 17]],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "1+1/SL crea in 30 ft save or first attack each rnd of chosen energy does +2d6 dmg; no resistance",
	descriptionFull : "Choose one creature you can see within range, and choose one of the following damage types - acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["erupting earth"] = {
	name : "Erupting Earth",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 155], ["E", 17]],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A piece of obsidian",
	duration : "Instantaneous",
	save : "Dex",
	description : "20-ft cube all crea 3d12+1d12/SL Bludgeoning dmg; save halves; area becomes difficult terrain",
	descriptionFull : "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd."
};
SpellsList["flame arrows"] = {
	name : "Flame Arrows",
	classes : ["druid", "ranger", "sorcerer", "wizard"],
	source : [["X", 156], ["E", 18]],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "12+2/SL ammunition drawn from touched quiver do +1d6 Fire damage on a successful hit",
	descriptionFull : "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd."
};
SpellsList["frostbite"] = {
	name : "Frostbite",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 156], ["E", 18]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea save or 1d6 Cold dmg and dis. on next weapon attack roll; +1d6 at CL 5, 11, and 17",
	descriptionFull : "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["gust"] = {
	name : "Gust",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 157], ["E", 19]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	description : "Med. or smaller crea save or push 5 ft; or push unattended 5 lb obj 10 ft; or harmless sensory effect",
	descriptionFull : "You seize the air and compel it to create one of the following effects at a point you can see within range." + "\n " + "\u2022 One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you." + "\n " + "\u2022 You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage." + "\n " + "\u2022 You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze."
};
SpellsList["ice knife"] = {
	name : "Ice Knife",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 157], ["E", 19]],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "S,M",
	compMaterial : "A drop of water or piece of ice",
	duration : "Instantaneous",
	save : "Dex",
	description : "Ranged atk for 1d10 Piercing dmg; hit/miss 5-ft rad on target all crea save or 2d6+1d6/SL Cold dmg",
	descriptionFull : "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 cold damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st."
};
SpellsList["immolation"] = {
	name : "Immolation",
	classes : ["sorcerer", "wizard"],
	source : [["X", 158], ["E", 19]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 crea save or 8d6 Fire dmg and burns for 4d6 Fire dmg/rnd; save each rnd to end; half dmg on save",
	descriptionFull : "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished by nonmagical means." + "\n   " + "If damage from this spell kills a target, the target is turned to ash."
};
SpellsList["investiture of flame"] = {
	name : "Investiture of Flame",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 159], ["E", 19]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Dex",
	description : "Fire immune; Cold res.; 1d10 Fire dmg in 5 ft; 1 a 15-ft long 5-ft wide all crea 4d8 Fire dmg, save half",
	descriptionFull : "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits." + "\n " + "\u2022 You are immune to fire damage and have resistance to cold damage." + "\n " + "\u2022 Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage." + "\n " + "\u2022 You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one."
};
SpellsList["investiture of ice"] = {
	name : "Investiture of Ice",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 159], ["E", 19]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Con",
	description : "Cold immune; Fire resist; 10-ft rad dif. ter.; 1 a 15-ft cone all crea 4d6 Cold dmg, half speed, save half",
	descriptionFull : "Until the spell ends, ice rimes your body, and you gain the following benefits." + "\n " + "\u2022 You are immune to cold damage and have resistance to fire damage." + "\n " + "\u2022 You can move across difficult terrain created by ice or snow without spending extra movement." + "\n " + "\u2022 The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you." + "\n " + "\u2022 You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn."
};
SpellsList["investiture of stone"] = {
	name : "Investiture of Stone",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 159], ["E", 19]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Dex",
	description : "Nonmagical Bludg/Pierc/Slash resist.; 1 a 15-ft rad all crea save or prone; move through earth/stone",
	descriptionFull : "Until the spell ends, bits of rock spread across your body, and you gain the following benefits:" + "\n \u2022 " + "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks." + "\n \u2022 " + "You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone." + "\n \u2022 " + "You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn."
};
SpellsList["investiture of wind"] = {
	name : "Investiture of Wind",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 160], ["E", 20]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Con",
	description : "Rngd wea atks dis. vs. you; fly 60 ft; 1 a 15-ft cube in 60 ft all 2d10 Bludg. dmg, push 10 ft, save half",
	descriptionFull : "Until the spell ends, wind whirls around you, and you gain the following benefits." + "\n " + "\u2022 Ranged weapon attacks made against you have disadvantage on the attack roll." + "\n " + "\u2022 You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it." + "\n " + "\u2022 You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube."
};
SpellsList["maelstrom"] = {
	name : "Maelstrom",
	classes : ["druid"],
	source : [["X", 160], ["E", 20]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "Paper or leaf in the shape of a funnel",
	duration : "Conc, 1 min",
	save : "Str",
	description : "5-ft deep 30-ft rad dif. ter.; all crea starting turn in save or 6d6 Bludg. dmg and pulled 10 ft to center",
	descriptionFull : "A mass of 5-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center."
};
SpellsList["magic stone"] = {
	name : "Magic Stone",
	classes : ["druid", "warlock"],
	source : [["X", 160], ["E", 20]],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "1 min",
	description : "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do 1d6+spellcasting mod Bludg. dmg",
	descriptionFull : "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone." + "\n   " + "If you cast this spell again, the spell ends early on any pebbles still affected by it."
};
SpellsList["maximilian's earthen grasp"] = {
	name : "Maximilian's Earthen Grasp",
	nameShort : "Max's Earthen Grasp",
	nameAlt : "Earthen Grasp",
	classes : ["sorcerer", "wizard"],
	source : [["X", 161], ["E", 20]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A miniature hand sculpted from clay",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Medium hand atks 1 crea: save or 2d6 Bludg. dmg \u0026 restrained; 1 a hand moves/atks, releases; see B",
	descriptionFull : "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell's duration." + "\n   " + "As an action, you can cause the hand to crush the restrained target, which must make a Strength saving throw. The target takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one." + "\n   " + "To break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand." + "\n   " + "As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either."
};
SpellsList["melf's minute meteors"] = {
	name : "Melf's Minute Meteors",
	nameAlt : "Minute Meteors",
	classes : ["sorcerer", "wizard"],
	source : [["X", 161], ["E", 20]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Niter, sulfur, and pine tar formed into a bead",
	duration : "Conc, 10 min",
	save : "Dex",
	description : "6+2/SL meteors; at casting/bns a send up to two 120 ft for 5-ft rad all crea 2d6 Fire dmg; save half",
	descriptionFull : "You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell-and as a bonus action on each of your turns thereafter-you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd."
};
SpellsList["mold earth"] = {
	name : "Mold Earth",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 162], ["E", 21]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "S",
	duration : "Instant. or 1 h",
	description : "5 cu ft earth; instant.: excavate; 1h: change to difficult or normal terrain, or change shape and color",
	descriptionFull : "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways." + "\n " + "\u2022 If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage." + "\n " + "\u2022 You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour." + "\n " + "\u2022 If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour." + "\n\n" + "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
};
SpellsList["primordial ward"] = {
	name : "Primordial Ward",
	classes : ["druid"],
	source : [["X", 163], ["E", 21]],
	level : 6,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Acid, Cold, Fire, Lightning, and Thunder resistance; use rea to gain 1 immunity for 1 rnd, spell ends",
	descriptionFull : "You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration." + "\n   " + "When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends."
};
SpellsList["pyrotechnics"] = {
	name : "Pyrotechnics",
	classes : ["bard", "sorcerer", "wizard"],
	source : [["X", 163], ["E", 21]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "5 cu ft nonma. flame extinguish, or 10-ft rad all crea save or blind 1 rnd, or 20-ft rad hvy obsc. 1 min",
	descriptionFull : "Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so." + "\n   " + toUni("Fireworks") + ": The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn." + "\n   " + toUni("Smoke") + ": Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it."
};
SpellsList["shape water"] = {
	name : "Shape Water",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 164], ["E", 21]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "S",
	duration : "Instant. or 1 h",
	description : "5 cu ft water; instant: move/change flow; 1h: simple shapes/change color or opacity/freeze",
	descriptionFull : "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways." + "\n " + "\u2022 You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage." + "\n " + "\u2022 You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour." + "\n " + "\u2022 You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour." + "\n " + "\u2022 You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour." + "\n\n" + "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
};
SpellsList["skywrite"] = {
	name : "Skywrite",
	classes : ["bard", "druid", "wizard"],
	source : [["X", 165], ["E", 22]],
	ritual : true,
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Sight",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "Write up to 10 words with clouds in a part of the sky you can see; strong wind can diperse the clouds",
	descriptionFull : "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early."
};
SpellsList["snilloc's snowball swarm"] = {
	name : "Snilloc's Snowball Swarm",
	nameAlt : "Snowball Swarm",
	classes : ["sorcerer", "wizard"],
	source : [["X", 165], ["E", 22]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "A piece of ice or a small white rock chip",
	duration : "Instantaneous",
	save : "Dex",
	description : "5-ft radius all creatures 3d6+1d6/SL Cold damage; save halves",
	descriptionFull : "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["storm sphere"] = {
	name : "Storm Sphere",
	classes : ["sorcerer", "wizard"],
	source : [["X", 166], ["E", 22]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	description : "20-ft rad dif. ter.; all crea + end turn save or 2d6+1d6/SL Bludg.; bns a 60 ft spell atk 4d6 Lightning",
	descriptionFull : "A 20-foot-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain." + "\n   " + "Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage." + "\n   " + "Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th."
};
SpellsList["thunderclap"] = {
	name : "Thunderclap",
	classes : ["bard", "druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 168], ["E", 22]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Con",
	description : "100-ft rad audible; all crea but you in area save or 1d6 Thunder dmg; +1d6 at CL 5, 11, and 17",
	descriptionFull : "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must succeed on a Constitution saving throw or take 1d6 thunder damage." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["tidal wave"] = {
	name : "Tidal Wave",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 168], ["E", 22]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A drop of water",
	duration : "Instantaneous",
	save : "Dex",
	description : "30-ft x 10-ft, 10-ft high all crea 4d8 Bludg. dmg and prone; save halves not prone; extinguish flames",
	descriptionFull : "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes."
};
SpellsList["transmute rock"] = {
	name : "Transmute Rock",
	classes : ["druid", "wizard"],
	source : [["X", 169], ["E", 22]],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "Clay and water",
	duration : "Until dispelled",
	description : "40 cu ft stone to mud or mud to stone; mud and stone restrains; mud from ceiling falls; see book",
	descriptionFull : "You choose an area of stone or mud that you can see that fits within a 40-foot cube and is within range, and choose one of the following effects." + "\n   " + toUni("Transmute Rock to Mud") + ": Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell's duration." + "\n   " + "The ground in the spell's area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud." + "\n   " + "If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one." + "\n   " + toUni("Transmute Mud to Rock") + ": Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes restrained by the rock. A restrained creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and it is immune to poison and psychic damage."
};
SpellsList["vitriolic sphere"] = {
	name : "Vitriolic Sphere",
	classes : ["sorcerer", "wizard"],
	source : [["X", 170], ["E", 23]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "A drop of giant slug bile",
	duration : "Instantaneous",
	save : "Dex",
	description : "20-ft rad all crea 10d4+2d4/SL now and 5d4 Acid dmg at end next turn; save half \u0026 no dmg next rnd",
	descriptionFull : "You point at a location within range, and a glowing, 1-foot-diameter ball of emerald acid streaks there and explodes in a 20-foot-radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and another 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th."
};
SpellsList["wall of sand"] = {
	name : "Wall of Sand",
	classes : ["wizard"],
	source : [["X", 170], ["E", 23]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "A handful of sand",
	duration : "Conc, 10 min",
	description : "30\u00D710\u00D710ft (l\u00D7w\u00D7h) wall on the ground; blocks line of sight; blinded while inside; 1/3 move",
	descriptionMetric : "9\u00D73\u00D73m (l\u00D7w\u00D7h) wall on the ground; blocks line of sight; blinded while inside; 1/3 move",
	descriptionFull : "You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there."
};
SpellsList["wall of water"] = {
	name : "Wall of Water",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 170], ["E", 23]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A drop of water",
	duration : "Conc, 10 min",
	description : "30\u00D71\u00D710ft (l\u00D7w\u00D7h) or 20-ft rad 20-ft high; dif. ter.; range wea dis.; Fire dmg half; Cold dmg freezes",
	descriptionMetric : "9\u00D70,3\u00D73m (l\u00D7w\u00D7h) or 6-m rad 6-m high; dif. ter.; ranged wea dis.; Fire dmg half; Cold dmg freezes",
	descriptionFull : "You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain." + "\n   " + "Any ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall's water doesn't fill it."
};
SpellsList["warding wind"] = {
	name : "Warding Wind",
	classes : ["bard", "druid", "sorcerer", "wizard"],
	source : [["X", 170], ["E", 23]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "10-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	description : "Strong (20 mph) wind in area deafens/extinguishes unprotected flames/dif. ter./ranged wea have dis",
	descriptionFull : "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration." + "\n   " + "The wind has the following effects." + "\n " + "\u2022 It deafens you and other creatures in its area." + "\n " + "\u2022 It extinguishes unprotected flames in its area that are torch-sized or smaller." + "\n " + "\u2022 The area is difficult terrain for creatures other than you." + "\n " + "\u2022 The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind." + "\n " + "\u2022 It hedges out vapor, gas, and fog that can be dispersed by strong wind."
};
SpellsList["watery sphere"] = {
	name : "Watery Sphere",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 170], ["E", 23]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "A droplet of water",
	duration : "Conc, 1 min",
	save : "Str",
	description : "5-ft rad all crea < Huge save or restrained; on save ejected; save each rnd; 1 a move sphere 30 ft",
	descriptionFull : "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration." + "\n   " + "Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success." + "\n   " + "The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it." + "\n   " + "As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw." + "\n   " + "When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes."
};
SpellsList["whirlwind"] = {
	name : "Whirlwind",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 171], ["E", 24]],
	level : 7,
	school : "Evoc",
	time : "1 a",
	range : "300 ft",
	components : "V,M",
	compMaterial : "A piece of straw",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "10-ft rad 30-ft high all crea 10d6 Bludg. dmg; save halves; restrains; 1 a move 30 ft; see book",
	descriptionFull : "A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone." + "\n   " + "A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft." + "\n   " + "A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 \u00D7 10 feet away from it in a random direction."
};

// Weapons (attack cantrips)
WeaponsList["create bonfire"] = {
	regExpSearch : /^(?=.*create)(?=.*bonfire).*$/i,
	name : "Create Bonfire",
	source : [["X", 152], ["E", 16]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "fire"],
	range : "60 ft",
	description : "5-ft cube; Dex save at casting or when moved into, success - no damage; Conc, 1 min (EE 16)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["frostbite"] = {
	regExpSearch : /frostbite/i,
	name : "Frostbite",
	source : [["X", 156], ["E", 18]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "cold"],
	range : "60 ft",
	description : "Con save, success - no damage, fail - also disadv. on next weapon attack roll in next turn; 1 creature (EE 18)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["magic stone"] = {
	regExpSearch : /^(?=.*magic)(?=.*stone).*$/i,
	name : "Magic Stone",
	source : [["X", 160], ["E", 20]],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : [1, 6, "bludgeoning"],
	range : "60/120 ft",
	description : "Produces 3 stones that each can be thrown (60 ft) or hurled with a sling (120 ft) as a spell attack (EE 20)",
	abilitytodamage : true
};
WeaponsList["thunderclap"] = {
	regExpSearch : /thunderclap/i,
	name : "Thunderclap",
	source : [["X", 168], ["E", 22]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "thunder"],
	range : "5-ft radius",
	description : "Con save, success - no damage; all creatures in area; audible in 100 ft (EE 22)",
	abilitytodamage : false,
	dc : true
};
var iFileName = "pub_20150714_AL-RoD.js";
RequiredSheetVersion(12.999);
// This file adds the optional backgrounds from the Adventurers League season 3 (Rage of Demons) to MPMB's Character Record Sheet

// Define the source
SourceList["AL:RoD"]={
	name : "Rage of Demons Backgrounds [Hillsfar]",
	abbreviation : "AL:RoD",
	group : "Adventurers League",
	url : "https://dndadventurersleague.org/wp-content/uploads/2015/07/Hillsfar-Regional-Character-Options.pdf",
	date : "2015/07/14"
};

// Backgrounds (with contributions by AggieBear)
BackgroundList["cormanthor refugee"] = {
	regExpSearch :  /^(?=.*cormanthor)(?=.*refugee).*$/i,
	name : "Cormanthor Refugee",
	source : ["AL:RoD", 5],
	skills : ["Nature", "Survival"],
	gold : 5,
	equipleft : [
		["Two-person tent", "", 20],
		["Set of artisan's tools", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Holy symbol (type)", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Shelter of the Elven Clergy",
	trait : [
		"I long for a home that never really existed, whether in the camps, Hillsfar, or Myth Drannor.",
		"Though I am not an elf, I am a fervent, radical worshipper of the elven gods.",
		"I live in the moment, knowing my life could be turned upside down any day.",
		"I appreciate beauty in all of its forms.",
		"I hate the dark elves and the Netherese for each driving the elves out of Cormanthyr in the past.",
		"I am a forest bumpkin who grew up in a tent in the woods and is wholly ignorant of city life.",
		"I was raised alongside children of many other races. I harbor no racial prejudices at all.",
		"The elves have just the right word for so many things that cannot be expressed as well in other languages. I pepper my speech with elven words, phrases, and sayings."
	],
	ideal : [
		["Patient",
			"Patient: The elves have taught me to think and plan for the long-term. (Lawful)"
		],
		["Rebellious",
			"Rebellious: Governments and politicians drove my family to the camps. I subtly defy authority whenever I think I can get away with it. (Chaotic)"
		],
		["Self-Absorbed",
			"Self-Absorbed: I've had to look out for number one so long that it has become second nature. (Any)"
		],
		["Wanderlust",
			"Wanderlust: I want to see as much of the world beyond the camps as I can. (Any)"
		],
		["Generous",
			"Generous: I give everything I can to help those in need, regardless of who they are. (Good)"
		],
		["To the Abyss with Them",
			"To the Abyss with Them: The people of Hillsfar cast me out. I won't risk my hide to help them. (Evil)"
		]
	],
	bond : [
		"The elves took me in when I had nowhere else to go. In return, I do what I can to help elves in need.",
		"I seek revenge against the people of Hillsfar for driving my family into the forest.",
		"My family lost everything when they were driven from Hillsfar. I strive to rebuild that fortune.",
		"The forest has provided me with food and shelter. In return, I protect forests and those who dwell within.",
		"I am deeply, tragically in love with someone whose racial lifespan is far longer or shorter than mine.",
		"Members of my extended family did not make it to the camps or have been kidnapped to fight in the Arena. I search for them tirelessly."
	],
	flaw : [
		"I am very uncomfortable indoors and underground",
		"I am haughty. I grew up among the elves and emulate them. Other races are crude in comparison.",
		"Elf this, elf that. I am sick and tired of the elves.",
		"I am a miser. Having lost everything once before, I clutch my possessions and wealth very tightly.",
		"I am a moocher. I am so used to others providing for me that I have come to expect everyone to do it.",
		"I believe the gods have cursed me, my family, and all of the Cormanthor refugees. We are all doomed, doomed I tell you!"
	],
	toolProfs : [["Artisan's tools", 1]],
	languageProfs : ["Elvish"],
	lifestyle : "poor"
};
BackgroundList["gate urchin"] = {
	regExpSearch :  /^(?=.*gate)(?=.*urchin).*$/i,
	name : "Gate Urchin",
	source : ["AL:RoD", 6],
	skills : ["Deception", "Sleight of Hand"],
	gold : 10,
	equipleft : [
		["Battered alms box", "", 1]
	],
	equipright : [
		["Common clothes", "", 3],
		["Cast-off military jacket, cap, or scarf", "", ""],
		["Belt pouch (with coins)", "", 1],
		["Musical instrument of my choice", "", ""]
	],
	feature : "Red Plume and Mage Guild Contacts",
	trait : [
		"I appreciate the simple things in life: a song, a warm meal, a sunny day. I don't need any more.",
		"My problems are always caused by others. I'm never to blame.",
		"I am afraid I could wind up back on the streets any day.",
		"I get along with everyone.",
		"I see people as marks for a con and have difficulty feeling true empathy for them.",
		"I have a real flair for matchmaking. I can find anyone a spouse!",
		"I think money is the true measure of appreciation and affection. Everything else is talk or an act.",
		"I don't like having a lot of stuff, just a few simple things I need. I don't like being tied down and tend to leave things behind when I don't need them anymore."
	],
	ideal : [
		["Loyal",
			"Loyal: I never rat out any of my friends, even when the Red Plumes or the Rogues Guild ask. (Lawful)"
		],
		["Adventurous",
			"Adventurous: I don't like doing the same thing every day. I crave variety. (Chaotic)"
		],
		["Strong",
			"Strong: Only the strong survive. I respect those who are strong and powerful. (Any)"
		],
		["Witty",
			"Witty: Brains are better than brawn. I rely on my wits and respect others who do the same. (Any)"
		],
		["Honest",
			"Honest: Others can do what they want, but I won't lie or steal, even to feed my family. (Good)"
		],
		["Ungrateful",
			"Ungrateful: Those who give, only do it to make themselves feel better. I steal from them. (Evil)"
		]
	],
	bond : [
		"The Joydancers of Lliira gave me my instrument when I really needed food. I hate them for that.",
		"Busking has taught me to love music above all else.",
		"The Rogues Guild spared me when I did a job without cutting them in. I owe them a great debt.",
		"I know people hate the Red Plumes, but some of them were really good to me. I help Red Plumes whenever I can, and I respect them. They're just doing what they have to do to get by in this world.",
		"I will be wealthy some day. My descendants will live in comfort and style.",
		"I know how hard life on the streets is. I do everything I can for those who have less than me."
	],
	flaw : [
		"Though I no longer live at the Gate, I am still always concerned about where I will get my next meal.",
		"Years of thieving have become habit. I sometimes steal from strangers without thinking about it.",
		"I am ashamed of my origins. I pretend I am higher-born and fear others will find out the truth.",
		"I think people who grew up in houses are soft, spoiled, and ungrateful. I frequently tell them so.",
		"I am still very uncomfortable wearing nice clothes, sleeping in a warm bed, and eating fine food.",
		"I do not trust anyone who has not had a hard life."
	],
	toolProfs : [["Thieves' tools", "Dex"], ["Musical instrument", 1]],
	lifestyle : "poor"
};
BackgroundList["hillsfar merchant"] = {
	regExpSearch :  /^(?=.*hillsfar)(?=.*merchant).*$/i,
	name : "Hillsfar Merchant",
	source : ["AL:RoD", 7],
	skills : ["Insight", "Persuasion"],
	gold : 25,
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Purse (with coins)", "", 1],
		["Letter of introduction from family's trading house", "", 1]
	],
	feature : "Factor",
	featureAlt : "Trade Contact",
	trait : [
		"I fill my evenings with wine or mead and song.",
		"I greatly admire gladiators and enjoy the Arena.",
		"I take my wealth for granted. It seldom occurs to me that others aren't rich themselves.",
		"I leave broken hearts all around the Moonsea and up and down the Sword Coast.",
		"I work hard and seldom make time for fun.",
		"I am a particularly devout and pray often.",
		"The Red Plumes caught me once. I hate them.",
		"I ask a lot of questions to get information about those with whom I am working and dealing."
	],
	ideal : [
		["Frugal",
			"Frugal: I spend my money very carefully. (Lawful)"
		],
		["Profligate",
			"Profligate: I tend to spend extravagantly. (Chaotic)"
		],
		["Honest",
			"Honest: I deal with others above board. (Any)"
		],
		["Sharp",
			"Sharp: I seek to make the best deal possible. (Any)"
		],
		["Charitable",
			"Charitable: I give generously to others. (Good)"
		],
		["Greedy",
			"Greedy: I do not share my wealth with others. (Evil)"
		]
	],
	bond : [
		"I am fiercely loyal to those with whom I work.",
		"I must uphold the good name of my family.",
		"I will prove myself to my family as an adventurer.",
		"Deals are sacrosanct. I never go back on my word.",
		"I love making deals and negotiating agreements.",
		"I guard my wealth jealously."
	],
	flaw : [
		"I am a braggart. I promote myself shamelessly.",
		"I am vain. I always wear the latest fashions.",
		"I am a glutton. I eat and drink to excess.",
		"I am a snob. I want only the finest things in life.",
		"I am lazy. I want others to take care of everything.",
		"I am overconfident. I overestimate my abilities."
	],
	toolProfs : ["Vehicles (land)", "Vehicles (water)"],
	lifestyle : "wealthy"
};
BackgroundList["hillsfar smuggler"] = {
	regExpSearch :  /^(?=.*hillsfar)(?=.*smuggler).*$/i,
	name : "Hillsfar Smuggler",
	source : ["AL:RoD", 8],
	skills : ["Perception", "Stealth"],
	gold : 5,
	equipleft : [
		["Forgery kit", "", 5]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Secret Passage",
	trait : [
		"When I'm not smuggling, I gamble.",
		"I just love Halfling cooking and baking!",
		"I party with dwarves whenever I can.",
		"I'm a terrible singer, but I love to do it.",
		"I was raised to honor Chauntea and still do.",
		"The blood sports of the Arena sicken me.",
		"I think non-humans are really interesting.",
		"I exaggerate the tales of my exploits."
	],
	ideal : [
		["Fair",
			"Fair: I think everyone deserves to be treated fairly. I don't play favorites. (Lawful)"
		],
		["Impulsive",
			"Impulsive: Planning is often a waste of time. No plan survives contact with reality. It's easier to dive in and deal with the consequences. (Chaotic)"
		],
		["Curious",
			"Curious: I want to learn as much as I can about the people and places I encounter. (Any)"
		],
		["Prepared",
			"Prepared: I think success depends on preparing as much as possible in advance. (Any)"
		],
		["Respectful",
			"Respectful: I think everyone deserves to be treated with respect and dignity, regardless of their race, creed, color, or origin. (Good)"
		],
		["Corrupt",
			"Corrupt: I will break the law or act dishonestly if the money is right. (Evil)"
		]
	],
	bond : [
		"I am loyal to the Rogues Guild and would do anything for them.",
		"I love the city of Hillsfar and my fellow Hillsfarians, despite the recent problems.",
		"I admire the elves. I help them whenever I can.",
		"A gnome helped me once. I pay the favor forward.",
		"I enjoy tricking the Red Plumes at every opportunity.",
		"I smuggled agricultural goods for non-human farmers. I try to help them when I can."
	],
	flaw : [
		"My hatred for the Red Plumes burns so brightly that I have difficulty suppressing It around them.",
		"The Red Plumes caught me once before, and I was branded for my crime. If they catch me again, for any offense, the punishment will be dire..",
		"I treat all Hillsfarans poorly. I am disgusted with their failure to revolt against the Great Law of Humanity.",
		"I have difficulty trusting strangers. Anyone could be a spy for the authorities.",
		"I am greedy. There Isn't much I won't do for money.",
		"I'm an informant for the Red Plumes. They let me continue my activities, so long as I pass them information about illegal activity in Hillsfar."
	],
	toolProfs : ["Forgery kit"],
	languageProfs : [1],
	lifestyle : "modest"
};
BackgroundList["secret identity"] = {
	regExpSearch : /^(?=.*secret)(?=.*identity).*$/i,
	name : "Secret Identity",
	source : ["AL:RoD", 9],
	skills : ["Deception", "Stealth"],
	gold : 5,
	equipleft : [
		["Disguise kit", "", 3],
		["Forgery kit", "", 5]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Secret Identity",
	trait : [
		"Despite its problems, I love Hillsfar, it's the greatest city in the world. The only one for me.",
		"I move from place to place, never staying anywhere long and leaving nothing behind.",
		"I think flattery is the best way to direct attention away from me.",
		"I don't make friends easily. They're a liability I cannot afford.",
		"Risk and danger are exhilarate me. Pulling off schemes and deceptions is a rush.",
		"The First Lord is right, humans are superior. I really admire them, despite the atrocities.",
		"I avoid people of my own race, as well as things associated with my race, lest they give me away.",
		"I live for the Arena. I admire gladiators and enjoy the thrill of blood on the sands!"
	],
	ideal : [
		["Quisling",
			"Quisling: Supporting the rulers of the land and following the laws is the road to salvation. (Lawful)"
		],
		["Scoflaw",
			"Scoflaw: The laws and lawmakers are corrupt. I follow laws only when it suits me. (Chaotic))"
		],
		["Optimist",
			"Optimist: Everyone Is basically good. Though the government is misguided it will all be okay. (Any)"
		],
		["Secretive",
			"Secretive: I am in the habit of not talking about myself. My business is none of yours. (Any)"
		],
		["Heroic",
			"Heroic: I do everything I can to help non-humans, regardless of the personal cost to me. (Good)"
		],
		["Depraved",
			"Depraved: I have lost my moral compass. The ends justify most any means. (Evil)"
		]
	],
	bond : [
		"The humans of Hillsfar have inflicted terrible harm on me, my family, and my race. I will have revenge.",
		"I am part of an underground network that smuggles non-humans into and out of the city.",
		"I am a partisan. I commit minor acts of defiance against the First Lord and Red Plumes when I can.",
		"I am a spy. I report on events in and around Hillfar.",
		"My secret identity is the only thing protecting me from the Arena. I will stop at nothing to maintain it.",
		"I am madly in love with a human who does not know my true identity, and I fear rejection if I reveal it."
	],
	flaw : [
		"After years of denying who I am, I now despise myself and other members of my pathetic race.",
		"Years of hiding have made me somewhat paranoid. I trust no one.",
		"I've been lying so often and for so long that I can't help it anymore. I frequently lie for no reason at all.",
		"I am ashamed. I failed to protect a member of my family who was seized and thrown into the Area.",
		"I am struggling with maintaining my secret identity. I subconsciously want to get caught and therefore sometimes let my secret identity slip.",
		"Years of successfully deceiving others have made me cocky. I think no one can see through my lies."
	],
	toolProfs : ["Disguise kit", "Forgery kit"],
	lifestyle : "modest"
};
BackgroundList["shade fanatic"] = {
	regExpSearch : /^(?=.*shade)(?=.*fanatic).*$/i,
	name : "Shade Fanatic",
	source : ["AL:RoD", 10],
	skills : ["Deception", "Intimidation"],
	gold : 15,
	equipleft : [
		["Forgery kit", "", 5],
		["Transparent shadow cylinder", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Secret Society",
	trait : [
		"I am a bully; I try to hide it though.",
		"I let my actions speak for themselves",
		"I am important; I will not let anyone forget that.",
		"You are either with me or against me.",
		"I know it is only a time before I am betrayed by those I care for.",
		"I never understand why people get so emotional.",
		"They are out to get me. It is only my cunning that keeps me ahead of them",
		"Everyone has a choice, the one I make is always right though."
	],
	ideal : [
		["Hope",
			"Hope: I know even if I need do evil acts, history will be my redemption. (Chaos)"
		],
		["Dedicated",
			"Dedicated: I can do anything I put my mind to (Lawful)"
		],
		["Exciting",
			"Exciting: I have found the truth of the Shadovar and want to share it with everyone. (Any)"
		],
		["Frugal",
			"Frugal: I horde my possessions knowing that someday I will be called upon to give everything I have to the cause (Any)"
		],
		["Eloquent",
			"Eloquent: I use my words to sway others to my beliefs. (Any)"
		],
		["Compassionate",
			"Compassionate: It is through love that others will join In our cause. (Good)"
		]
	],
	bond : [
		"They say the Shade broke the bonds of mortality; I want to find out how.",
		"The whispers in my head remind me that there is power to be found in the shadows.",
		"For the glory of Netheril, I will grow in power.",
		"I once lived in Hillsfar, I was chased out before I was able to say farewell.",
		"My true love was a killed by the Red Plumes; I plot to make them suffer.",
		"I had a loved one die in the arena at Hillsfar; I am out to prove I am stronger than them!"
	],
	flaw : [
		"I always over exaggerate my abilities.",
		"I cannot bear to let those I care for out of my sight.",
		"I am incapable of standing up for myself.",
		"The group I am with has committed atrocities; I am always worried their actions will become public.",
		"I always enjoy a good mug of ale … or five.",
		"I know what I do is wrong, but am afraid to speak up about it."
	],
	toolProfs : ["Forgery kit"],
	languageProfs : ["Netherese"],
	lifestyle : "moderate"
};
BackgroundList["trade sheriff"] = {
	regExpSearch :  /^(?=.*trade)(?=.*sheriff).*$/i,
	name : "Trade Sheriff",
	source : ["AL:RoD", 11],
	skills : ["Investigation", "Persuasion"],
	gold : 17,
	equipleft : [
		["Thieves' tools", "", 1]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Gray cloak", "", ""],
		["Sheriff's insignia", "", ""]
	],
	feature : "Investigative Services",
	trait : [
		"I am always polite and respectful",
		"I let my actions speak for themselves",
		"I am haunted by my past having seen the murder of a close friend or family member and it is the one case I always needed to solve but have not been able to.",
		"I am quick to judge and slow to vindicate",
		"I can be very persuasive and am able to ask questions where others might not be able to.",
		"I have a quirky personality that seems to take others off their guard.",
		"My sense of humor is considered by most to be awkward",
		"Everyone has a choice, and they can always make the right choice, mine!"
	],
	ideal : [
		["Hope",
			"Hope: my job is to speak for the victim (good)"
		],
		["Dedicated",
			"Dedicated: Once I start an investigation, until told to do so, I do not quit, not matter where it leads. (Lawful)"
		],
		["Nation",
			"Nation: My city, nation, or people are all that matter (any)"
		],
		["Mercenary",
			"Mercenary: When I do investigations, I expect answers immediately (Any)"
		],
		["Eloquent",
			"Eloquent: I use my words to sway others to give me answers.(good)"
		],
		["Might",
			"Might: It is through threats and force that I get my answers (lawful)"
		]
	],
	bond : [
		"To this day an unsolved case will always leave me haunted and bother me.",
		"Through the might of my personality I will solve an investigation or puzzle.",
		"It is my right to believe what I will, just try and stop me.",
		"I need to prove my worth to my fellow Sheriffs.",
		"Someone I cared for died under suspicious circumstances. I will find out what happened to them and bring their killer to justice.",
		"I speak for those that cannot speak for themselves."
	],
	flaw : [
		"I always over exaggerate my abilities.",
		"I cannot bear to let those I care for out of my sight.",
		"I took a bribe to tank an investigation and I would do anything to keep it secret.",
		"I have little respect for those that are of \"low\" intelligence/race.",
		"I always enjoy a good mug of ale … or five to cover up my past.",
		"I speak for the First Lord of Hillsfar and make sure everyone knows it."
	],
	toolProfs : [["Thieves' tools", "Dex"]],
	languageProfs : ["Elvish"],
	lifestyle : "moderate"
};

// Background features
BackgroundFeatureList["factor"] = {
	description : "My family has assigned me the services of a loyal retainer from the business. This person can perform mundane tasks for me such as making purchases, delivering messages, and running errands. He or she will not fight for me or follow me into danger, and will leave if frequently endangered or abused. If killed, my family assigns me another within days.",
	source : ["AL:RoD", 7]
};
BackgroundFeatureList["investigative services"] = {
	description : "I have a way of communicating with others that puts them at ease. I can invoke my rank to allow me access to a crime scene or to requisition equipment or horses on a temporary basis. When entering a settlement around Hillsfar, I can identify a contact who will give me information and would help me because I want to stop anyone from disrupting trade.",
	source : ["AL:RoD", 11]
};
BackgroundFeatureList["red plume and mage guild contacts"] = {
	description : "I made friends among the Red Plumes and Mage's Guild when I lived at the Hillsfar Gate. They remember me fondly and help me in little ways when they can. I can invoke their assistance in and around Hillsfar to obtain food, simple equipment for temporary use, and to gain access to the low-security areas of their garrisons, halls, and encampments.",
	source : ["AL:RoD", 6]
};
BackgroundFeatureList["secret identity"] = {
	description : "I have created a secret identity that I use to conceal my true race and that offers a covering explanation for my presence in Hillsfar. In addition, I can forge documents, including official papers and personal letters, as long as I have seen an example of the kind of document or the handwriting I am trying to copy.",
	source : ["AL:RoD", 9]
};
BackgroundFeatureList["secret passage"] = {
	description : "I can call on my smuggler contacts to secure secret passage into or out of Hillsfar for myself and my friends, no questions asked, and no Red Plume entanglements. Because I'm calling in a favor, I can't be certain when or if they can help. In return for passage, my companions and I may owe the Rogue's Guild a favor and/or may have to pay bribes.",
	source : ["AL:RoD", 8]
};
BackgroundFeatureList["secret society"] = {
	description : "I have a special way of communicating with others who feel the same way I do about the Shade. When I enter a village or larger city, I can identify a contact who will give me information on those that would hinder my goals and those would help me simply because of my desire to see the Shade Enclave return in all its glory.",
	source : ["AL:RoD", 10]
};
BackgroundFeatureList["shelter of the elven clergy"] = {
	description : "The clerics of Elventree have vowed to care for the Cormanthor refugees. They will help me when they can, including providing me and my companions with free healing and care at temples, shrines, and other established presences in Elventree. They will also provide me (but only me) with a poor lifestyle.",
	source : ["AL:RoD", 5]
};
BackgroundFeatureList["trade contact"] = {
	description : "My family and I have trade contacts such as caravan masters, sailors, artisans, farmers, and shopkeepers throughout the Moonsea region and all along the Sword Coast. When adventuring in either of those areas, I can use those contacts to get information about the local area or to pass a message to someone in those areas, even across great distance.",
	source : ["AL:RoD", 7]
};
var iFileName = "pub_20150915_OotA.js";
RequiredSheetVersion(12.999);
// This file adds all the beasts and background features from the Out of the Abyss adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.OotA={
	name : "Out of the Abyss [beasts, background features]",
	abbreviation : "OotA",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/outoftheabyss",
	date : "2015/09/15"
};

// Background features
BackgroundFeatureList["deep delver"] = {
	description : "I have a knack for finding my way in the Underdark, recalling all twists and turns with ease, such that I can always retrace my steps underground. I can determine which sources of food and water are safe to consume. I can always find sufficient food and water for myself and up to five other people in the Underdark, if sustenance is available in the area.",
	source : ["OotA", 221]
};
BackgroundFeatureList["underdark experience"] = {
	description : "I'm no casual visitor to the Underdark, but have spent considerable time there learning its ways. I'm familiar with the various races, civilizations, settlements, and travel routes of the Underdark. If I fail an Intelligence check to recall some piece of Underdark lore, I know a source I can consult for the answer unless the DM rules that the lore is unknown.",
	source : ["OotA", 221]
};

// Creatures
CreatureList["steeder"] = { // "Steeder, Female" entry so that just "steeder" also matches this entry
	name : "Steeder, Female",
	source : ["OotA", 231],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 30,
	hd : [4, 10], //[#, die]
	speed : "30 ft, climb 30 ft",
	scores : [15, 16, 14, 2, 10, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 7
	},
	senses : "Darkvision 120 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Target also takes 2d8 acid damage, half on a DC 12 Constitution saving throw"
		}, {
			name : "Sticky Leg",
			ability : 2,
			damage : ["Grappled", "", ""], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Medium or smaller is stuck to the steeder's leg and grappled (escape DC 12); Can't use again until grapple ends",
			modifiers : ["", "", false] //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Spider Climb",
			description : "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name : "Leap",
			description : "The steeder can expend all its movement on its turn to jump up to 90 ft vertically or horizontally, provided that its speed is at least 30 feet."
		}
	]
};
CreatureList["steeder, male"] = {
	name : "Steeder, Male",
	source : ["OotA", 231],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 13,
	hd : [2, 8], //[#, die]
	speed : "30 ft, climb 30 ft",
	scores : [15, 12, 14, 2, 10, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 5
	},
	senses : "Darkvision 120 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Target also takes 1d8 acid damage, half on a DC 12 Constitution saving throw"
		}, {
			name : "Sticky Leg",
			ability : 1,
			damage : ["Grappled", "", ""], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Small or smaller is stuck to the steeder's leg and grappled (escape DC 12); Can't use again until grapple ends",
			modifiers : ["", "", false] //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Spider Climb",
			description : "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name : "Leap",
			description : "The steeder can expend all its movement on its turn to jump up to 60 ft vertically or horizontally, provided that its speed is at least 30 feet."
		}
	]
};
var iFileName = "pub_20151103_SCAG.js";
RequiredSheetVersion(12.999);
// This file adds all the player-material from Sword Coast Adventure Guide to MPMB's Character Record Sheet

// Define the source
SourceList.S={
	name : "Sword Coast Adventure Guide",
	abbreviation : "SCAG",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/sc-adventurers-guide",
	date : "2015/11/03"
};

// Races
RaceList["ghostwise halfling"] = {
	regExpSearch : /^(?=.*\b(halflings?|hobbits?)\b)(?=.*ghostwise).*$/i,
	name : "Ghostwise halfling",
	sortname : "Halfling, Ghostwise",
	plural : "Ghostwise halflings",
	source : ["S", 110],
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Halfling"],
	savetxt : { adv_vs : ["frightened"] },
	age : " reach adulthood at age 20 and live around 150 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " average about 90 cm tall (80 + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	improvements : "Ghostwise Halfling: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Ghostwise Halfling (+2 Dexterity, +1 Wisdom)" + (typePF ? "\n" : " ") + "\nLucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll." + (typePF ? "\n" : " ") + "\nHalfling Nimbleness: I can move through the space of any creature that is of a size larger than me." + (typePF ? "\n" : " ") + "\nSilent Speech: I can speak telepathically to any one creature within 30 feet of me. It only understands me if we share a language."
};
RaceList["gray dwarf"] = {
	regExpSearch : /^((?=.*\bduergars?\b)|((?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\b(grey|gray|underdark)\b))).*$/i,
	name : "Duergar",
	sortname : "Dwarf, Gray (Duergar)",
	source : [["S", 104], ["MToF", 81]],
	plural : "Duergar",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish", "Undercommon"],
	vision : [["Darkvision", 120], ["Sunlight Sensitivity", 0]],
	savetxt : { adv_vs : ["charmed", "illusions", "paralyzed", "poison"] },
	dmgres : ["Poison"],
	weaponprofs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (3'8\" + 2d4\")",
	weight : " weigh around 150 lb (115 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (110 + 5d4 cm)",
	weightMetric : " weigh around 70 kg (55 + 5d4 \xD7 4d6 / 10 kg)",
	improvements : "Duergar: +2 Constitution, +1 Strength;",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Duergar (+2 Constitution, +1 Strength)\nStonecunning: Whenever I make an Int (History) check related to the origin of stonework, I am considered proficient in the skill and add double my proficiency bonus to the check.\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nDuergar Magic: 3rd: Enlarge/Reduce to enlarge; 5th: Invisibility. If not in direct sunlight," + (!typePF ? "\n" : " ") + "I can cast both spells on myself once per long rest without material components, using Int.",
	spellcastingAbility : 4,
	features : {
		"enlarge" : {
			name : "Enlarge (self only)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Duergar Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Duergar Magic (level 3)",
				spells : ["enlarge/reduce"],
				selection : ["enlarge/reduce"],
				oncelr : true
			}
		},
		"invisibility" : {
			name : "Invisibility (self only)",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Duergar Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Duergar Magic (level 5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true
			}
		}
	}
};
RaceList["deep gnome"] = { // reprint from Elemental Evil Player's Companion
	regExpSearch : /^((?=.*svirfneblin)|((?=.*\bgnomes?\b)(?=.*\b(underdarks?|deep|depths?)\b))).*$/i,
	name : "Svirfneblin",
	sortname : "Gnome, Deep (Svirfneblin)",
	source : [["E", 7], ["S", 115], ["MToF", 113]],
	plural : "Svirfneblin",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Gnomish", "Undercommon"],
	vision : [["Darkvision", 120]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " are considered full-grown adults when they reach 25 and live 200 to 250 years",
	height : " stand between 3 and 3 1/2 feet tall (2'9\" + 2d4\")",
	weight : " weigh around 90 lb (80 + 2d4 \xD7 1d4 lb)",
	heightMetric : " stand between 90 and 105 cm tall (85 + 5d4 cm)",
	weightMetric : " weigh around 50 kg (35 + 5d4 \xD7 4d4 / 10 kg)",
	improvements : "Svirfneblin: +1 Dexterity, +2 Intelligence;",
	scores : [0, 1, 0, 2, 0, 0],
	trait : "Svirfneblin (+1 Dexterity, +2 Intelligence)\n\nStone Camouflage:\n   I have advantage on Dexterity (stealth) checks to hide in rocky terrain."
};

// Racial variants
AddRacialVariant("half-elf", "aquatic", {
	regExpSearch : /aquatic/i,
	name : "Half-aquatic elf",
	source : ["S", 116],
	plural : "Half-aquatic elves",
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	skillstxt : "",
	trait : "Half-Aquatic Elf (+2 Charisma and +1 to two other ability scores of my choice)\n\nSwimming Speed:\n   My aquatic heritage gives me a swimming speed of 30 feet."
});
AddRacialVariant("half-elf", "cantrip", {
	regExpSearch : /cantrip/i,
	name : "Half-high elf",
	source : ["S", 116],
	plural : "Half-high elves",
	skillstxt : "",
	trait : "Half-High Elf (+2 Charisma and +1 to two other ability scores of my choice)\n\nCantrip:\n   I know one cantrip of my choice from the wizard spell list.\n   Intelligence is my spellcasting ability for it.",
	abilitySave : 4,
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "High Elf Cantrip",
		"class" : "wizard",
		level : [0, 0],
		atwill : true
	}
});
AddRacialVariant("half-elf", "drow magic", {
	regExpSearch : /^(?=.*drow)(?=.*magic).*$/i,
	name : "Half-drow",
	source : ["S", 116],
	plural : "Half-drow",
	skillstxt : "",
	trait : "Half-drow (+2 Charisma and +1 to two other ability scores of my choice)\n\nDrow Magic:\n   I know the Dancing Lights cantrip.\n   Once I reach 3rd level, I can cast the Faerie Fire spell once per long rest.\n   Once I reach 5th level, I can also cast the Darkness spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Drow Magic (level 1)",
		spells : ["dancing lights"],
		selection : ["dancing lights"],
		atwill : true
	},
	features : {
		"faerie fire" : {
			name : "Faerie Fire",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Drow Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Drow Magic (level 3)",
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				oncelr : true
			}
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Drow Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Drow Magic (level 5)",
				spells : ["darkness"],
				selection : ["darkness"],
				oncelr : true
			}
		}
	}
});
AddRacialVariant("half-elf", "elf weapon training", {
	regExpSearch : /^(?=.*\b(elf|elven)\b)(?=.*weapon)(?=.*training).*$/i,
	source : ["S", 116],
	skillstxt : "",
	trait : "Half-Elf (+2 Charisma and +1 to two other ability scores of my choice)",
	weaponprofs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]]
});
AddRacialVariant("half-elf", "fleet of foot", {
	regExpSearch : /^(?=.*fleet)(?=.*\b(foot|feet)\b).*$/i,
	name : "Half-wood elf",
	source : ["S", 116],
	plural : "Half-wood elves",
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	skillstxt : "",
	trait : "Half-Wood Elf (+2 Charisma and +1 to two other ability scores of my choice)"
});
AddRacialVariant("half-elf", "mask of the wild", {
	regExpSearch : /^(?=.*\bmasks?\b)(?=.*\bwilds?\b).*$/i,
	name : "Half-wood elf",
	source : ["S", 116],
	plural : "Half-wood elves",
	skillstxt : "",
	trait : "Half-Wood Elf (+2 Charisma and +1 to two other ability scores of my choice)\n\nMask of the Wild:\n   I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
});
AddRacialVariant("tiefling", "devil's tongue", {
	regExpSearch : /^(?=.*devil)(?=.*tongue).*$/i,
	name : "Devil's tongue tiefling",
	source : ["S", 118],
	plural : "Devil's tongue tieflings",
	trait : "Devil's Tongue Tiefling (+1 Intelligence, +2 Charisma)\n\nDevil's Tongue:\n   I know the Vicious Mockery cantrip.\n   At 3rd level, I can cast the Charm Person spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Enthrall spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingBonus : {
		name : "Devil's Tongue (level 1)",
		spells : ["vicious mockery"],
		selection : ["vicious mockery"],
		atwill : true
	},
	features : {
		"charm person" : {
			name : "Charm Person",
			minlevel : 3,
			usages : 1,
			additional : "2 targets",
			recovery : "long rest",
			tooltip : " (Devil's Tongue)",
			action : ["action", " (2 targets)"],
			spellcastingBonus : {
				name : "Devil's Tongue (level 3)",
				spells : ["charm person"],
				selection : ["charm person"],
				oncelr : true
			}
		},
		"enthrall" : {
			name : "Enthrall",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Devil's Tongue)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Devil's Tongue (level 5)",
				spells : ["enthrall"],
				selection : ["enthrall"],
				oncelr : true
			}
		}
	}
});
AddRacialVariant("tiefling", "hellfire", {
	regExpSearch : /hellfire/i,
	name : "Hellfire tiefling",
	source : ["S", 118],
	plural : "Hellfire tieflings",
	trait : "Hellfire Tiefling (+1 Intelligence, +2 Charisma)\n\nInfernal Legacy (Hellfire):\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Burning Hands spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Darkness spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	features : {
		"burning hands" : {
			name : "Burning Hands",
			minlevel : 3,
			usages : 1,
			additional : "4d6",
			recovery : "long rest",
			tooltip : " (Infernal Hellfire Legacy)",
			action : ["reaction", " (4d6)"],
			spellcastingBonus : {
				name : "Hellfire Legacy (level 3)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				oncelr : true
			}
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Infernal Hellfire Legacy)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Infernal Legacy (level 5)",
				spells : ["darkness"],
				selection : ["darkness"],
				oncelr : true
			}
		}
	}
});
AddRacialVariant("tiefling", "winged", {
	regExpSearch : /wing/i,
	name : "Winged tiefling",
	source : ["S", 118],
	plural : "Winged tieflings",
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 0 }
	},
	trait : "Winged Tiefling (+1 Intelligence, +2 Charisma)\n\nWings:\n   I have bat-like wings sprouting from my shoulder blades that give me flying speed of 30 feet when I'm not wearing heavy armor.",
	features : "",
	abilitySave : 0,
	spellcastingAbility : "",
	spellcastingBonus : ""
});
var AddTieflingSCAG = function(){
	if (!RaceList.tiefling) return;
	var tRace = {
		objname : "feral tiefling",
		replaceTraitTxt : ["+1 Intelligence, +2 Charisma", "+2 Dexterity, +1 Intelligence"],
		replaceNameTxt : ["tiefling", "feral tiefling"],
		regExpSearch : /^(?=.*feral)((?=.*tiefling)|(?=.*planetouched)(?=.*(hell|abyss|fiend|devil))).*$/i,
		name : "Feral tiefling",
		source : ["S", 118],
		plural : "Feral tieflings",
		sortname : "Tiefling, Feral",
		improvements : "Feral Tiefling: +2 Dexterity, +1 Intelligence;",
		scores : [0, 2, 0, 1, 0, 0],
		trait : "Feral Tiefling (+2 Dexterity, +1 Intelligence)\n\nInfernal Legacy:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Hellish Rebuke spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Darkness spell once per long rest.\n   Charisma is my spellcasting ability for these spells."
	};
	// Create the RaceList entry
	RaceList[tRace.objname] = eval(RaceList.tiefling.toSource());
	for (var rFea in tRace) {
		if ((/objname|replaceTraitTxt|replaceNameTxt/).test(rFea)) continue;
		RaceList[tRace.objname][rFea] = tRace[rFea];
	};
	// Create feral tiefling variants
	RaceList[tRace.objname].variants.forEach( function(nVar) {
		RaceSubList[tRace.objname + "-" + nVar] = eval(RaceSubList["tiefling-" + nVar].toSource());
		var thisVar = RaceSubList[tRace.objname + "-" + nVar];
		thisVar.trait = thisVar.trait.replace(tRace.replaceTraitTxt[0], tRace.replaceTraitTxt[1]);
		thisVar.trait = thisVar.trait.replace(tRace.replaceNameTxt[0].capitalize(), tRace.replaceNameTxt[1].capitalize());
		thisVar.name = thisVar.name.replace(tRace.replaceNameTxt[0], tRace.replaceNameTxt[1]);
		thisVar.plural = thisVar.plural.replace(tRace.replaceNameTxt[0], tRace.replaceNameTxt[1]);
	});
}();

// Subclasses
AddSubClass("barbarian", "battlerager", {
	regExpSearch : /(battlerager|kuldjargh)/i,
	subname : "Path of the Battlerager",
	fullname : "Battlerager",
	source : ["S", 121],
	abilitySave : 6,
	features : {
		"subclassfeature3" : {
			name : "Battlerager Armor",
			source : ["S", 121],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with spiked armor as a weapon" + "\n   " + "As a bonus action while raging, I can attack once with my armor spikes",
			action : ["bonus action", " attack (in rage)"],
			weapons : [false, false, ["armor spikes"]],
			eval : "AddString('Proficiency Armor Other Description', 'Spiked Armor', ', '); AddWeapon('Armor Spikes');",
			removeeval : "RemoveWeapon('Armor Spikes'); RemoveString('Proficiency Armor Other Description', 'Spiked Armor');"
		},
		"subclassfeature6" : {
			name : "Reckless Abandon",
			source : ["S", 121],
			minlevel : 6,
			description : "\n   " + "If I use Reckless Attack during rage, I also gain temporary HP equal to my Con mod"
		},
		"subclassfeature10" : {
			name : "Battlerager Charge",
			source : ["S", 121],
			minlevel : 10,
			description : "\n   " + "As a bonus action while raging, I can use the Dash action",
			action : ["bonus action", " (in rage)"]
		},
		"subclassfeature14" : {
			name : "Spiked Retribution",
			source : ["S", 121],
			minlevel : 14,
			description : "\n   " + "When I'm hit in melee by an attacker within 5 ft, it takes 3 piercing damage" + "\n   " + "This only works while I'm wearing spiked armor, in rage, and I'm not incapacitated"
		}
	}
});
AddSubClass("cleric", "arcana domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(arcana|magic|wizardry)).*$/i,
	subname : "Arcana Domain",
	source : ["S", 125],
	spellcastingExtra : ["detect magic", "magic missile", "magic weapon", "nystul's magic aura", "dispel magic", "magic circle", "arcane eye", "leomund's secret chest", "planar binding", "teleportation circle"],
	features : {
		"subclassfeature1" : {
			name : "Arcane Initiate",
			source : ["S", 125],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with Arcana and two wizard cantrips that count as cleric cantrips",
			skills : ["Arcana"],
			skillstxt : "\n\n" + toUni("Arcane Domain") + ": Arcana.",
			spellcastingBonus : {
				name : "Arcane Initiate",
				"class" : "wizard",
				level : [0, 0],
				times : 2
			}
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Arcane Abjuration",
			source : ["S", 125],
			minlevel : 2,
			description : "\n   " + "As an action, one celestial, elemental, fey, or fiend within 30 ft must make a Wis save" + "\n   " + "If it fails and is able to see/hear me, it is turned for 1 min or until it takes damage" + "\n   " + "Turned: move away, never within 30 ft of me, no reactions or actions other than Dash" + "\n   " + "Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds" + "\n   " + "If its CR is low enough and it is not on its home plane, it is banished for 1 min instead" + "\n   " + "Banished: sent to home plane, reappearing where it was if the effect ends before 1 min",
			additional : ["", "", "", "", "CR 1/2 or lower", "CR 1/2 or lower", "CR 1/2 or lower", "CR 1 or lower", "CR 1 or lower", "CR 1 or lower", "CR 2 or lower", "CR 2 or lower", "CR 2 or lower", "CR 3 or lower", "CR 3 or lower", "CR 3 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower"],
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Spell Breaker",
			source : ["S", 126],
			minlevel : 6,
			description : "\n   " + "When I restore HP to an ally with a 1st-level or higher spell, I can also end one spell" + "\n   " + "The chosen spell on the ally ends if it is equal or lower level to the spell slot level used"
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["S", 126],
			minlevel : 8,
			description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Arcane Mastery",
			source : ["S", 126],
			minlevel : 17,
			description : "\n   " + "I add four wizards spells, a 6th, 7th, 8th, and 9th-level spell, to my domain spells" + "\n   " + "As any domain spell, these spells are automatically prepared and count as cleric spells",
			spellcastingBonus : [{
				name : "Arcane Mastery (6)",
				"class" : "wizard",
				level : [6, 6],
				prepared : true
			}, {
				name : "Arcane Mastery (7)",
				"class" : "wizard",
				level : [7, 7],
				prepared : true
			}, {
				name : "Arcane Mastery (8)",
				"class" : "wizard",
				level : [8, 8],
				prepared : true
			}, {
				name : "Arcane Mastery (9)",
				"class" : "wizard",
				level : [9, 9],
				prepared : true
			},]
		}
	}
});
AddSubClass("fighter", "purple dragon knight", {
	regExpSearch : /^(((?=.*purple)(?=.*dragon)(?=.*knight))|(?=.*banneret)).*$/i,
	subname : "Purple Dragon Knight",
	fullname : "Purple Dragon Knight",
	source : ["S", 128],
	features : {
		"subclassfeature3" : {
			name : "Rallying Cry",
			source : ["S", 128],
			minlevel : 3,
			description : "\n   " + "When I use Second Wind, I also heal three allies within 60 ft that can see or hear me",
			additional : ["", "", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
			eval : "RemoveAction('bonus action', 'Second Wind'); AddAction('bonus action', 'Second Wind (+ Rallying Cry)', 'Purple Dragon Knight')",
			removeeval : "RemoveAction('bonus action', 'Second Wind (+ Rallying Cry)'); AddAction('bonus action', 'Second Wind', 'Fighter')"
		},
		"subclassfeature7" : {
			name : "Royal Envoy",
			source : ["S", 128],
			minlevel : 7,
			description : "\n   " + "I gain proficiency with the Persuasion skill and I gain expertise with the Persuasion skill" + "\n   " + "If already proficient, I can choose Animal Handling, Insight, Intimidation, or Perform",
			skillstxt : "\n\n" + toUni("Purple Dragon Knight (Royal Envoy)") + ": Persuasion proficiency and expertise; if already proficient, choose one from Animal Handling, Insight, Intimidation, and Performance.",
			eval : "AddSkillProf('Persuasion', true, true);",
			removeeval : "AddSkillProf('Persuasion', false, true);"
		},
		"subclassfeature10" : {
			name : "Inspiring Surge",
			source : ["S", 128],
			minlevel : 10,
			description : "\n   " + "When I use my Action Surge, I can inspire an ally within 60 ft that can see or hear me" + "\n   " + "The ally can then use its reaction to make one melee or ranged weapon attack",
			additional : ["", "", "", "", "", "", "", "", "", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "2 allies", "2 allies", "2 allies"]
		},
		"subclassfeature15" : {
			name : "Bulwark",
			source : ["S", 128],
			minlevel : 15,
			description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same effect and take the result" + "\n   " + "It only works if not incapacitated and the ally is within 60 ft and can see or hear me"
		}
	}
});
AddSubClass("monk", "way of the long death", {
	regExpSearch : /^(?=.*\blong)(?=.*\b(death|dead))((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Long Death",
	source : ["S", 130],
	features : {
		"subclassfeature3" : {
			name : "Touch of Death",
			source : ["S", 130],
			minlevel : 3,
			description : "\n   " + "If I reduce someone within 5 ft to 0 HP, I gain Wis mod + monk level temporary HP"
		},
		"subclassfeature6" : {
			name : "Hour of Reaping",
			source : ["S", 130],
			minlevel : 6,
			description : "\n   " + "As an action, all creatures within 30 feet of me must make a Wisdom saving throw" + "\n   " + "On a failed save the creature is frightened until the end of my next turn",
			action : ["action", ""]
		},
		"subclassfeature11" : {
			name : "Mastery of Death",
			source : ["S", 131],
			minlevel : 11,
			additional : "1 ki point",
			description : "\n   " + "When I'm reduced to 0 HP, I can expend 1 ki point to have 1 HP instead",
			extraname : "Way of the Long Death 17",
			changeeval : "if (newClassLvl.monk >= 17 && (What('Extra.Notes') + What('Class Features')).toLowerCase().indexOf('touch of the long death') === -1) {ClassFeatureOptions(['monk', 'subclassfeature11', 'touch of the long death', 'extra'])} else if (newClassLvl.monk < 17 && oldClassLvl.monk >= 17) {ClassFeatureOptions(['monk', 'subclassfeature11', 'touch of the long death', 'extra'], 'remove')};",
			"touch of the long death" : {
				name : "Touch of the Long Death",
				source : ["S", 131],
				description : " [1-10 ki points]" + "\n   " + "As an action, a target within 5 ft takes 2d10 necrotic damage per ki point I spent" + "\n   " + "It can make a Constitution saving throw to half the damage",
				action : ["action", ""]
			}
		}
	}
});
AddSubClass("monk", "way of the sun soul", {
	regExpSearch : /^(?=.*\bsun)(?=.*\b(soul|spirit))((?=.*(warrior|monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Sun Soul",
	source : [["S", 131], ["X", 35]],
	features : {
		"subclassfeature3" : {
			name : "Radiant Sun Bolt",
			source : [["S", 131], ["X", 35]],
			minlevel : 3,
			additional : "1 ki point for 2 extra attacks",
			description : desc([
				"I gain a ranged spell attack that I can use as an attack in the Attack action",
				"If I do this and spend 1 ki point, I can make 2 of these attacks as a bonus action"
			]),
			action : ["bonus action", " (2\u00D7 with Attack action)"],
			eval : "AddWeapon('Radiant Sun Bolt');",
			removeeval : "RemoveWeapon('Radiant Sun Bolt');",
			extraname : "Way of the Sun Soul 6",
			changeeval : "if (newClassLvl.monk >= 6 && (What('Extra.Notes') + What('Class Features')).toLowerCase().indexOf('searing arc strike') === -1) {ClassFeatureOptions(['monk', 'subclassfeature3', 'searing arc strike', 'extra'])} else if (newClassLvl.monk < 6 && oldClassLvl.monk >= 6) {ClassFeatureOptions(['monk', 'subclassfeature3', 'searing arc strike', 'extra'], 'remove')};",
			"searing arc strike" : {
				name : "Searing Arc Strike",
				source : [["S", 131], ["X", 35]],
				description : desc([
					"After taking the Attack action, I can cast Burning Hands as a bonus action [PHB 220]",
					"For every additional ki point I spend, Burning hands is cast at 1 higher spell level",
					"The maximum total ki points I can spend for this (including the 2) is half my Monk level"
				]),
				additional : levels.map(function (n) { 
					if (n < 3) return "";
					var xtrKi = Math.max(0,Math.floor(n/2) - 2);
					return "2 ki points + max " + xtrKi + " ki point" + (xtrKi == 1 ? "" : "s");
				}),
				action : ["bonus action", " (after Attack action)"]
			}
		},
		"subclassfeature11" : {
			name : "Searing Sunburst",
			source : [["S", 131], ["X", 35]],
			minlevel : 11,
			description : desc([
				"As an action, anyone in a 20-ft radius light on a point within 150 ft makes a Con save",
				"If failed and not behind opaque total cover, take 2d6 (+ 2d6/ki point) radiant damage"
			]),
			action : ["action", ""],
			additional : "0 ki points + max 3 ki points"
		},
		"subclassfeature17" : {
			name : "Sun Shield",
			source : [["S", 131], ["X", 35]],
			minlevel : 17,
			description : desc([
				"As a reaction, when I'm hit by a melee attack, I can deal 5 + Wis mod radiant damage",
				"I can only do this while my light aura is on; I can turn it on/off as a bonus action"
			]),
			action : ["bonus action", " (start/stop)"],
			additional : "30-ft rad bright + 30-ft dim light",
			eval : "AddAction('reaction', 'Sun Shield (hit in melee)', 'Monk (Way of the Sun Soul)')",
			removeeval : "RemoveAction('reaction', 'Sun Shield');"
		}
	}
});
AddSubClass("paladin", "oath of the crown", {
	regExpSearch : /^(?=.*(crown|king|country))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
	subname : "Oath of the Crown",
	source : ["S", 133],
	spellcastingExtra : ["command", "compelled duel", "warding bond", "zone of truth", "aura of vitality", "spirit guardians", "banishment", "guardian of faith", "circle of power", "geas"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Champion Challenge",
			source : ["S", 133],
			minlevel : 3,
			description : "\n   " + "I can compel any chosen creatures within 30 ft of me to make a Wisdom save" + "\n   " + "If failed, a target is unable to willingly move more than 30 ft away from me" + "\n   " + "The effect ends if I'm incapacitated, die, or it is moved more than 30 ft away from me",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Turn the Tide",
			source : ["S", 133],
			minlevel : 3,
			description : "\n   " + "As a bonus action, any chosen creatures within 30 ft that can hear me regain HP" + "\n   " + "Each regain 1d6 + my Charisma modifier HP, up to half of its total HP",
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Divine Allegiance",
			source : ["S", 133],
			minlevel : 7,
			description : "\n   " + "When a creature within 5 feet of me takes damage, I can substitute my HP for it" + "\n   " + "The creature takes no damage and I take all of it; this damage can't be prevented",
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Unyielding Spirit",
			source : ["S", 133],
			minlevel : 15,
			description : "\n   " + "I have advantage on saving throws against effects that paralyze or stun",
			savetxt : { adv_vs : ["paralyzed", "stunned"] }
		},
		"subclassfeature20" : {
			name : "Exalted Champion",
			source : ["S", 133],
			minlevel : 20,
			description : "\n   " + "As an action, I gain the following benefits for 1 hour or until I'm incapacitated:" + "\n    - " + "Resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons" + "\n    - " + "My allies within 30 ft of me and I have advantage on Wisdom and Death saves",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("rogue", "mastermind", {
	regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*(mastermind|strategist)).*$/i,
	subname : "Mastermind",
	fullname : "Mastermind",
	source : [["S", 135], ["X", 46]],
	features : {
		"subclassfeature3" : {
			name : "Master of Intrigue",
			source : [["S", 135], ["X", 46]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with disguise kits, forgery kits, one gaming set, and two languages",
				"I can mimic speech patterns and accents if I've heard them for at least 1 minute"
			]),
			languageProfs : [2],
			toolProfs : ["Disguise kit", "Forgery kit", ["Gaming set", 1]]
		},
		"subclassfeature3.1" : {
			name : "Master of Tactics",
			source : [["S", 135], ["X", 46]],
			minlevel : 3,
			description : desc([
				"I can use the Help action as a bonus action",
				"This even works if the ally attacks a target within 30 ft of me that can see or hear me"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature9" : {
			name : "Insightful Manipulator",
			source : [["S", 135], ["X", 46]],
			minlevel : 9,
			description : desc([
				"By spending 1 minute observing/interacting outside of combat I can learn capabilities",
				"The DM tells me if the target is my equal, superior, or inferior in regard to two things:",
				" - Intelligence score    - Wisdom score    - Charisma score    - Class levels (if any)"
			])
		},
		"subclassfeature13" : {
			name : "Misdirection",
			source : [["S", 135], ["X", 46]],
			minlevel : 13,
			description : desc([
				"As a reaction, I can redirect an attack meant for me to a creature within 5 ft of me",
				"This only works if the creature is providing me with cover against the attack"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature17" : {
			name : "Soul of Deceit",
			source : [["S", 135], ["X", 46]],
			minlevel : 17,
			description : desc([
				"My thoughts can't be read by telepathy or similar means; I can project false thoughts",
				"For that, I must pass a Cha (Deception) vs. Wis (Insight) check to fool the mind reader",
				"Magic always determines I'm truthful; I can't be magically compelled to tell the truth"
			])
		}
	}
});
AddSubClass("rogue", "swashbuckler", {
	regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*swashbuckl).*$/i,
	subname : "Swashbuckler",
	fullname : "Swashbuckler",
	source : [["S", 135], ["X", 47]],
	features : {
		"subclassfeature3" : {
			name : "Fancy Footwork",
			source : [["S", 135], ["X", 47]],
			minlevel : 3,
			description : desc([
				"Enemies I make a melee attack against in my turn can't use opportunity attacks on me",
				"This lasts until the end of my current turn"
			])
		},
		"subclassfeature3.1" : {
			name : "Rakish Audacity",
			source : [["S", 136], ["X", 47]],
			minlevel : 3,
			description : desc([
				"I don't need advantage to sneak attack if my target is the only one within 5 ft of me",
				"I still can't sneak attack if I have disadv.; I add my Charisma modifier to initiative rolls"
			]),
			addMod : { type : "skill", field : "Init", mod : "Cha", text : "I can add my Charisma modifier to initiative rolls." }
		},
		"subclassfeature9" : {
			name : "Panache",
			source : [["S", 136], ["X", 47]],
			minlevel : 9,
			description : desc([
				"As an action, I can beguile a creature that hears and understands me, for 1 minute",
				"It must succeed a Wis (Insight) check opposed by my Cha (Persuasion) or be affected as:",
				"\u2022 A hostile target gains disadv. on attacks and can't do opportunity attacks vs. not-me",
				"  This effect ends if an ally attacks or casts a spell vs. it, or if it and I are 60 ft apart",
				"\u2022 Targets that are not hostile are charmed and regard me as a friendly acquaintance",
				"  This effect ends if me or an ally do anything harmful to it"
			]),
			action : ["action", ""]
		},
		"subclassfeature13" : {
			name : "Elegant Maneuver",
			source : [["S", 136], ["X", 47]],
			minlevel : 13,
			description : "\n   " + "As a bonus action, I can gain adv. on my next Dex (Acrobatics) or Str (Athletics) check",
			action : ["bonus action", ""]
		},
		"subclassfeature17" : {
			name : "Master Duelist",
			source : [["S", 136], ["X", 47]],
			minlevel : 17,
			description : "\n   " + "Once per short rest, when I miss with an attack roll, I can roll again with advantage",
			recovery : "short rest",
			usages : 1
		}
	}
});
AddSubClass("sorcerer", "storm sorcery", {
	regExpSearch : /^(?=.*(sorcerer|witch))((?=.*(storm|tempest|hurricane))|((?=.*air)(?=.*element))).*$/i,
	subname : "Storm Sorcery",
	fullname : "Storm Sorcerer",
	source : [["S", 137], ["X", 51]],
	features : {
		"subclassfeature1" : {
			name : "Wind Speaker",
			source : [["S", 137], ["X", 52]],
			minlevel : 1,
			description : "\n   " + "I can speak, read, and write Primordial (and its dialects Aquan, Auran, Ignan, Terran)",
			languageProfs : ["Primordial"]
		},
		"subclassfeature1.1" : {
			name : "Tempestuous Magic",
			source : [["S", 137], ["X", 52]],
			minlevel : 1,
			description : desc([
				"As a bonus action, after casting a 1st-level or higher spell, I can control elemental air",
				"I can use this control to fly up to 10 feet without provoking opportunity attacks"
			]),
			action : ["bonus action", " (after casting)"]
		},
		"subclassfeature6" : {
			name : "Heart of the Storm",
			source : [["S", 137], ["X", 52]],
			minlevel : 6,
			description : desc([
				"I have resistance to lightning and thunder damage",
				"When I start casting a 1st-level or higher spell that deals lightning or thunder damage,",
				"I deal lightning or thunder damage to a creature within 10 ft of me that I can see"
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : Math.floor(n/2) + " damage"; }),
			dmgres : ["Lightning", "Thunder"]
		},
		"subclassfeature6.1" : {
			name : "Storm Guide",
			source : [["S", 137], ["X", 52]],
			minlevel : 6,
			description : desc([
				"As an action, I can stop rain around me in 20-ft radius; bonus action for it to resume",
				"As a bonus action, I can choose the direction of wind around me in a 100-ft radius",
				"This lasts until the end of my next turn and doesn't alter the wind's speed"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature14" : {
			name : "Storm's Fury",
			source : [["S", 137], ["X", 52]],
			minlevel : 14,
			description : desc([
				"As a reaction when hit by a melee attack, I can deal lightning damage to the attacker",
				"The attacker must also make a Strength save or be pushed up to 20 ft away from me"
			]),
			action : ["reaction", ""],
			additional : levels.map(function (n) { return n < 14 ? "" : n + " lightning damage"; })
		},
		"subclassfeature18" : {
			name : "Wind Soul",
			source : [["S", 137], ["X", 52]],
			minlevel : 18,
			description : desc([
				"I have immunity to lightning and thunder damage and gain magical 60 ft fly speed",
				"As an action, I reduce my fly speed to 30 ft and give allies 30 ft fly speed for 1 hour",
				"I can do this once per short rest for up to 3 + my Charisma modifier allies within 30 ft"
			]),
			action : ["action", ""],
			savetxt : { immune : ["lightning", "thunder"] },
			speed : { fly : { spd : "fixed 60", enc : "fixed 60" } },
			usages : 1,
			recovery : "short rest"
		}
	}
});
AddSubClass("warlock", "the undying", {
	regExpSearch : /^(?!.*light)(?=.*warlock)(?=.*(immortal|undying|neverending|unending)).*$/i,
	subname : "the Undying",
	source : ["S", 139],
	spellcastingExtra : ["false life", "ray of sickness", "blindness/deafness", "silence", "feign death", "speak with dead", "aura of life", "death ward", "contagion", "legend lore"],
	features : {
		"subclassfeature1" : {
			name : "Among the Dead",
			source : ["S", 139],
			minlevel : 1,
			description : "\n   " + "I learn the Spare the Dying cantrip and gain advantage on saving throws vs. diseases" + "\n   " + "If an undead targets me directly with an attack or spell, it must make a Wisdom save" + "\n   " + "On a fail, it must choose a new target or forfeit its attack or harmful spell" + "\n   " + "On a success or if I attack or cast a harmful spell on it, it is immune for 24 hours",
			savetxt : { adv_vs : ["disease"] },
			spellcastingBonus : {
				name : "Among the Dead",
				spells : ["spare the dying"],
				selection : ["spare the dying"]
			}
		},
		"subclassfeature6" : {
			name : "Defy Death",
			source : ["S", 140],
			minlevel : 6,
			description : "\n   " + "I regain 1d8 + my Constitution modifier in HP when I succeed on a Death saving throw" + "\n   " + "I also regain this amount whenever I use Spare the Dying to stabilize a creature",
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Undying Nature",
			source : ["S", 140],
			minlevel : 10,
			description : "\n   " + "I can hold my breath indefinitely; I don't require food, water, or sleep (I still need rest)" + "\n   " + "I age more slowly, only 1 year for every 10 years that pass; I can't be magically aged"
		},
		"subclassfeature14" : {
			name : "Indestructible Life",
			source : ["S", 140],
			minlevel : 14,
			description : "\n   " + "As a bonus action, I can regain HP and reattach severed body parts",
			action : ["bonus action", ""],
			recovery : "short rest",
			usages : 1,
			additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "1d8 + 14 HP", "1d8 + 15 HP", "1d8 + 16 HP", "1d8 + 17 HP", "1d8 + 18 HP", "1d8 + 19 HP", "1d8 + 20 HP"]
		}
	}
});
AddSubClass("wizard", "bladesinging", {
	regExpSearch : /(bladesinging|bladesinger)/i,
	subname : "Tradition of Bladesinging",
	fullname : "Bladesinger",
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	source : ["S", 142],
	features : {
		"subclassfeature2" : {
			name : "Training in War and Song",
			source : ["S", 142],
			minlevel : 2,
			description : "\n   " + "I gain proficiency with light armor, a one-handed melee weapon, and Performance",
			armor : [true, false, false, false],
			skills : ["Performance"],
			skillstxt : "\n\n" + toUni("Bladesinger") + ": Performance"
		},
		"subclassfeature2.1" : {
			name : "Bladesong",
			source : ["S", 142],
			minlevel : 2,
			description : "\n   " + "As a bonus action, I can start the bladesong for 1 minute; I can dismiss it at any time" + "\n   " + "It stops when I wear a shield, medium or heavy armor, or attack with two hands" + "\n   " + "While the bladesong is active I have the following benefits:" + "\n    - " + "Intelligence modifier (min 1) to AC" + "\n    - " + "Base walking speed increases by 10 foot" + "\n    - " + "Advantage on Dexterity (Acrobatics) checks" + "\n    - " + "Intelligence modifier (min 1) to concentration saves for maintaining conc. on a spell",
			action : ["bonus action", " (start)"],
			recovery : "short rest",
			usages : 2
		},
		"subclassfeature10" : {
			name : "Song of Defense",
			source : ["S", 142],
			minlevel : 10,
			description : "\n   " + "As a reaction while my bladesong is active, I can expand a spell slot to reduce damage" + "\n   " + "The damage I take is reduced by 5 for every level of the spell slot I expand",
			action : ["reaction", " (in bladesong)"]

		},
		"subclassfeature14" : {
			name : "Song of Victory",
			source : ["S", 142],
			minlevel : 14,
			description : "\n   " + "While my bladesong is active, I can add my Int mod to melee weapon attack damage",
			calcChanges : {
				atkCalc : ["if (classes.known.wizard && classes.known.wizard.level > 13 && isMeleeWeapon && (/blade.?song/i).test(WeaponText)) { output.extraDmg += What('Int Mod'); }; ", "If I include the word 'Bladesong' in the name or description of a melee weapon, it gets my Intelligence modifier added to its Damage."]
			}
		}
	}
});

// New Totem Warrior options
var AmendTotemWarriorSCAG = function() {
	if (!ClassSubList["barbarian-totem warrior"] || ClassSubList["barbarian-totem warrior"].source.indexOf("P") === -1) return;
	var TWadds = [{
		name : "Elk",
		addto : "subclassfeature3.1",
		feature : {
			name : "Elk Spirit",
			source : ["S", 122],
			description : "\n   " + "While raging without heavy armor, my base walking speed increases with 15 foot"
		}
	}, {
		name : "Tiger",
		addto : "subclassfeature3.1",
		feature : {
			name : "Tiger Spirit",
			source : ["S", 122],
			description : "\n   " + "While raging, I can add 10 feet to my long jump and 3 feet to my high jump distance"
		}
	}, {
		name : "Elk",
		addto : "subclassfeature6",
		feature : {
			name : "Aspect of the Elk",
			source : ["S", 122],
			description : "\n   " + "While mounted or on foot and not incapacitated, my travel pace is doubled" + "\n   " + "I can extend this benefit to up to ten companions, while they are within 60 ft of me"
		}
	}, {
		name : "Tiger",
		addto : "subclassfeature6",
		feature : {
			name : "Aspect of the Tiger",
			source : ["S", 122],
			description : "\n   " + "I gain proficiency with two skills chosen from: Athletics, Acrobatics, Stealth, or Survival",
			skillstxt : "\n\n" + toUni("Aspect of the Tiger") + ": Choose two from Athletics, Acrobatics, Stealth, and Survival."
		}
	}, {
		name : "Elk",
		addto : "subclassfeature14",
		feature : {
			name : "Elk Attunement",
			source : ["S", 122],
			description : "\n   " + "As a bonus action while raging, I can move through Large or smaller creature's space" + "\n   " + "It must make a Strength save of DC 8 + Strength modifier + Proficiency bonus" + "\n   " + "If failed, it is knocked prone and takes 1d12 + Strength modifier bludgeoning damage",
			action : ["bonus action", " (in rage)"]
		}
	}, {
		name : "Tiger",
		addto : "subclassfeature14",
		feature : {
			name : "Tiger Attunement",
			source : ["S", 122],
			description : "\n   " + "As a bonus action while raging, I can make a melee weapon attack on these conditions:" + "\n    - " + "I move at least 20 ft in a straight line towards the target that is Large or smaller" + "\n    - " + "I make a melee weapon attack against it after the bonus action",
			action : ["bonus action", " (in rage)"]
		}
	}]
	var TW = ClassSubList["barbarian-totem warrior"].features;
	for (var i = 0; i < TWadds.length; i++) {
		var tA = TWadds[i];
		var TWfea = TW[tA.addto];
		TWfea.choices.push(tA.name);
		TWfea[tA.name.toLowerCase()] = tA.feature;
	};
}();

// Backgrounds
BackgroundList["far traveler"] = {
	regExpSearch : /^(?=.*far)(?=.*traveler).*$/i,
	name : "Far Traveler",
	source : ["S", 148],
	skills : ["Insight", "Perception"],
	gold : 5,
	equipleft : [
		["Gaming set or musical instrument", "", ""],
		["Poorly wrought maps", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Piece of jewelry worth 10 gp", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "All Eyes on You",
	trait : [
		"I have different assumptions from those around me concerning personal space, blithely invading others' space in innocence, or reacting to ignorant invasion of my own.",
		"I have my own ideas about what is and is not food, and I find the eating habits of those around me fascinating, confusing, or revolting.",
		"I have a strong code of honor or sense of propriety that others don't comprehend.",
		"I express affection or contempt in ways that are unfamiliar to others.",
		"I honor my deities through practices that are foreign to this land.",
		"I begin or end my day with small traditional rituals that are unfamiliar to those around me."
	],
	ideal : [
		["Open",
			"Open: I have much to learn from the kindly folk I meet along my way. (Good)"
		],
		["Reserved",
			"Reserved: As someone new to these strange lands, I am cautious and respectful in my dealings. (Lawful)"
		],
		["Adventure",
			"Adventure: I'm far from home, and everything is strange and wonderful! (Chaotic)"
		],
		["Cunning",
			"Cunning: Though I may not know their ways, neither do they know mine, which can be to my  advantage. (Evil)"
		],
		["Inquisitive",
			"Inquisitive: Everything is new, but I have a thirst to learn. (Neutral)"
		],
		["Suspicious",
			"Suspicious: I must be careful, for I have no way of telling friend from foe here. (Any)"
		]
	],
	bond : [
		"So long as I have this token from my homeland, I can face any adversity in this strange land.",
		"The gods of my people are a comfort to me so far from home.",
		"I hold no greater cause than my service to my people.",
		"My freedom is my most precious possession. I'll never let anyone take it from me again.",
		"I'm fascinated by the beauty and wonder of this new land.",
		"Though I had no choice, I lament having to leave my loved one(s) behind. I hope to see them again one day."
	],
	flaw : [
		"I am secretly (or not so secretly) convinced of the superiority of my own culture over that of this foreign land.",
		"I pretend not to understand the local language in order to avoid interactions I would rather not have.",
		"I have a weakness for the new intoxicants and other pleasures of this land.",
		"I don't take kindly to some of the actions and motivations of the people of this land, because these folk are different from me.",
		"I consider the adherents of other gods to be deluded innocents at best, or ignorant fools at worst.",
		"I have a weakness for the exotic beauty of the people of these lands."
	],
	extra : [
		"Select Why You Are Here",
		"Emissary",
		"Exile",
		"Fugitive",
		"Pilgrim",
		"Sightseer",
		"Wanderer"
	],
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "modest"
};

// Background variants
AddBackgroundVariant("soldier", "city watch", {
	regExpSearch : /^(?=.*city)(?=.*(watch|guard)).*$/i,
	name : "City Watch",
	source : ["S", 145],
	skills : ["Athletics", "Insight"],
	equipright : [
		["Uniform of my unit", "", 3],
		["Insignia of rank", "", ""],
		["Horn", "", 2],
		["Manacles", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Watcher's Eye",
	extra : "",
	toolProfs : "",
	languageProfs : [2],
	lifestyle : "modest"
});
AddBackgroundVariant("guild artisan", "clan crafter", {
	regExpSearch : /^(?=.*clan)(?=.*(crafter|smith|builder|miner)).*$/i,
	name : "Clan Crafter",
	source : ["S", 145],
	skills : ["History", "Insight"],
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Maker's mark chisel", "", 0.5]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins and 10 gp gem)", "", 1],
	],
	feature : "Respect of the Stout Folk",
	extra : "",
	languageProfs : ["Dwarvish"],
	lifestyle : "comfortable"
});
AddBackgroundVariant("sage", "cloistered scholar", {
	regExpSearch : /^(?=.*cloistered)(?=.*scholar).*$/i,
	name : "Cloistered Scholar",
	source : ["S", 146],
	skills : ["History"],
	skillstxt : "History and choose one from Arcana, Nature, and Religion",
	gold : 10,
	equipleft : [
		["Ink, 1 ounce bottle of", 1, ""],
		["Quill", "", ""],
		["Parchment, sheets of", 1, ""],
		["Small penknife", "", 0.5],
		["Borrowed book", "", 5]
	],
	equipright : [
		["Scholar's robes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Library Access",
	extra : ["Name your Library"],
	languageProfs : [2],
	lifestyle : "modest"
});
AddBackgroundVariant("guild artisan", "courtier", {
	regExpSearch : /courtier/i,
	name : "Courtier",
	source : ["S", 146],
	skills : ["Insight", "Persuasion"],
	gold : 5,
	equipleft : "",
	equipright : [
		["Fine clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Court Functionary",
	extra : "",
	toolProfs : "",
	languageProfs : [2],
	lifestyle : "comfortable"
});
AddBackgroundVariant("acolyte", "faction agent", {
	regExpSearch : /^(?=.*agent)(?=.*(faction|harper|order of the gauntlet|emerald enclave|lord.?s alliance|zhentarim)).*$/i,
	name : "Faction Agent",
	source : ["S", 147],
	skills : ["Insight"],
	skillstxt : "Insight and choose one Intelligence, Wisdom, or Charisma skill",
	gold : 15,
	equipleft : [
		["Copy of seminal faction's text", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Badge or emblem of faction", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Safe Haven",
	extra : [
		"Select a Faction",
		"The Harpers",
		"The Order of the Gauntlet",
		"The Emerald Enclave",
		"The Lord's Alliance",
		"The Zhentarim"
	],
	languageProfs : [2],
	lifestyle : "modest"
});
AddBackgroundVariant("folk hero", "inheritor", {
	regExpSearch : /inheritor/i,
	name : "Inheritor",
	source : ["S", 150],
	skills : ["Survival"],
	skillstxt : "Survival and choose one from Arcana, History, and Religion",
	gold : 15,
	equipleft : [
		["Gaming set or musical instrument", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["The inheritance", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Inheritance",
	extra : [
		"Select an Inheritance",
		"Document such as a map, letter, or journal",
		"A trinket",
		"Article of clothing",
		"Piece of jewelry",
		"Arcane book or formulary",
		"Written story, song, poem, or secret",
		"Tattoo or other body marking"
	],
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "wealthy"
});
AddBackgroundVariant("soldier", "investigator", {
	regExpSearch : /investigator/i,
	name : "Investigator",
	source : ["S", 145],
	skills : ["Insight", "Investigation"],
	equipright : [
		["Uniform", "", 3],
		["Insignia of rank", "", ""],
		["Horn", "", 2],
		["Manacles", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Watcher's Eye",
	extra : "",
	toolProfs : "",
	languageProfs : [2]
});
AddBackgroundVariant("soldier", "knight of the order", {
	regExpSearch : /^(?=.*knight)(?=.*order).*$/i,
	name : "Knight of the Order",
	source : ["S", 151],
	skills : ["Persuasion"],
	skillstxt : "Persuasion and choose one from Arcana, History, Nature, and Religion",
	equipright : [
		["Traveler's clothes", "", 4],
		["Signet, banner, or seal of rank", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Knightly Regard",
	extra : ["Name your Knightly Order"],
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "comfortable"
});
AddBackgroundVariant("soldier", "mercenary veteran", {
	regExpSearch : /^(?=.*mercenary)(?=.*(veteran|soldier)).*$/i,
	name : "Mercenary Veteran",
	source : ["S", 152],
	skills : ["Athletics", "Persuasion"],
	equipright : [
		["Uniform of my company", "", 4],
		["Insignia of rank", "", ""],
		["Gaming set", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Mercenary Life",
	extra : ["Name your Mercenary Company"],
	lifestyle : "modest"
});
AddBackgroundVariant("criminal", "urban bounty hunter", {
	regExpSearch : /^(?=.*urban)(?=.*bounty)(?=.*hunter).*$/i,
	name : "Urban Bounty Hunter",
	source : ["S", 153],
	skills : "",
	skillstxt : "Choose two from Deception, Insight, Persuasion, and Stealth",
	gold : 20,
	equipright : [
		["Appropriate Clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Ear to the Ground",
	extra : "",
	toolProfs : [["Gaming set, instrument, or thieves' tools", 2]],
	lifestyle : "poor"
});
AddBackgroundVariant("outlander", "uthgardt tribe member", {
	regExpSearch : /^(?=.*(uthgardt|barbarian|nomad|clan))(?=.*tribe)(?=.*member).*$/i,
	name : "Uthgardt Tribe Member",
	source : ["S", 153],
	equipright : [
		["Traveler's clothes", "", 4],
		["Hunting trap", "", 25],
		["Totemic token or tattoos of tribal totem", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Uthgardt Heritage",
	extra : "",
	toolProfs : [["Artisan's tools or musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "poor"
});
AddBackgroundVariant("noble", "waterdhavian noble", {
	regExpSearch : /^(?=.*(waterdhavian|waterdeep))(?=.*noble).*$/i,
	name : "Waterdhavian Noble",
	source : ["S", 154],
	gold : 20,
	equipleft : [
		["Scroll of pedigree", "", ""],
		["Skin of fine zzar or wine", "", 5] // weight based on waterskin
	],
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring or brooch", "", ""],
		["Purse (with coins)", "", 1],
	],
	feature : "Kept in Style",
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "wealthy"
});

// Background features
BackgroundFeatureList["court functionary"] = {
	description : "My knowledge of how bureaucracies function lets me gain access to the records and inner workings of any noble court or government I encounter. I know or can easily acquire the knowledge who the movers and shakers are, whom to go to for the favors I seek, and what the current intrigues of interest in the group are.",
	source : ["S", 147]
};
BackgroundFeatureList["all eyes on you"] = {
	description : "My accent, mannerisms, figures of speech all mark me as foreign. Curious glances are directed my way wherever I go. A nuisance, but I also gain the friendly interest of the curious. I can parley this attention into access I might not otherwise have, for me and my companions. Nobles, scholars, merchants, and guilds, might be among the interested.",
	source : ["S", 149]
};
BackgroundFeatureList["ear to the ground"] = {
	description : "I am in frequent contact with people in my chosen segment of society. These people might be associated with the criminal underworld, the rough-and-tumble folk of the streets, or members of high society. This connection comes in the form of a contact in any city I visit, a person who provides information about the people and places of the local area.",
	source : ["S", 153]
};
BackgroundFeatureList["inheritance"] = {
	description : "The item I inherited has a special significance, history, power, and/or important value. When I begin my adventuring career, I can decide whether to tell my companions about it right away. Rather than attracting attention to myself, I could decide to keep it a secret until I learn more about what it means to me and what it can do for me.",
	source : ["S", 150]
};
BackgroundFeatureList["kept in style"] = {
	description : "While I am in Waterdeep or elsewhere in the North my house sees to my everyday needs. My name and signet are sufficient to cover most of my expenses; the inns, taverns, and festhalls I frequent are glad to record my debt and send an accounting to my family's estate. This advantage enables me to take 2 gp of my daily lifestyle costs down to 0 gp.",
	source : ["S", 154]
};
BackgroundFeatureList["knightly regard"] = {
	description : "I receive shelter and succor from members of my knightly order and its sympathizers. Religious knightly orders get aid from temples and communities of my deity. Civic order knights get help from the community they serve. Philosophical order knights can find help from those they have aided in pursuit of their ideals, and those who share those ideals.",
	source : ["S", 151]
};
BackgroundFeatureList["library access"] = {
	description : "I have free access to most of the library I work at, though it might have repositories of lore that are too valuable, magical, or secret to permit anyone immediate access. I have a working knowledge of my cloister's personnel and bureaucracy, and I know how to navigate those connections. I am likely to gain preferential treatment at other libraries.",
	source : ["S", 146]
};
BackgroundFeatureList["mercenary life"] = {
	description : "I know the mercenary life well. I am able to identify mercenary company emblems, and I know a little about any such company, including the leaders, reputation, and who hired them recently. I can find the locales where mercenaries abide anywhere, as long as I speak the language. My mercenary work between adventures affords me a comfortable lifestyle.",
	source : ["S", 152]
};
BackgroundFeatureList["respect of the stout folk"] = {
	description : "No one esteems clan crafters quite so highly as dwarves do. I always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer you (and possibly your compatriots) the finest accommodations and assistance.",
	source : ["S", 145]
};
BackgroundFeatureList["safe haven"] = {
	description : "As a faction agent, I have access to a secret network of support and operatives who can provide assistance on my adventures. I know secret signs and passwords to identify such operatives, who can provide me with access to a hidden safe house, free room and board, or assistance in finding information. These agents never risk their lives or identity for me.",
	source : ["S", 147]
};
BackgroundFeatureList["uthgardt heritage"] = {
	description : "I have an excellent knowledge of my tribe's territory, and surrounding terrain and natural resources. I am familiar enough with any wilderness area that I can find twice as much food and water as one normally would. I can call upon the hospitality of my people, and those allied, often including members of druid circles, nomadic elves, and priesthoods.",
	source : ["S", 154]
};
BackgroundFeatureList["watcher's eye"] = {
	description : "My experience in enforcing the law, and dealing with lawbreakers, gives me a feel for local laws and criminals. I can easily find the local outpost of the watch, guards or a similar organization, and just as easily pick out the dens of criminal activity in a community. I am far more likely to be welcome in the former locations rather than the latter, however.",
	source : ["S", 145]
};

// Armour
ArmourList["spiked armor"] = { // battlerager armour
	regExpSearch : /^(?!.*(dragon|draconic|beast))(?=.*spike(d|s))(?=.*armou?r).*$/i,
	name : "Spiked armor",
	source : ["S", 121],
	type : "medium",
	ac : 14,
	stealthdis : true,
	weight : 45,
	strReq : 0
};

// Weapons
WeaponsList["armor spikes"] = {
	regExpSearch : /^(?=.*armou?r)(?=.*spike).*$/i,
	name : "Armor spikes",
	source : ["S", 121],
	ability : 1,
	type : "Other",
	damage : [1, 4, "piercing"],
	range : "Melee",
	description : "Does 3 piercing damage when using your attack to grapple",
	abilitytodamage : true
};
WeaponsList["radiant sun bolt"] = {
	regExpSearch : /^(?=.*radiant)(?=.*(sun|light))(?=.*bolt).*$/i,
	name : "Radiant Sun Bolt",
	source : [["S", 131], ["X", 35]],
	ability : 2,
	type : "Spell",
	damage : [1, 4, "radiant"],
	range : "30 ft",
	description : "If used in an Attack action, spend 1 ki point to use it twice as a bonus action",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["booming blade"] = {
	regExpSearch : /^(?=.*booming)(?=.*blade).*$/i,
	name : "Booming Blade",
	source : ["S", 142],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Cd8", "", "thunder"],
	range : "With melee wea",
	description : "First damage added to the attack; second to the target if it moves next round (SCAG 142)",
	abilitytodamage : false
};
WeaponsList["green-flame blade"] = {
	regExpSearch : /^(?=.*green)(?=.*flame)(?=.*blade).*$/i,
	name : "Green-Flame Blade",
	source : ["S", 143],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["Bd8/Bd8", "", "fire"],
	range : "With melee wea",
	description : "First damage added to the attack; second to a target within 5 ft (SCAG 143)",
	abilitytodamage : true
};
WeaponsList["lightning lure"] = {
	regExpSearch : /^(?=.*lightning)(?=.*lure).*$/i,
	name : "Lightning Lure",
	source : ["S", 143],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 8, "lightning"],
	range : "15 ft",
	description : "Str save; success - nothing; fail - pulled 10 ft closer to me, only take damage if end within 5 ft of me (SCAG 143)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["sword burst"] = {
	regExpSearch : /^(?=.*sword)(?=.*burst).*$/i,
	name : "Sword Burst",
	source : ["S", 143],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "force"],
	range : "5 ft",
	description : "Dex save, success - no damage; all creatures in range (SCAG 143)",
	abilitytodamage : false,
	dc : true
};

// Feat
FeatsList["svirfneblin magic"] = {
	name : "Svirfneblin Magic",
	source : [["E", 7], ["S", 115]],
	prerequisite : "Being a Svirfneblin (Deep Gnome)",
	prereqeval : "CurrentRace.known === 'deep gnome'",
	description : "I can cast Nondetection on myself at will, without a material component. I can also cast the spells Blindness/Deafness, Blur, and Disguise Self once each. I regain the ability to cast these spells when I finish a long rest. Intelligence is my spellcasting ability for these spells.",
	spellcastingBonus : [{
		name : "at will (self only)",
		spellcastingAbility : 4,
		spells : ["nondetection"],
		selection : ["nondetection"],
		atwill : true
	}, {
		name : "1x long rest (self only)",
		spells : ["blindness/deafness", "blur", "disguise self"],
		selection : ["blindness/deafness", "blur", "disguise self"],
		oncelr : true,
		times : 3
	}]
};

// Spells
SpellsList["booming blade"] = {
	name : "Booming Blade",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["S", 142],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5 ft",
	components : "V,M",
	compMaterial : "A weapon",
	duration : "Instantaneous",
	description : "Melee wea atk with cast; if hit, it 0d8, if it moves next rnd it 1d8 Thunder dmg; +1d8 at CL5, 11, \u0026 17",
	descriptionFull : "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 thunder damage, and the spell ends." + AtHigherLevels + "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level."
};
SpellsList["green-flame blade"] = {
	name : "Green-Flame Blade",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["S", 143],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5 ft",
	components : "V,M",
	compMaterial : "A weapon",
	duration : "Instantaneous",
	description : "Melee wea atk with cast; if hit, it 0d8, crea in 5 ft 0d8+spell mod Fire dmg; +1d8 at CL 5, 11, and 17",
	descriptionFull : "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and green fire leaps from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier." + "\n   " + "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level and 17th level."
};
SpellsList["lightning lure"] = {
	name : "Lightning Lure",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["S", 143],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "15 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Str",
	description : "1 crea you see save or pull 10 ft to you; if end in 5 ft, 1d8 Lightning dmg; +1d8 at CL 5, 11, and 17",
	descriptionFull : "You create a lash of lightning energy that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you." + "\n   " + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
SpellsList["sword burst"] = {
	name : "Sword Burst",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["S", 143],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "5 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Dex",
	description : "All crea in range save or 1d6 Force damage; +1d6 at CL 5, 11, and 17",
	descriptionFull : "You create a momentary circle of spectral blades that sweep around you. Each creature within range, other than you, must succeed on a Dexterity saving throw or take 1d6 force damage." + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
var iFileName = "pub_20160315_CoS.js";
RequiredSheetVersion(12.999);
// This file adds the backgrounds from the Curse of Strahd adventure book and the optional backgrounds from the Adventurers League season 4 (Curse of Strahd) to MPMB's Character Record Sheet

// Define the sources
SourceList.CoS={
	name : "Curse of Strahd [background, pack]",
	abbreviation : "CoS",
	group : "Adventure Books",
	url : "https://media.wizards.com/2016/downloads/DND/CoS_Character_Options.pdf",
	date : "2016/03/15"
};
SourceList["AL:CoS"]={
	name : "Curse of Strahd Backgrounds", // v1.1
	abbreviation : "AL:CoS",
	group : "Adventurers League",
	url : "https://dndadventurersleague.org/wp-content/uploads/2016/06/Curse-of-Strahd-Backgrounds-v1.1.pdf",
	date : "2016/04/07"
};

// Backgrounds (with contributions by RCanine)
BackgroundList["haunted one"] = {
	regExpSearch : /haunted/i,
	name : "Haunted One",
	source : ["CoS", 209],
	skills : "",
	skillstxt : "Choose two from Arcana, Investigation, Religion, and Survival",
	languageProfs : [1],
	gold : 0,
	equipleft : [
		["Chest, with:", "", 25],
		["Crowbar", "", 5],
		["Hammer", "", 3],
		["Wooden Stakes", 3, 1],
		["Holy symbol", "", 1],
		["Holy water, flasks of", "", 1],
		["Manacles", "", 6],
		["Steel Mirror", "", 0.5],
		["Oil, flasks of", "", 1],
		["Tinderbox", "", 1],
		["Torch", 3, 1]
	],
	equipright : [
		["Common clothes", "", 3],
		["Trinket of special significance", "", ""]
	],
	feature : "Heart of Darkness",
	trait : [
		"I don't run from evil. Evil runs from me.",
		"I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness.",
		"I spend money freely and live life to the fullest, knowing that tomorrow I might die.",
		"I live for the thrill of the hunt.",
		"I don't talk about the thing that torments me. I'd rather not burden others with my curse.",
		"I expect danger around every corner.",
		"I refuse to become a victim, and I will not allow others to be victimized.",
		"I put no trust in divine beings."
	],
	ideal : [
		["Sacrifice", "Sacrifice: I try to help those in need, no matter what the personal cost. (Good)"],
		["Desperation", "Desperation: I'll stop the spirits that haunt me or die trying. (Any)"],
		["Cleansing", "Cleansing: I kill monsters to make the world a safer place, and to exorcise my own demons. (Good)"],
		["Vigilante", "Vigilante: I have a dark calling that puts me above the law. (Chaotic)"],
		["Preparation", "Preparation: I like to know my enemy's capabilities and weaknesses before rushing into battle. (Lawful)"],
		["Destruction", "Destruction: I'm a monster that destroys other monsters, and anything else that gets in my way. (Evil)"]
	],
	bond : [
		"I keep my thoughts and discoveries in a journal. My journal is my legacy.",
		"I would sacrifice my life and my soul to protect the innocent.",
		"My torment drove away the person I love. I strive to win back the love I've lost.",
		"A terrible guilt consumes me. I hope that I can find redemption through my actions.",
		"There's evil in me, I can feel it. It must never be set free.",
		"I have a child to protect. I must make the world a safer place for him (or her)."
	],
	flaw : [
		"I have certain rituals that I must follow every day. I can never break them.",
		"I assume the worst in people.",
		"I feel no compassion for the dead. They're the lucky ones.",
		"I have an addiction.",
		"I am a purveyor of doom and gloom who lives in a world without hope.",
		"I talk to spirits that no one else can see."
	],
	extra : [
		"Select a Harrowing Event",
		"Monster spared my life",
		"Born under a dark star",
		"Haunted by an apparition",
		"Dark arts in the family",
		"An oni took my sibling",
		"Memory of cured lycanthropy",
		"Raised by a hag",
		"Studied an eldritch tome",
		"Formerly possessed by a fiend",
		"Avenged a murder"
	],
};
BackgroundList["black fist double agent"] = {
	regExpSearch : /black\W*fist/i,
	name : "Black Fist Double Agent",
	source : ["AL:CoS", 2],
	skills : ["Deception", "Insight"],
	gold : 15,
	equipleft : [
		["Disguise kit", "", 3],
		["Tears of Virulence emblem", "", ""],
		["Writ of free agency", "", ""],
		["Set of artisan's tools or gaming set", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "Double Agent",
	trait : [
		"People are only as trustworthy as you are valuable to them. Always strive to be the most valuable person around.",
		"My eloquence and sophistication are tools I use to avoid arousing suspicion myself.",
		"I am a thrill-seeker, excited by covert and dangerous missions.",
		"I live by my wits and always check every lock twice, just to be certain.",
		"I never admit to my mistakes lest they be used against me.",
		"I take every effort to be unnoticeable and blend into the crowd. Passersby rarely give me a second look.",
		"I am prepared for any eventuality; including the day my usefulness as a spy comes to an end.",
		"I always make certain to know my enemy before acting, lest I bite off more than I can chew."
	],
	ideal : [
		["Suspicious", "Suspicious: In my experience, everybody has something to hide, and what they hide can usually hurt me. (Any)"],
		["Secretive", "Secretive: I trade in secrets, and am not about to let any of mine slip. (Any)"],
		["Hedonist", "Hedonist: Life is short. I live my life to the fullest, as I know any day could be my last. (Chaotic)"],
		["Selfless", "Selfless: I use my position to help the downtrodden avoid persecution from the authorities. (Good)"],
		["Patriotic" , "Patriotic: I am a loyal supporter of Phlan and its leaders, and see my role as a solemn duty and necessary evil to prevent anarchy. (Lawful)"],
		["Manipulative", "Manipulative: I use my knowledge to blackmail and manipulate others to my own benefit. (Evil)"]
	],
	bond : [
		"I was framed for a crime I did not commit, and seek to bring the true culprit to justice.",
		"I am a part of an underground network that smuggles innocent civilians out of the city prior to being raided by the authorities.",
		"I miss the glory days of Phlan, before the coming of the dragon.",
		"I seek to prove myself worthy of joining the Black Fist as a member of their order.",
		"My sister was killed by a Tear of Virulence, and now I feed them false information whenever possible.",
		"My family was wrongly imprisoned, and I act as an informant in order to secure their release."
	],
	flaw : [
		"I think too highly of myself, and have an exaggerated sense of self-importance.",
		"I have difficulty trusting strangers. I see spies and informants everywhere.",
		"Years of getting away with minor crimes has left me believing that I am above the law, and have diplomatic immunity above my station.",
		"Years of seeing innocent people suffer have left me despondent and pessimistic for the future.",
		"My desire for vengeance often gets me into trouble",
		"I am spendthrift, and share my wealth with the patrons of my favorite tavern."
	],
	toolProfs : ["Disguise Kit", ["Artisan's tools or gaming set", 1]],
	lifestyle : "modest"
};
BackgroundList["dragon casualty"] = {
	regExpSearch : /^(?=.*dragon)(?=.*casualty).*$/i,
	name : "Dragon Casualty",
	source : ["AL:CoS", 3],
	skills : ["Intimidation", "Survival"],
	toolProfs : ["Based on my origin"],
	gold : 5,
	equipleft : [
		["Loaf of moldy bread", "", 1],
		["Cast-off Vorgansharax scale", "", ""]
	],
	equipright : [
		["Tattered Rags", "", 3],
		["Dagger", "", 1],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "Dragonscarred",
	extra : [
		"Select an Origin (or Disfigurement)",
		"Dockworker",
		"Fisherman",
		"Tradesperson",
		"Merchant",
		"Black Fist Soldier",
		"Adventurer",
		"Visitor",
		"Entertainer",
		"Scholar",
		"Healer",
		"Criminal",
		"Unskilled laborer",
		"",
		"- Disfigurements (optional):",
		"Extensive scarring",
		"Small non-functional wing(s)",
		"Misshapen, wing-like membrane(s)",
		"Elongated, claw-like hand(s) or feet",
		"Painful green scales embedded in skin",
		"Bulbous, reptilian eye(s)",
		"Enlarged dorsal spines",
		"Small irregular spines instead of hair"
	],
	trait : [
		"I am driven to escape my past, and rarely stay in one place long.",
		"I know secrets of the Maimed Virulence, but fear the harm that may befall me should others learn them.",
		"Speaking of my ordeal helps sooth the still open wounds in my soul.",
		"My former life is meaningless, and was ripped to shreds by the claws of Vorgansharax. All that matters now is what I do with the future.",
		"I have faced the worst a dragon can deliver and survived. I am fearless, and my resolve unshakable.",
		"I am haunted my tortured past, and wake at night screaming at half-remembered horrors.",
		"I sleep with my back to a wall or tree, and a weapon within arm's reach.",
		"I am slow to trust, but incredibly loyal to those who have earned it."
	],
	ideal : [
		["Survivor", "Survivor: No matter the cost, I will take any action necessary to survive (any)"],
		["Independence", "Independence: When in trouble, the only person I can rely on is myself (Chaotic)"],
		["Compassionate", "Compassionate: I have suffered long at the hands of a Dragon, and take pitty and compassion on the suffering of others (Good)"],
		["Secretive", "Secretive: I am withdrawn, and hide my monstrous appearance for fear of drawing unwanted attention. (Chaotic)"],
		["Justice", "Justice: I have been wronged, and will not allow the same fate to befall others. (Lawful)"],
		["Sycophant", "Sycophant: During my ordeal, I became a willing servant of the Maimed Virulence, and spy on his behalf. (Evil)"]
	],
	bond : [
		"I have sworn vengeance on the Maimed Virulence and those that follow him.",
		"I long to reunite with friends and family who may dwell among the Phlan Refugees, and protect them.",
		"While a prisoner of the Maimed Virulence, I overheard rumors of an item or treasure the Dragon seeks. I will have that treasure for myself!",
		"I seek to reclaim and rebuild my former life to the best of my ability.",
		"I have been reborn as a child of Vorgansharax. I will claim my birthright as his chosen heir and successor.",
		"I attribute my survival to the work of the divine, and seek to prove myself worthy of the honor."
	],
	flaw : [
		"I have been touched with dragon-greed, and have a lust for wealth which can never be satisfied.",
		"I secretly believe others are plotting to harm me.",
		"I no longer enjoy the simple pleasures in life. Food is but ashes and bile in my throat.",
		"Anyone who refuses to celebrate my celebrity does not deserve my company.",
		"I am paranoid and overly suspicious of others. Anyone may be an agent of the Maimed Virulence.",
		"Once I make up my mind, I follow my chosen course of action regardless of the consequences."
	],
	languageProfs : ["Draconic"],
	lifestyle : "wretched"
};
BackgroundList["iron route bandit"] = {
	regExpSearch : /^(?=.*iron)(?=.*route)(?=.*bandit).*$/i,
	name : "Iron Route Bandit",
	source : ["AL:CoS", 5],
	skills : ["Animal Handling", "Stealth"],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"],
	gold : 5,
	equipleft : [
		["Backpack, with:", "", 5],
		["Bag of 1000 ball bearings", 1, 2],
		["String, feet of", 10, ""],
		["Bell", "", ""],
		["Candles", 5, ""],
		["Crowbar", "", 5],
		["Hammer", "", 3],
		["Pitons", 10, .25],
		["Hooded lantern", "", 2],
		["Oil, flasks of", 2, 1],
		["Rations, days of", 5, 2],
		["Tinderbox", "", 1],
		["Waterskin", "", 5],
		["Hempen rope, feet of", 50, 0.2]
	],
	equipright : [
		["Dark common clothes", "", 3],
		["Pack Saddle", "", ""],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "Black-Market Breeder",
	trait : [
		"If people leave their gear unsecured, they must not want it very much.",
		"I feel more comfortable sleeping under the open sky.",
		"I always pre-plan my escape should things go bad; I always like to have an exit strategy.",
		"I tend to give animal owners breeding and care advice whether or not they want it.",
		"I lost a pet as a child and sadly reflect on it to this day.",
		"I always form a powerful, emotional bond with my mount.",
		"I recoil at the thought of killing someone else's pet or mount.",
		"I prefer to hang to the back of a scuffle or discussion. Better to have my enemies in front of me."
	],
	ideal : [
		["Loyalty", "Loyalty: Never bite the hand that feeds. (Good)"],
		["Unpredictability", "Unpredictability: Keep your enemy guessing and off-balance like a confused deer. (Chaotic)"],
		["Power", "Power: I strive to become leader of the pack at all costs. (Lawful)"],
		["Freedom", "Freedom: I bow to no one I don't respect. (Chaotic)"],
		["Resourcefulness", "Resourcefulness: Our wits are our most valuable resource in troubled times. (Any)"],
		["Unity", "Unity: Lone wolves fail where the pack succeeds. (Any)"]
	],
	bond : [
		"I cannot leave a harmed animal behind; I must save it or put it out of its misery.",
		"I leave behind my own personal calling cards when I do a job.",
		"I do not trust people who do not have a pet, mount, or furry companion.",
		"The pelt I wear on my back was from an animal that died saving my life, I will always cherish it.",
		"If my pet does not like you, I do not like you!",
		"Once you've ridden with me and fought by my side, I'll be there for you odds be damned."
	],
	flaw : [
		"I talk to animals; I believe they understand me, even if they do not.",
		"I growl at and bite anyone who gets too close to my food while I am eating.",
		"I strongly dislike enclosed spaces and require intoxication or firm encouragement to enter them.",
		"I robbed the wrong caravan once. The owner is a powerful merchant who holds a grudge.",
		"I'm an inveterate gambler.",
		"I judge people based on how well they stand their ground in a fight. I got not time for cowards…"
	],
	lifestyle : "poor"
};
BackgroundList["phlan insurgent"] = {
	regExpSearch : /^(?=.*phlan)(?=.*insurgent).*$/i,
	name : "Phlan Insurgent",
	source : ["AL:CoS", 6],
	skills : ["Stealth", "Survival"],
	toolProfs : [["Artisan's tools", 1], "Vehicles (land)"],
	gold : 5,
	equipleft : [
		["Caltrops", 20, 0.1],
		["Small trinket of my life before", "", ""],
		["Healer's kit", "", 3]
	],
	equipright : [
		["Dark common clothes", "", 3],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "Guerilla",
	extra : [
		"Select an Origin",
		"Fisher",
		"Hunter",
		"Craftsperson",
		"Priest/Priestess",
		"Cook",
		"City Watch",
		"Servant",
		"Unskilled laborer",
		"Stojanow river worker",
		"Twilight Marsh worker",
		"Mantor's Library scribe",
		"Clergy of Ilmater",
		"Laughing Goblin server",
		"Black Fist guard",
		"House Sokol retainer",
		"Bay of Phlan dockworker"
	],
	trait : [
		"My patience knows no bounds, so long as my goal is in sight.",
		"In life and in struggle, the ends justify my actions.",
		"If you aren't helping me, you'd best at least stay out of my way.",
		"I long for the life that was taken away from me.",
		"Friends and family perished, tragically, before my eyes. I hope never to undergo that again.",
		"Making the right choices in life are important to me. The choices I make might save not just my life, but the lives of others as well.",
		"I can never allow my foes to get the drop on me.",
		"Time is a precious resource that I must spend wisely."
	],
	ideal : [
		["Leadership", "Leadership: The oppressed need someone to inspire them to courageous acts. (Good)"],
		["Unpredictability", "Unpredictability: Keeping the enemy guessing and off-balance is my tactical strength. (Chaos)"],
		["Determination", "Determination: Threats to my home must be eliminated at all costs. (Any)"],
		["Freedom", "Freedom: Those who are enslaved and unjustly imprisoned deserve my aid. (Good)"],
		["Resourcefulness", "Resourcefulness: Our wits are our most valuable resource in troubled times. (Any)"],
		["Unity", "Unity: Working together, we can overcome all obstacles, even the most seemingly insurmountable ones. (Any)"]
	],
	bond : [
		"I'll never let my fellow insurgents down. They are my only remaining friends.",
		"I was separated from a loved one during my escape from town. I will find them.",
		"One of the Tears of the Virulence was a trusted friend, until the day they betrayed the city. They will pay harshly for their transgressions.",
		"An item I hold close is my last remaining connection to the family I lost during the fall.",
		"The dragon who took my past life away from me will feel the full extent of my vengeance.",
		"The knowledge in Mantor's Library is an irreplaceable treasure that must be protected."
	],
	flaw : [
		"I have no respect for those who flee. I harbor a deep grudge against the citizens who abandoned Phlan.",
		"Ale is the only way I can escape the desperation of my circumstances.",
		"It doesn't take much to get me into a fight.",
		"Being an insurgent means doing things that aren't always ethical. I'm still learning to live with that.",
		"My desire to liberate Phlan oftentimes clouds my judgement, despite my best efforts.",
		"I relentlessly despise the Maimed Virulence and his allies. I'd abandon other goals in order to strike out at them"
	],
	lifestyle : "poor"
};
BackgroundList["stojanow prisoner"] = {
	regExpSearch : /^(?=.*stojanow)(?=.*prisoner).*$/i,
	name : "Stojanow Prisoner",
	source : ["AL:CoS", 8],
	skills : ["Deception", "Perception"],
	toolProfs : [["Gaming set", 1], ["Thieves' tools", "Dex"]],
	gold : 10,
	equipleft : [
		["Small knife", "", 0.25],
		["Small trinket from my life before", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "Ex-Convict",
	trait : [
		"I am a bully; others will suffer as I have.",
		"I always say yes even when I mean no; it's just easier.",
		"I aim to misbehave.",
		"I go out of my way to frustrate or anger those in power.",
		"I strive to obey the law. I will never again make the mistake of going against authority.",
		"I always plan everything out. The one time I let others plan things it did not end well for me.",
		"I take blame to protect others from pain.",
		"I horde information, you never know what may come in handy."
	],
	ideal : [
		["Loss", "Loss: I freely give those who offend me what was so brutally denied me, death. (Chaos)"],
		["Dedication", "Dedication: I never betray those who trust me. (Law)"],
		["Vengeance", "Vengeance: I use any means to get information I need; I have been well taught. (Evil)"],
		["Redemption", "Redemption: Everyone deserves a second chance. (Good)"],
		["Resilience", "Resilience: I can survive any challenge. (Any)"],
		["Leadership", "Leadership: The best teams are made up of those that society has discarded. (Any)"]
	],
	bond : [
		"I take up arms to help establish a free Phlan.",
		"The horrors of my time in Stojanow haunt my dreams, only after a day of hard work can I find sleep.",
		"I am indebted to those who freed me from prison, I will repay this debt.",
		"My torturer survived the attack that set me free, I will find him/her.",
		"I will not rest while others suffer fates similar to mine.",
		"I am searching for a way to heal the scars of Stojanow, both physical and emotional."
	],
	flaw : [
		"During stressful times, I find myself crying for no reason.",
		"My nerve endings are shot from the interrogations; I am numb to all but the harshest touch.",
		"I am incapable of standing up for myself.",
		"I folded under the torture, and gave information that I promised would be kept secret. My life would be in jeopardy if others found out.",
		"Survival is worth more than friendship.",
		"The ghosts from my past hinder my actions."
	],
	lifestyle : "poor"
};
BackgroundList["ticklebelly nomad"] = {
	regExpSearch : /^(?=.*ticklebelly)(?=.*nomad).*$/i,
	name : "Ticklebelly Nomad",
	source : ["AL:CoS", 9],
	skills : ["Animal Handling", "Nature"],
	toolProfs : ["Herbalism Kit"],
	gold : 5,
	equipleft : [
		["Herbalism kit", "", 3],
		["Small tribal jewelry", "", ""],
		["Hunting trap", "", 25]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "At Home in the Wild",
	trait : [
		"I eagerly inject myself into the unknown.",
		"Villages, towns, and cities do not suit me. I'd rather be out in the wilderness any day.",
		"I accomplish my tasks efficiently, using as few resources as possible.",
		"It's difficult for me to remain in one place for long.",
		"I loudly brag about my tribe every chance I get.",
		"Having walked among giants, I am fearless in the face of bigger creatures.",
		"I am quiet and reserved, but observant. Nothing escapes my attention.",
		"My word is my bond. I see a promise to completion, even if it conflicts with my beliefs."
	],
	ideal : [
		["Kinship", "Kinship: Family is most important in life. Though I may be far from my own, the bonds of family must be protected in others' lives as well. (Good)"],
		["Preservation", "Preservation: Nature must not be despoiled by encroaching civilization. (Any)"],
		["Wanderlust", "Wanderlust: One must expand their horizons by seeing the world and exploring. (Chaos)"],
		["Isolation", "Isolation: My tribe and its ways must be protected and shielded from outside influence. (Neutral)"],
		["Protection", "Protection: Threats to the land and to the people must be dealt with at any and all costs. (Law)"],
		["Belonging", "Belonging: All creatures have a place in the world, so I strive to help others find theirs. (Good)"]
	],
	bond : [
		"I ache to return to my tribe and the family I left, but cannot until my obligations are fulfilled.",
		"The dragon cultists that invaded my homeland stole away one of my tribe's people. I will not know rest until I've found them.",
		"The dragon's presence in the hills destroyed valuable territory and resulted in deaths within my tribe. The creature must pay for what it has done.",
		"I carry a trinket that spiritually and emotionally ties me to my people and my home.",
		"I discovered a strange relic in the hills during my tribe's wanderings. I must discover what it is.",
		"One of the stone giant clans from the Giant's Cairn has graced me with a mark of kinship."
	],
	flaw : [
		"I throw myself and my friends into situations rarely ever thinking about consequences.",
		"Unfamiliar people and surroundings put me on edge.",
		"I have absolutely no patience for slowpokes and those who prove indecisive.",
		"My desire to experience new things causes me to make unsafe choices.",
		"I am overly protective of nature, sometimes to the detriment of my companions and myself.",
		"My lack of worldliness often proves my undoing in social, commercial, and hostile situations."
	],
	languageProfs : ["Giant"],
	lifestyle : "poor"
};

// Background features
BackgroundFeatureList["at home in the wild"] = {
	description : "In the wilderness, my home, I can find a place to hide, rest, or recuperate that is secure enough to conceal me from most natural threats, but not all supernatural, magical, or threats that actively seek me out. However, this feature doesn't shield or conceal me from scrying, mental probing, nor from threats that don't need the five senses to find me.",
	source : ["AL:CoS", 9]
};
BackgroundFeatureList["black-market breeder"] = {
	description : "I know how to find people who are always looking for stolen animals and vehicles, for pit fights or getaways during an illegal job. This provides me with information of what such animals & vehicles are in high demand in the area, but also offer to give me favors and information (DM choice) if I bring such animals and vehicles to them.",
	source : ["AL:CoS", 5]
};
BackgroundFeatureList["double agent"] = {
	description : "I have a trusty contact in the Tears of Virulence garrison in Phlan to whom I pass information. In exchange, I get away with minor criminal offenses in Phlan. My Black Fists contacts can help me get an audience with the Lord Regent, the Lord Sage, Black Fists members, or deposed nobles who are sympathetic to the Phlan refugees and insurgents.",
	source : ["AL:CoS", 2]
};
BackgroundFeatureList["dragonscarred"] = {
	description : "My extensive scars from being tortured by Vorgansharax give me fame and notoriety, but it is difficult to disguise my appearance and hide from prying eyes. I can use this to gain access to people and places I might not otherwise have, for me and my companions. However, I fear that my afflictions are not completely mundane, as they burn and writhe.",
	source : ["AL:CoS", 3]
};
BackgroundFeatureList["ex-convict"] = {
	description : "The knowledge gained during my incarceration lets me gain insight into local guards and jailors. I know which will accept bribes, or look the other way for me. I can also seek shelter for myself from authorities with other criminals in the area.",
	source : ["AL:CoS", 8]
};
BackgroundFeatureList["guerilla"] = {
	description : "I've come to know the surrounding other natural features in which I can take refuge--or set up ambushes. I can quickly survey my environment for advantageous features. Additionally, I can scavenge around my natural surroundings to cobble together simple supplies (such as improvised torches, rope, patches of fabric, etc.) that are consumed after use.",
	source : ["AL:CoS", 6]
};
BackgroundFeatureList["heart of darkness"] = {
	description : "Those who look into my eyes can see that I have faced unimaginable horror and that I am no stranger to darkness. Though they might fear me, commoners will extend me every courtesy and do their utmost to help. Unless I have shown myself to be a danger to them, they will even take up arms to fight with me, should I find myself facing an enemy alone.",
	source : ["CoS", 209]
};

// Equipment pack
PacksList.monsterhunter = {
	name : "Monster hunter's pack (33 gp)",
	source : ["CoS", 209],
	items : [
		["Chest, with:", "", 25],
		["Crowbar", "", 5],
		["Hammer", "", 3],
		["Wooden stake", 3, 1],
		["Amulet holy symbol", "", ""],
		["Holy water, flasks of", 1, 1],
		["Manacles", "", 6],
		["Steel mirror", "", 0.5],
		["Oil, flasks of", 1, 1],
		["Tinderbox", "", 1],
		["Torches", 3, 1]
	]
};
var iFileName = "pub_20160906_SKT.js";
RequiredSheetVersion(12.999);
// This file adds the beasts from the Storm King's Thunder adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.SKT={
	name : "Storm King's Thunder [beasts]",
	abbreviation : "SKT",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/storm-kings-thunder",
	date : "2016/09/06"
};

// Creatures
CreatureList["crag cat"] = {
	name : "Crag Cat",
	source : ["SKT", 240],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 34,
	hd : [4, 10], //[#, die]
	speed : "40 ft",
	scores : [16, 17, 16, 4, 14, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 4,
		"stealth" : 7
	},
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [1, 10, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Can be used in combination with claw while pouncing (see Pounce trait)"
		}
	],
	traits : [{
			name : "Nondetection",
			description : "The crag cat can't be targeted or detected by any divination magic or perceived through magical scrying sensors."
		}, {
			name : "Pounce",
			description : "If the crag cat moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the crag cat can make one bite attack against it as a bonus action."
		}, {
			name : "Spell Turning",
			description : "The crag cat has advantage on saving throws against any spell that targets only the cat (not an area). If the crag cat's saving throw succeeds and the spell is of 7th level or lower, the spell has no effect on the crag cat and instead targets the caster."
		}
	],
	wildshapeString : "Darkvision 60 ft| Nondetection: can't be targeted or detected by divination magic or scrying| Pounce: if target is hit with a claw attack after moving 20 ft straight on the same turn, DC 13 Str save or knocked prone and can make one bite attack against it as a bonus action| Spell Turning: adv. on saves vs. spells that targets only me (not area). If successful and spell is 7th level or lower, no effect and instead targets the caster"
};
CreatureList["hulking crab"] = {
	name : "Hulking Crab",
	source : ["SKT", 240],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 17,
	hp : 76,
	hd : [8, 12], //[#, die]
	speed : "20 ft, swim 30 ft",
	scores : [19, 8, 16, 3, 11, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 2
	},
	senses : "Blindsight 30 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, "", "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : [-4, "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Amphibious",
			description : "The hulking crab can breate air and water."
		}, {
			name : "Shell Camouflage",
			description : "While the hulking crab remains motionless with its eyestalks and pincers tucked close to its body, it resembles a natural formation or a pile of detritus. A creature within 30 feet of it can discern its true nature with a DC 15 Intelligence (Nature) check."
		}
	]
};
CreatureList["tressym"] = {
	name : "Tressym",
	source : ["SKT", 242],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 5,
	hd : [2, 4], //[#, die]
	speed : "40 ft, climb 30 ft, fly 40 ft",
	scores : [3, 15, 10, 11, 12, 12], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 5,
		"stealth" : 4
	},
	damage_immunities : "poison",
	condition_immunities : "poisoned",
	senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using smell",
	passivePerception : 15,
	languages : "understands Common but can't speak",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, "", "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : [-4, "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Detect Invisibility",
			description : "Within 60 feet of the tressym, magical invisibility fails to conceal anything from the tressym's sight."
		}, {
			name : "Keen Smell",
			description : "The tressym has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name : "Poison Sense",
			description : "The tressym can detect whether a substance is poisonous by taste, touch, or smell."
		}
	],
	wildshapeString : "\u25C6 Languages: understands Common but can't speak.\n\u25C6 Senses: Darkvision 60 ft; Advantage on Wisdom (Perception) checks that rely on smell.\n\u25C6 Detect Invisibility: Magical invisibility fails to conceal anything from sight, out to 60 ft.\n\u25C6 Immune to: poison damage, poisoned condition.\n\u25C6 Poison Sense: Detect whether a substance is poisonous by taste, touch, or smell."
};
var iFileName = "pub_20161115_VGtM.js";
RequiredSheetVersion(12.999);
// This file adds all the player-material from Volo's Guide to Monsters to MPMB's Character Record Sheet

// Define the source
SourceList.V={
	name : "Volo's Guide to Monsters",
	abbreviation : "VGtM",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/volos-guide-to-monsters",
	date : "2016/11/15"
};

// Races
RaceList["fallen aasimar"] = {
	regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*fallen).*$/i,
	name : "Fallen Aasimar",
	source : ["V", 104],
	plural : "Fallen Aasimar",
	sortname : "Aasimar, Fallen",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Fallen Aasimar: +1 Strength, +2 Charisma;",
	scores : [1, 0, 0, 0, 0, 2],
	trait : "Fallen Aasimar (+1 Strength, +2 Charisma)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nNecrotic Shroud: Once per long rest when I'm 3rd level, I can use an action to transform, causing all within 10 ft of me to make a Cha" + (typePF ? "" : "risma") + " saving throw (DC 8 + Cha mod + Prof bonus) or be frightened of me until the end of my next turn This lasts for 1 minute or until I end it as a bonus action. Once on my turn I can have one of my attacks or spells deals my level in extra necrotic damage to one target.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		atwill : true
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : ["1 HP", "2 HP", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
			action : ["action", ""]
		},
		"necrotic shroud" : {
			name : "Necrotic Shroud",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : ["", "", "+3 damage", "+4 damage", "+5 damage", "+6 damage", "+7 damage", "+8 damage", "+9 damage", "+10 damage", "+11 damage", "+12 damage", "+13 damage", "+14 damage", "+15 damage", "+16 damage", "+17 damage", "+18 damage", "+19 damage", "+20 damage"],
			action : ["action", " (start)"],
			eval : "AddAction('bonus action', 'Necrotic Shroud (end)', 'being a Fallen Aasimar');",
			removeeval : "RemoveAction('bonus action', 'Necrotic Shroud (end)');"
		}
	}
};
RaceList["protector aasimar"] = {
	regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*protector).*$/i,
	name : "Protector Aasimar",
	source : ["V", 104],
	plural : "Protector Aasimar",
	sortname : "Aasimar, Protector",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Protector Aasimar: +1 Wisdom, +2 Charisma;",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Protector Aasimar (+1 Wisdom, +2 Charisma)\nLight Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRadiant Soul: Once per long rest when I'm 3rd level, I can use an action to transform, gaining glimmer in my eyes and two incorporeal wings. For 1 minute or until I end it as a bonus action, I have 30 feet fly speed; once on my turn I can have one of my attacks or spells deal my level in extra radiant damage to one target.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		atwill : true
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : ["1 HP", "2 HP", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
			action : ["action", ""]
		},
		"radiant soul" : {
			name : "Radiant Soul",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : ["", "", "+3 damage", "+4 damage", "+5 damage", "+6 damage", "+7 damage", "+8 damage", "+9 damage", "+10 damage", "+11 damage", "+12 damage", "+13 damage", "+14 damage", "+15 damage", "+16 damage", "+17 damage", "+18 damage", "+19 damage", "+20 damage"],
			action : ["action", " (start)"],
			eval : "AddAction('bonus action', 'Radiant Soul (end)', 'being a Protector Aasimar');",
			removeeval : "RemoveAction('bonus action', 'Radiant Soul (end)');"
		}
	}
};
RaceList["scourge aasimar"] = {
	regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*scourge).*$/i,
	name : "Scourge Aasimar",
	source : ["V", 104],
	plural : "Scourge Aasimar",
	sortname : "Aasimar, Scourge",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Scourge Aasimar: +1 Constitution, +2 Charisma;",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Scourge Aasimar (+1 Constitution, +2 Charisma)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRadiant Consumption: Once per long rest when I'm 3rd level, I can use an action to radiate bright light in 10-ft radius and dim light for another 10-ft, for 1 minute or until I end it as a bonus action. Once on my turn my attack or spell deals my level in extra radiant damage to one target, and at the end of my turns all creatures within 10 ft of me, including myself, take half my level in radiant damage.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		atwill : true
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : ["1 HP", "2 HP", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
			action : ["action", ""]
		},
		"radiant consumption" : {
			name : "Radiant Consumption",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) {
				if (n < 3) return ""
				return  Math.ceil(n/2) + "/" + n + " damage";
			}),
			action : ["action", " (start)"],
			eval : "AddAction('bonus action', 'Radiant Consumption (end)', 'being a Scourge Aasimar');",
			removeeval : "RemoveAction('bonus action', 'Radiant Consumption (end)');"
		}
	}
};
RaceList["bugbear"] = {
	regExpSearch : /bugbear/i,
	name : "Bugbear",
	source : ["V", 119],
	plural : "Bugbears",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	skills : ["Stealth"],
	age : " rearch adulthood at age 16 and live up to 80 years",
	height : " are between 6 and 8 feet tall (6'0\" + 2d12\")",
	weight : " weigh between 250 and 350 lb (200 + 2d12 \xD7 2d6 lb)",
	heightMetric : " are between 1,9 and 2,4 metres tall (185 + 5d12 cm)",
	weightMetric : " weigh between 115 and 160 kg (90 + 5d12 \xD7 4d6 / 10 kg)",
	improvements : "Bugbear: +2 Strength, +1 Dexterity;",
	scores : [2, 1, 0, 0, 0, 0],
	features : {
		"surprise attack" : {
			name : "Surprise Attack (2d6)",
			minlevel : 1,
			usages : 1,
			recovery : "Combat",
			tooltip : ""
		}
	},
	trait : "Bugbear (+2 Strength, +1 Dexterity)\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\nLong-Limbed: I have an additional 5 feet reach with melee attacks that I make on my turn.\nSurprise Attack: If I hit a surprised creature on my first turn in combat, that attack deals an extra 2d6 damage. I can do this only once per combat.",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
RaceList["firbolg"] = {
	regExpSearch : /firbolg/i,
	name : "Firbolg",
	source : ["V", 106],
	plural : "Firbolg",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish", "Giant"],
	age : " reach adulthood around 30 and can live for 500 years",
	height : " are between 6 and half and 8 feet tall (6'2\" + 2d12\")",
	weight : " weigh between 240 and 300 lb (175 + 2d12 \xD7 2d6 lb)",
	heightMetric : " are between 2 and 2,5 metres tall (190 + 5d12 cm)",
	weightMetric : " weigh between 110 and 135 kg (80 + 5d12 \xD7 4d6 / 10 kg)",
	improvements : "Firbolg: +1 Strength, +2 Wisdom;",
	scores : [1, 0, 0, 0, 2, 0],
	trait : "Firbolg (+1 Strength, +2 Wisdom)" + (typePF ? "\n" : " ") + "Hidden Step: Once per short rest, as a bonus action, I turn invisible until the start of my next turn as per the invisibility spell.\nPowerful Build: I count as one size larger for the weight I can carry.\nFirbolg Magic: I can cast the Detect Magic and Disguise Self spells each once per short rest. With Disguise Self I can seem up to 3 feet shorter. Wisdom is my ability for these spells.\nSpeech of Beast and Leaf: I can make my words understood, in a limited manner, by beasts and plants. I have advantage on Charisma checks to influence them.",
	spellcastingAbility : 5,
	features : {
		"firbolg magic (detect magic)" : {
			name : "Firbolg Magic (Detect Magic)",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : " (Firbolg Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Firbolg Magic",
				spells : ["detect magic"],
				selection : ["detect magic"],
				oncesr : true
			}
		},
		"firbolg magic (disguise self)" : {
			name : "Firbolg Magic (Disguise Self)",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : " (Firbolg Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Firbolg Magic",
				spells : ["disguise self"],
				selection : ["disguise self"],
				oncesr : true
			}
		},
		"hidden step" : {
			name : "Hidden Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : " (Hidden Step)",
			action : ["bonus action", ""]
		}
	},
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
RaceList["goblin"] = {
	regExpSearch : /^(?=.*\bgoblins?\b)(?!.*hobgoblin|bugbear).*$/i,
	name : "Goblin",
	source : ["V", 119],
	plural : "Goblins",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " rearch adulthood at age 8 and live up to 60 years",
	height : " are between 3 and a half and 4 feet tall (3'5\" + 2d4\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1d4 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2d4 / 10 kg)",
	improvements : "Goblin: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	features : {
		"fury of the small" : {
			name : "Fury of the Small",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			additional : ["+1 damage", "+2 damage", "+3 damage", "+4 damage", "+5 damage", "+6 damage", "+7 damage", "+8 damage", "+9 damage", "+10 damage", "+11 damage", "+12 damage", "+13 damage", "+14 damage", "+15 damage", "+16 damage", "+17 damage", "+18 damage", "+19 damage", "+20 damage"],
			tooltip : ""
		},
		"nimble escape" : {
			name : "Nimble Escape",
			minlevel : 1,
			action : ["bonus action", " (disengage/hide)"]
		}
	},
	trait : "Goblin (+2 Dexterity, +1 Constitution)\n\nFury of the Small: Once per short rest, when I hit a creature of a size category larger than mine, I deal extra damage equal to my level.\n\nNimble Escape: As a bonus action, I can take the Disengage or Hide action."
};
RaceList["goliath"] = {
	regExpSearch : /goliath/i,
	name : "Goliath",
	source : [["E", 11], ["V", 108]],
	plural : "Goliaths",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Giant"],
	skills : ["Athletics"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " are between 6 and a half and 8 feet tall (6'2\" + 2d10\")",
	weight : " weigh between 280 and 340 lb (200 + 2d10 \xD7 2d6 lb)",
	heightMetric : " are between 2 and 2,4 metres tall (190 + 5d10 cm)",
	weightMetric : " weigh between 100 and 155 kg (90 + 5d10 \xD7 4d6 / 10 kg)",
	improvements : "Goliath: +2 Strength, +1 Constitution;",
	scores : [2, 0, 1, 0, 0, 0],
	features : {
		"stone's endurance" : {
			name : "Stone's Endurance",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["reaction", ""]
		}
	},
	trait : "Goliath (+2 Strength, +1 Constitution)" + (typePF ? "\n" : "") + "\nStone's Endurance: Once per short rest, when I take damage, I can use my reaction to reduce the damage by 1d12 + my Con" + (typePF ? "" : "stitution") + " modifier." + (typePF ? "\n" : "") + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + (typePF ? "\n" : "") + "\nMountain Born: I'm acclimated to high altitude, including elevations above 20000 feet. I'm also naturally adapted to cold climates.",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
RaceList["hobgoblin"] = {
	regExpSearch : /hobgoblin/i,
	name : "Hobgoblin",
	source : ["V", 119],
	plural : "Hobgoblins",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	armor : [true, false, false, false],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh between 150 and 200 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh between 70 and 90 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Hobgoblin: +2 Constitution, +1 Intelligence;",
	scores : [0, 0, 2, 1, 0, 0],
	features : {
		"saving face" : {
			name : "Saving Face",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : ""
		}
	},
	trait : "Hobgoblin (+2 Constitution, +1 Intelligence)\n\nMartial Training: I am proficient with two martial weapons of my choice and light armor.\n\nSaving Face: Once per short rest, when I miss an attack roll or fail an ability check or a saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30 feet of me (max +5)."
};
RaceList["kenku"] = {
	regExpSearch : /kenku/i,
	name : "Kenku",
	source : ["V", 109],
	plural : "Kenku",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Acrobatics, Deception, Stealth, and Sleight of Hand.",
	languageProfs : ["Common", "Auran"],
	age : " reach maturity at about 12 years old and can live to 60",
	height : " are around 5 feet tall (4'4\" + 2d8\")",
	weight : " weigh between 90 and 120 lb (70 + 2d8 \xD7 1d4 lb)",
	heightMetric : " are around 1,5 metres tall (135 + 5d8 cm)",
	weightMetric : " weigh between 40 and 55 kg (35 + 5d8 \xD7 2d4 / 10 kg)",
	improvements : "Kenku: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Kenku (+2 Dexterity, +1 Wisdom)" + (typePF ? "\n" : "") + "\nExpert Forgery: Kenku can duplicate other creatures' handwriting and craftwork. I have advantage on all checks made to produce forgeries or duplicates of existing objects." + (typePF ? "\n" : "") + "\nMimicry: I can mimic any sounds I have heard, including voices, but can otherwise not speak. Creatures hearing these sounds can determine they are imitations with a successful Wisdom (Insight) check opposed by my Charisma (Deception)."
};
RaceList["kobold"] = {
	regExpSearch : /kobold/i,
	name : "Kobold",
	source : ["V", 119],
	plural : "Kobolds",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	vision : [["Darkvision", 60], ["Sunlight Sensitivity", 0]],
	age : " reach adulthood at age 6 and can live up to 120 years, but rarely do so",
	height : " are between 2 and 3 feet tall (2'1\" + 2d4\")",
	weight : " weigh between 25 and 35 lb (25 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 65 and 90 cm tall (63 + 5d4 cm)",
	weightMetric : " weigh between 10 and 15 kg (11 + 5d4 \xD7 2 / 10 kg)",
	improvements : "Kobold: -2 Strength, +2 Dexterity;",
	scores : [-2, 2, 0, 0, 0, 0],
	features : {
		"grovel, cower, and beg" : {
			name : "Grovel, Cower, and Beg",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["action", ""]
		}
	},
	trait : "Kobold (-2 Strength, +2 Dexterity)\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nGrovel, Cower, and Beg: As an action, I can distract all foes within 10 feet of me that can see me so that my allies gain advantage on attack rolls against them.\nPack Tactics: I have advantage on attack rolls against creatures when at least one of my allies is within 5 feet of that creature and that ally is not incapacitated."
};
RaceList["lizardfolk"] = {
	regExpSearch : /lizard(folk|man|men)/i,
	name : "Lizardfolk",
	source : ["V", 111],
	plural : "Lizardfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Animal Handling, Nature, Perception, Stealth, and Survival.",
	languageProfs : ["Common", "Draconic"],
	weapons : ["bite"],
	addarmor : "Natural Armor",
	age : " reach maturity around age 14 and rarely live longer than 60 years",
	height : " range from 5 to well over 6 feet tall (4'9\" + 2d10\")",
	weight : " weigh around 200 lb (120 + 2d10 \xD7 2d6 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 95 kg (55 + 5d10 \xD7 4d6 / 10 kg)",
	improvements : "Lizardfolk: +2 Constitution, +1 Wisdom;",
	scores : [0, 0, 2, 0, 1, 0],
	features : {
		"cunning artisan" : {
			name : "Cunning Artisan",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : ""
		},
		"hungry jaws" : {
			name : "Hungry Jaws",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""]
		}
	},
	trait : "Lizardfolk (+2 Constitution, +1 Wisdom) Bite: I can use my fanged maw to make unarmed strikes dealing 1d6 piercing damage." + (typePF ? "\n" : " ") + "Cunning Artisan: As part of a short rest I can harvest parts of a slain creature to make a shield, club, javelin, or 1d4 darts/blowgun needles. This requires a suitable corpse and appropriate tools." + (typePF ? "\n" : " ") + "Hold Breath: I can hold my breath for up to 15 minutes at a time." + (typePF ? "\n" : " ") + "Natural Armor: I have an AC of 13 + Dexterity modifier + shield." + (typePF ? "\n" : " ") + "Hungry Jaws: As a bonus action, once per short rest, I can make a special bite attack and if it hits I gain temporary HP equal to my Con modifier (min 1)."
};
RaceList["orc"] = {
	regExpSearch : /^(?!.*half)(?=.*\bor(c|k)).*$/i,
	name : "Orc",
	source : ["V", 120],
	plural : "Orcs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Orc"],
	vision : [["Darkvision", 60]],
	skills : ["Intimidation"],
	age : " reach adulthood at age 12 and live up to 50 years",
	height : " are usually over 6 feet tall (5'4\" + 2d8\")",
	weight : " weigh between 230 and 280 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " are usually over 1,8 metres tall (160 + 5d8 cm)",
	weightMetric : " weigh between 100 and 125 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	improvements : "Orc: +2 Strength, +1 Constitution, -2 Intelligence;",
	scores : [2, 0, 1, -2, 0, 0],
	features : {
		"aggressive" : {
			name : "Aggressive",
			minlevel : 1,
			action : ["bonus action", " (dash to enemy)"]
		}
	},
	trait : "Orc (+2 Strength, +1 Constitution, -2 Intelligence)\n\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\n\nAggressive: As a bonus action, I can move up to my speed toward an enemy that I can see or hear. I must end my move closer to this enemy than I started.",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
RaceList["tabaxi"] = {
	regExpSearch : /tabaxi/i,
	name : "Tabaxi",
	source : ["V", 113],
	plural : "Tabaxi",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 20, enc : 10 }
	},
	skills : ["Perception", "Stealth"],
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	weapons : ["cat's claws"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from 5 to well over 6 feet tall (4'10\" + 2d10\")",
	weight : " weigh around 150 lb (90 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Tabaxi: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	features : {
		"feline agility" : {
			name : "Feline Agility",
			minlevel : 1,
			usages : 1,
			recovery : " Turn",
			additional : "still for 1 turn to recover",
			tooltip : " (can be replenished by not moving for one whole turn)"
		}
	},
	trait : "Tabaxi (+2 Dexterity, +1 Charisma)\n\nCat's Claws: I can use my fanged claws to make unarmed strikes dealing 1d4 slashing damage. They also give me a climbing speed of 20 feet.\n\nFeline Agility: When moving on my turn in combat, I can move double my speed. Once I do this, I can't do it again until I don't move at all on one of my turns."
};
RaceList["triton"] = {
	regExpSearch : /triton/i,
	name : "Triton",
	source : ["V", 115],
	plural : "Triton",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Primordial"],
	dmgres : ["Cold"],
	age : " reach maturity around age 15 and can live up to 200 years",
	height : " are around 5 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 150 lb (90 + 2d10 \xD7 2d4 lb)",
	heightMetric : " are around 1,6 metres tall (135 + 5d10 cm)",
	weightMetric : " weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Triton: +1 Strength, +1 Constitution, +1 Charisma;",
	scores : [1, 0, 1, 0, 0, 1],
	trait : "Triton (+1 Strength, +1 Constitution +1 Charisma)\nControl Air and Water: I can cast the Fog Cloud spell. Once I reach 3rd level, I can cast the Gust of Wind spell. Once I reach 5th level, I can cast the Wall of Water spell. All three spells can be used once per long rest. Charisma is my spellcasting ability for these spells.\nEmissary of the Sea: I can communicate simple ideas to beasts that can breathe water.\nGuardians of the Depths: I have resistance to cold damage and ignore all drawbacks from a deep, underwater environment." + (typePF ? "\n" : " ") + "Amphibious: I can breathe air and water.",
	abilitySave : 6,
	spellcastingAbility : 6,
	features : {
		"fog cloud" : {
			name : "Fog Cloud",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Control Air and Water)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Control Air and Water (1)",
				spells : ["fog cloud"],
				selection : ["fog cloud"],
				oncelr : true
			}
		},
		"gust of wind" : {
			name : "Gust of Wind",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Control Air and Water)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Control Air and Water (3)",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
				oncelr : true
			}
		},
		"wall of water" : {
			name : "Wall of Water",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Control Air and Water)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Control Air and Water (5)",
				spells : ["wall of water"],
				selection : ["wall of water"],
				oncelr : true
			}
		}
	}
};
RaceList["yuan-ti pureblood"] = {
	regExpSearch : /^(?=.*yuan.ti)(?=.*pure.?blood).*$/i,
	name : "Yuan-Ti Pureblood",
	source : ["V", 120],
	plural : "Yuan-Ti Purebloods",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Abyssal", "Draconic"],
	vision : [["Darkvision", 60]],
	savetxt : {
		immune : ["poison"],
		adv_vs : ["magic"]
	},
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Yuan-Ti Pureblood: +1 Intelligence, +2 Charisma;",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Yuan-Ti Pureblood (+1 Intelligence, +2 Charisma)\n\nInnate Spellcasting:\n   I know the Poison Spray cantrip.\n   I can cast the spell Animal Friendship on snakes at will.\n   Once I reach 3rd level, I can cast the Suggestion spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Innate Spellcasting (1)",
		spells : ["poison spray"],
		selection : ["poison spray"],
		atwill : true
	},
	features : {
		"animal friendship" : {
			name : "Animal Friendship",
			minlevel : 1,
			action : ["action", " (on snakes)"],
			spellcastingBonus : {
				name : "Innate Spellcasting (1)",
				spells : ["animal friendship"],
				selection : ["animal friendship"],
				atwill : true
			}
		},
		"suggestion" : {
			name : "Suggestion",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Innate Spellcasting)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Innate Spellcasting (3)",
				spells : ["suggestion"],
				selection : ["suggestion"],
				oncelr : true
			}
		}
	}
};

// Racial weapons (lizardfolk bite and tabaxi claw)
WeaponsList["bite"] = {
	regExpSearch : /\bbite\b/i,
	name : "Bite",
	source : ["V", 112],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["claws"] = {
	regExpSearch : /^(?=.*\b(sharp|cat|dragon|retractable|tortle))(?=.*\bclaws?\b).*$/i,
	name : "Sharp Claws",
	source : [["V", 115], ["UA:FR", 2], ["TP", 4], ["X", 74]],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};

// Creatures
CreatureList["aurochs"] = {
	name : "Aurochs",
	source : ["V", 207],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 11,
	hp : 38,
	hd : [4, 10], //[#, die]
	speed : "50 ft",
	scores : [20, 10, 19, 2, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 11,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [2, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Charge trait"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the aurochs moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. A targeted creature must succeed on a DC 15 Strength saving throw or be knocked prone."
		}
	]
};
CreatureList["cow"] = {
	name : "Cow",
	source : ["V", 207],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the cow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}
	]
};
CreatureList["ox"] = {
	name : "Ox",
	source : ["V", 208],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the ox moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}, {
			name : "Beast of Burden",
			description : "The oxen is considered to be a Huge animal for the purpose of determining its carrying capacity."
		}
	]
};
CreatureList["deep rothe"] = {
	name : "Deep Roth\xE9",
	source : ["V", 208],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 13,
	hd : [2, 8], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the deep roth\xE9 moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}, {
			name : "Innate Spellcasting",
			description : "The deep roth\xE9's spellcasting ability is Charisma. It can innately cast Dancing Lights at will, requiring no components."
		}
	]
};
CreatureList["rothe"] = {
	name : "Roth\xE9",
	source : ["V", 208],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 30 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the Roth\xE9 moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}
	]
};
CreatureList["stench kow"] = {
	name : "Stench Kow",
	source : ["V", 208],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	damage_resistances : "cold, fire, and poison damage",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the stench kow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}, {
			name : "Stench",
			description : "Any creature other than a stench kow starting its turn within 5 ft of a stench kow must make a DC 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all stench kows for 1 hour."
		}
	],
	wildshapeString : "Darkvision 60 ft | Resistant to: cold, fire, poison | Charge: If the stench kow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, it deals extra 2d6 piercing damage | Stench: Any creature starting its turn within 5 ft of a stench kow must take a DC 12 Con save or be poisoned until the start of the its next turn. On a success, it is immune to the stench of all stench kows for 1 hour"
};
CreatureList["dolphin"] = {
	name : "Dolphin",
	source : ["V", 208],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 11,
	hd : [2, 8], //[#, die]
	speed : "swim 60 ft",
	scores : [14, 13, 13, 6, 12, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "Blindsight 60 ft",
	passivePerception : 13,
	languages : "",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Slam",
			ability : 1,
			damage : [1, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 30 ft straight in the same round, deals extra 1d6 damage (Charge)"
		}
	],
	traits : [{
			name : "Charge",
			description : "If the dolphin moves at least 30 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 3 (1d6) bludgeoning damage."
		}, {
			name : "Hold Breath",
			description : "The dolphin can hold its breath for 20 minutes."
		}
	]
};
CreatureList["cranium rat"] = {
	name : "Cranium Rat",
	source : ["V", 133],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Lawful Evil",
	ac : 12,
	hp : 2,
	hd : [1, 4], //[#, die]
	speed : "30 ft",
	scores : [2, 14, 10, 4, 11, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 30 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["", "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Illumination",
			description : "As a bonus action, the cranium rat can shed dim light from its brain in a 5-foot radius or extinguish the light."
		}, {
			name : "Telepathic Shroud",
			description : "The cranium rat is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells."
		}
	]
};
CreatureList["brontosaurus"] = {
	name : "Brontosaurus",
	source : [["V", 139], ["ToA", 215]],
	size : 0, //Gargantuan
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 15,
	hp : 121,
	hd : [9, 20], //[#, die]
	speed : "30 ft",
	scores : [21, 9, 17, 2, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", 6, "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 1,
	attacks : [{
			name : "Stomp",
			ability : 1,
			damage : [5, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (20 ft)",
			description : "Target must succeed on a DC 14 Strength saving throw or be knocked prone"
		}, {
			name : "Tail",
			ability : 1,
			damage : [6, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (20 ft)",
			description : ""
		}
	]
};
CreatureList["deinonychus"] = {
	name : "Deinonychus",
	source : [["V", 139], ["ToA", 217]],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 26,
	hd : [4, 8], //[#, die]
	speed : "40 ft",
	scores : [15, 15, 14, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "",
	passivePerception : 13,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 3,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two claw and one bite as one Attack action; If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two claw and one bite as one Attack action (also, see Pounce trait)"
		}
	],
	traits : [{
			name : "Multiattack",
			description : "The deinonychus makes three attacks: two with its claws and one with its bite."
		}, {
			name : "Pounce",
			description : "If the deinonychus moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the deinonychus can make one bite attack against it as a bonus action."
		}
	]
};
CreatureList["dimetrodon"] = {
	name : "Dimetrodon",
	source : [["V", 139], ["ToA", 217]],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 19,
	hd : [3, 8], //[#, die]
	speed : "30 ft, swim 20 ft",
	scores : [14, 10, 15, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	]
};
CreatureList["hadrosaurus"] = {
	name : "Hadrosaurus",
	source : [["V", 140], ["ToA", 224]],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 11,
	hp : 19,
	hd : [3, 10], //[#, die]
	speed : "40 ft",
	scores : [15, 10, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Tail",
			ability : 1,
			damage : [1, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	]
};
CreatureList["quetzalcoatlus"] = {
	name : "Quetzalcoatlus",
	source : [["V", 140], ["ToA", 230]],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 30,
	hd : [4, 12], //[#, die]
	speed : "10 ft, fly 80 ft",
	scores : [15, 13, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [3, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : "If used after diving 30 ft towards a target, the attack deals 3d6 extra damage (Dive Attack)"
		}
	],
	traits : [{
			name : "Dive Attack",
			description : "If the quetzalcoatlus is flying and dives at least 30 ft toward a creature and then hits it with a bite attack, the attack deals an extra 10 (3d6) damage to the target."
		}, {
			name : "Flyby",
			description : "The quetzalcoatlus doesn't provoke opportunity attacks when it flies out of an enemy's reach."
		}
	]
};
CreatureList["stegosaurus"] = {
	name : "Stegosaurus",
	source : [["V", 140], ["ToA", 231]],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 76,
	hd : [8, 12], //[#, die]
	speed : "40 ft",
	scores : [20, 9, 17, 2, 11, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [6, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : ""
		}
	]
};
CreatureList["velociraptor"] = {
	name : "Velociraptor",
	source : [["V", 140], ["ToA", 235]],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 10,
	hd : [3, 4], //[#, die]
	speed : "30 ft",
	scores : [6, 14, 13, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "",
	passivePerception : 13,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One bite and one claw attack as an Attack action"
		}, {
			name : "Claw",
			ability : 2,
			damage : [1, 4, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One bite and one claw attack as an Attack action"
		}
	],
	traits : [{
			name : "Pack Tactics",
			description : "The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}
	]
};
CreatureList["gazer"] = {
	name : "Gazer",
	source : ["V", 126],
	size : 5, //Tiny
	type : "Aberration",
	subtype : "",
	alignment : "Neutral Evil",
	ac : 13,
	hp : 13,
	hd : [3, 4], //[#, die]
	speed : "0 ft, fly 30 ft",
	scores : [3, 17, 14, 3, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", 2, ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 4,
		"stealth" : 5
	},
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}, {
			name : "Eye Rays",
			ability : 3,
			damage : ["Special", "", ""], //[#, die, type] "" for die is allowed
			range : "60 ft",
			description : "Shoot two randomly determined different rays as one action; Each ray has its own target; See traits",
			dc : true,
			modifiers : ["", "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Aggressive",
			description : "As a bonus action, the gazer moves its speed toward an enemy that it can see."
		}, {
			name : "Mimicry",
			description : "The gazer can mimic simple speech it has heard, in any language. Any who hear this can tell it is an imitation with a successful DC 10 Wis (Insight) check."
		}
	],
	actions : [{
			name : "Eye Rays",
			description : "1. Dazing Ray: Wisdom saving throw or charmed until the start of the gazer's next turn. While charmed, half speed and disadv. on attacks.\n2. Fear Ray: Wisdom saving throw or frightened until the start of the gazer's next turn.\n3. Frost Ray: Target must make a Dexterity saving throw or 10 (3d6) cold damage.\n4. Telekinetic Ray: Medium or smaller creature, Strength saving throw or be moved up to 30 ft away from the gazer. If it is an up to 10 lb unattended object, the gazer moves it up to 30 ft in any direction. It can exert fine control on objects this way."
		}
	]
};
var iFileName = "pub_20170404_TotYP.js";
RequiredSheetVersion(12.999);
// This file adds the beasts from the Tales of the Yawning Portal adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.TotYP={
	name : "Tales of the Yawning Portal [beasts]",
	abbreviation : "TotYP",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tales-yawning-portal",
	date : "2017/04/04"
};

// Creatures
CreatureList["giant crayfish"] = {
	name : "Giant Crayfish",
	source : ["TotYP", 235],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 15,
	hp : 45,
	hd : [7, 10], //[#, die]
	speed : "30 ft, swim 30 ft",
	scores : [15, 13, 13, 1, 9, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 3
	},
	senses : "Blindsight 30 ft",
	passivePerception : 9,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Target grappled on hit (escape DC 12); 2 claw attacks as Attack action, if not grappling with claw"
		}
	],
	traits : [{
			name : "Amphibious",
			description : "The giant crayfish can breathe air and water."
		}
	]
};
CreatureList["giant ice toad"] = {
	name : "Giant Ice Toad",
	source : ["TotYP", 235],
	size : 2, //Large
	type : "Monstrosity",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 52,
	hd : [7, 10], //[#, die]
	speed : "30 ft",
	scores : [16, 13, 14, 8, 10, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	damage_immunities : "cold",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "Ice Toad",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Target is grappled and restrained (escape DC 13); Can't use bite again until grapple ends"
		}
	],
	traits : [{
			name : "Amphibious",
			description : "The toad can breathe air and water"
		}, {
			name : "Cold Aura",
			description : "A creature that starts its turn within 10 feet of the toad takes 5 (1d10) cold damage."
		}, {
			name : "Standing Leap",
			description : "The toad's long jump is up to 20 ft and its high jump is up to 10 ft, with or without a running start."
		}
	],
	features : [{
			name : "Swallow",
			description : "The toad can make a bite attack against a Medium or smaller target it is grappling. If it hits, the target takes bite damage, is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage and 11 (2d6) cold damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.\nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
		}
	],
	wildshapeString : "Darkvision 60 ft| Cold Aura: Any within 5 ft at start of their turn take 1d10 cold damage| Amphibious: breathe air and water| Standing Leap: long jump 20 ft and high jump 10 ft, regardless of start| Swallow: if bite attack hits Medium or smaller being grappling, it takes bite damageand is swallowed: blinded, restrained, total cover, takes 3d6 acid and 2d6 cold damage at the start of each of the toad's turns; Only 1 swallowed at a time."
};
CreatureList["giant lightning eel"] = {
	name : "Giant Lightning Eel",
	source : ["TotYP", 236],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 42,
	hd : [5, 10], //[#, die]
	speed : "5 ft, swim 30 ft",
	scores : [11, 17, 16, 2, 12, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	damage_resistances : "lightning",
	senses : "Blindsight 60 ft",
	passivePerception : 11,
	languages : "",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two bite attacks as an Attack action; +1d8 lightning damage on a hit"
		}, {
			name : "Lightning Jolt (Recharge 5-6)",
			ability : 3,
			damage : [3, 8, "lightning"], //[#, die, type] "" for die is allowed
			range : "Out/in 5/15 ft",
			dc : true,
			description : "Out water: 5 ft, 1 crea; In water: all in 15 ft; Con save: fail― stunned until eel's next turn end, success― half damage",
			modifiers : [-1, "", false], //[to hit, to damage, add ability to damage] "" means ignore
			tooltip : "One creature the eel touches within 5 feet of it outside water, or each creature within 15 feet of it in a body of water, must make a DC 12 Constitution saving throw. On failed save, a target takes 13 (3d8) lightning damage. If the target takes any of this damage, the target is stunned until the end of the eel's next turn. On a successful save, a target takes half as much damage and isn't stunned"
		}
	],
	traits : [{
			name : "Water Breathing",
			description : "The eel can breathe only underwater."
		}
	],
	actions : [{
			name : "Lightning Jolt (Recharge 5-6)",
			description : "See Attack. One creature the eel touches within 5 feet of it outside water, or each creature within 15 feet of it in a body of water, must make a DC 12 Constitution saving throw. On failed save, a target takes 13 (3d8) lightning damage. If the target takes any of this damage, the target is stunned until the end of the eel's next turn. On a successful save, a target takes half as much damage and isn't stunned"
		}
	]
};
CreatureList["giant subterranean lizard"] = {
	name : "Giant Subterranean Lizard",
	source : ["TotYP", 236],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 66,
	hd : [7, 12], //[#, die]
	speed : "30 ft, swim 50 ft",
	scores : [21, 9, 17, 2, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 3
	},
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 10, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "1 bite \u0026 1 tail attack as Attack action; Target grappled \u0026 restrained (escape DC 15); Can't use bite until grapple ends"
		}, {
			name : "Tail",
			ability : 1,
			damage : [2, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : "1 bite \u0026 1 tail attack as Attack action; Target DC 15 Str save or knocked prone"
		}
	],
	traits : [{
			name : "Swallow",
			description : "The lizard can make one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target takes bite damage, is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the lizard, and it takes 10 (3d6) acid damage at the start of each of the lizard's turns. The lizard can have only one target swallowed at a time.\nIf the lizard dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 10 feet of movement, exiting prone."
		}
	],
	wildshapeString : "\u25C6 Swallow: If a bite attack hits a Small or smaller target that is currently being grappled by the lizard, the target is swallowed, ending the grapple. While swallowed, it is blinded, restrained, has total cover, and takes 3d4 acid damage at the start of each of the lizard's turns; The lizard can have only 1 swallowed at a time. If the lizard dies, the swallowed creature is no longer restrained and can escape using 10 ft movement."
};
var iFileName = "pub_20170915_Tortle.js";
RequiredSheetVersion(12.999);
// This file adds the Tortle Race from the Tortle Package from DMs Guild to MPMB's Character Record Sheet

// Define the source
SourceList.TP={
	name : "Tortle Package",
	abbreviation : "TP",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/product/221716/",
	date : "2017/09/15"
};

// The Tortle race
RaceList["tortle"] = {
	regExpSearch : /tortle/i,
	name : "Tortle",
	source : ["TP", 4],
	plural : "Tortles",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Aquan"],
	skills : ["Survival"],
	weapons : ["tortle's claws"],
	addarmor : "Tortle's Shell",
	age : " reach adulthood by the age of 15 and live an average of 50 years",
	height : " stand between 5 and 6 feet tall",
	weight : " weigh around 450 lb",
	heightMetric : " stand between 1,5 and 1,8 metres tall",
	weightMetric : " weigh around 200 kg",
	improvements : "Tortle: +2 Strength, +1 Wisdom;",
	scores : [2, 0, 0, 0, 1, 0],
	features : {
		"shell defense" : {
			name : "Shell Defense",
			minlevel : 1,
			action : ["action", ""]
		}
	},
	trait : "Tortle (+2 Strength, +1 Wisdom)\nClaws: I can use my claws to make unarmed strikes dealing 1d4 slashing damage.\nHold Breath: I can hold my breath for up to 1 hour at a time.\nNatural Armor: I have a base AC of 17, but I can't add my Dex to it or wear armour.\nShell Defense: As an action, I can withdraw into my shell and gain +4 AC and adv. on Str and Con saves, but I count as prone, have speed 0, have disadv. on Dex saves, and can't take reactions. The only action I can take is a bonus action to emerge from the shell."
};

// Tortle's shell armour
ArmourList["tortle shell"] = {
	regExpSearch : /^(?=.*tortle)(?=.*shell).*$/i,
	name : "Tortle's Shell",
	source : ["TP", 4],
	type : "",
	ac : 17,
	dex : -10,
	stealthdis : false,
	strReq : 0
};

// Tortle's claws
WeaponsList["claws"] = {
	regExpSearch : /^(?=.*\b(sharp|cat|dragon|retractable|tortle))(?=.*\bclaws?\b).*$/i,
	name : "Sharp Claws",
	source : [["V", 115], ["UA:FR", 2], ["TP", 4], ["X", 74]],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};
var iFileName = "pub_20170919_ToA.js";
RequiredSheetVersion(12.999);
// This file adds the backgrounds and beasts from the Tomb of Annihilation adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.ToA={
	name : "Tomb of Annihilation [backgrounds, beasts, equipment]",
	abbreviation : "ToA",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tomb-annihilation",
	date : "2017/09/19"
};

// Backgrounds (with contributions by SoilentBrad and @lowbrr)
BackgroundList["anthropologist"] = {
	regExpSearch : /anthropologist/i,
	name : "Anthropologist",
	source : ["ToA", 191],
	skills : ["Insight", "Religion"],
	gold : 10,
	equipleft : [
		["Leather-bound diary", "", 5],
		["Ink, 1 ounce bottle of", 1, ""],
		["Ink pen (quill)", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Trinket of special significance", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Adept Linguist",
	trait : [
		"I prefer the company of those who aren't like me, including people of other races.",
		"I'm a stickler when it comes to observing proper etiquette and local customs.",
		"I would rather observe than meddle.",
		"By living among violent people, I have become desensitized to violence.",
		"I would risk life and limb to discover a new culture or unravel the secrets of a dead one.",
		"When I arrive at a new settlement for the first time, I must learn all its customs."
	],
	ideal : [
		["Discovery",
			"Discovery: I want to be the first person to discover a lost culture. (Any)"
		],
		["Distance",
			"Distance: One must not interfere with the affairs of another culture \u2015 even one in need of aid. (Lawful)"
		],
		["Knowledge",
			"Knowledge: By understanding other races and cultures, we learn to understand ourselves. (Any)"
		],
		["Power",
			"Power: Common people crave strong leadership, and I do my utmost to provide it. (Lawful)"
		],
		["Protection",
			"Protection: I must do everything possible to save a society facing extinction. (Good)"
		],
		["Indifferent",
			"Indifferent: Life is cruel. What's the point in saving people if they're going to die anyway? (Chaotic)"
		],
	],
	bond : [
		"My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.",
		"Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring.",
		"Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them.",
		"I want to learn more about a particular humanoid culture that fascinates me.",
		"I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.",
		"I have a trinket that I believe is the key to finding a long-lost society."
	], 	
	flaw : [
		"Boats make me seasick.",
		"I talk to myself, and I don't make friends easily.",
		"I believe that I'm intellectually superior to people from other cultures and have much to teach them.",
		"I've picked up some unpleasant habits living among goblins, lizardfolk, or orcs.",
		"I complain about everything.",
		"I wear a tribal mask and never take it off."
	], 
	extra : [
		"Select an Adopted Culture",
		"Aarakocra",
		"Dwarf",
		"Elf",
		"Goblin",
		"Halfling",
		"Human",
		"Lizardfolk",
		"Orc",
	],
	languageProfs : [2]
};
BackgroundList["archaeologist"] = {
	regExpSearch : /archa?eologist/i,
	name : "Archaeologist",
	source : ["ToA", 192],
	skills : ["History", "Survival"],
	gold : 25,
	equipleft : [
		["Map case with a map of a ruin/dungeon", "", 1],
		["Bullseye lantern", "", 2],
		["Miner's pick", "", 10],
		["Shovel", "", 5],
		["Two-person tent", "", 20]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Trinket recovered from a dig site", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Historical Knowledge",
	trait : [
		"I love a good puzzle or mystery.",
		"I'm a pack rat who never throws anything away.",
		"Fame is more important to me than money.",
		"I have no qualms about stealing from the dead.",
		"I'm happier in a dusty old tomb than I am in the centers of civilization.",
		"Traps don't make me nervous. Idiots who trigger traps make me nervous.",
		"I might fail, but I will never give up.",
		"You might think I'm a scholar, but I love a good brawl. These fists were made for punching."
	],
	ideal : [
		["Preservation",
			"Preservation: That artifact belongs in a museum. (Good)"
		],
		["Greed",
			"Greed: I won't risk my life for nothing. I expect some kind of payment. (Any)"
		],
		["Death Wish",
			"Death Wish: Nothing is more exhilarating than a narrow escape from the jaws of death. (Chaotic)"
		],
		["Dignity",
			"Dignity: The dead and their belongings deserve to be treated with respect. (Lawful)"
		],
		["Immortality",
			"Immortality: All my exploring is part of a plan to find the secret of everlasting life. (Any)"
		],
		["Danger",
			"Danger: With every great discovery comes grave danger. The two walk hand in hand. (Any)"
		]
	],
	bond : [
		"Ever since I was a child, I've heard stories about a lost city. I aim to find it, learn its secrets, and earn my place in the history books.",
		"I want to find my mentor, who disappeared on an expedition some time ago.",
		"I have a friendly rival. Only one of us can be the best, and I aim to prove it's me.",
		"I won't sell an art object or other treasure that has historical significance or is one of a kind.",
		"I'm secretly in love with the wealthy patron who sponsors my archaeological exploits.",
		"I hope to bring prestige to a library, a museum, or a university."
	],
	flaw : [
		"I have a secret fear of some common wild animal \u2015 and in my work, I see them everywhere.",
		"I can't leave a room without searching it for secret doors.",
		"When I'm not exploring dungeons or ruins, I get jittery and impatient.",
		"I have no time for friends or family. I spend every waking moment thinking about and preparing for my next expedition.",
		"When given the choice of going left or right, I always go left.",
		"I can't sleep except in total darkness."
	], 
	extra : [
		"Select a Signature Item",
		"10-foot pole",
		"Crowbar",
		"Hat",
		"Hooded lantern",
		"Medallion",
		"Shovel",
		"Sledgehammer",
		"Whip"
	],
	toolProfs : [["Cartographer or navigator tools", 1]],
	languageProfs : [1]
};

// Background features (with contributions by SoilentBrad and @lowbrr)
BackgroundFeatureList["adept linguist"] = {
	description : "I can communicate with humanoids who don't speak any language I know. I must observe the humanoids interacting with one another for at least one day, after which I learn a handful of important words, expressions, and gestures \u2015 enough to communicate on a rudimentary level.",
	source : ["ToA", 191]
};
BackgroundFeatureList["historical knowledge"] = {
	description : "When I enter a ruin or dungeon, I can correctly ascertain its original purpose and determine its builders, whether those were dwarves, elves, humans, yuan-ti, or some other known race. In addition, I can determine the monetary value of art objects more than a century old.",
	source : ["ToA", 192]
};

// Weapon
WeaponsList["yklwa"] = { 
	regExpSearch : /yklwa/i, 
	name : "Yklwa", 
	source : ["ToA", 32], 
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 8, "piercing"],
	range : "Melee, 10/30 ft",
	weight : 3,
	description : "Thrown",
	monkweapon : true,
	abilitytodamage : true
};

// Gear
GearList["rain catcher"] = {
	infoname : "Rain catcher [1 gp]",
	name : "Rain catcher",
	source : ["ToA", 32],
	amount : 1,
	weight : 5
};
GearList["insect repellent:"] = {
	infoname: "Insect repellent:",
	name: "-",
	source : ["ToA", 32],
	amount: "",
	weight: ""
};
GearList["insect repellent: salve"] = {
	infoname : "   Salve (vial) [5 sp]",
	name : "Salve, applications of",
	source : ["ToA", 32],
	amount : 20,
	weight : ""
};
GearList["insect repellent: incense"] = {
	infoname : "   Incense (block) [1 gp]",
	name : "Incense, blocks of",
	source : ["ToA", 32],
	amount : 1,
	weight : ""
};

// Creatures
CreatureList["brontosaurus"] = {
	name : "Brontosaurus",
	source : [["V", 139], ["ToA", 215]],
	size : 0, //Gargantuan
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 15,
	hp : 121,
	hd : [9, 20], //[#, die]
	speed : "30 ft",
	scores : [21, 9, 17, 2, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", 6, "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 1,
	attacks : [{
			name : "Stomp",
			ability : 1,
			damage : [5, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (20 ft)",
			description : "Target must succeed on a DC 14 Strength saving throw or be knocked prone"
		}, {
			name : "Tail",
			ability : 1,
			damage : [6, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (20 ft)",
			description : ""
		}
	]
};
CreatureList["deinonychus"] = {
	name : "Deinonychus",
	source : [["V", 139], ["ToA", 217]],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 26,
	hd : [4, 8], //[#, die]
	speed : "40 ft",
	scores : [15, 15, 14, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "",
	passivePerception : 13,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 3,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two claw and one bite as one Attack action; If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two claw and one bite as one Attack action (also, see Pounce trait)"
		}
	],
	traits : [{
			name : "Multiattack",
			description : "The deinonychus makes three attacks: two with its claws and one with its bite."
		}, {
			name : "Pounce",
			description : "If the deinonychus moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the deinonychus can make one bite attack against it as a bonus action."
		}
	]
};
CreatureList["dimetrodon"] = {
	name : "Dimetrodon",
	source : [["V", 139], ["ToA", 217]],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 19,
	hd : [3, 8], //[#, die]
	speed : "30 ft, swim 20 ft",
	scores : [14, 10, 15, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	]
};
CreatureList["hadrosaurus"] = {
	name : "Hadrosaurus",
	source : [["V", 140], ["ToA", 224]],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 11,
	hp : 19,
	hd : [3, 10], //[#, die]
	speed : "40 ft",
	scores : [15, 10, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Tail",
			ability : 1,
			damage : [1, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	]
};
CreatureList["quetzalcoatlus"] = {
	name : "Quetzalcoatlus",
	source : [["V", 140], ["ToA", 230]],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 30,
	hd : [4, 12], //[#, die]
	speed : "10 ft, fly 80 ft",
	scores : [15, 13, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [3, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : "If used after diving 30 ft towards a target, the attack deals 3d6 extra damage (Dive Attack)"
		}
	],
	traits : [{
			name : "Dive Attack",
			description : "If the quetzalcoatlus is flying and dives at least 30 ft toward a creature and then hits it with a bite attack, the attack deals an extra 10 (3d6) damage to the target."
		}, {
			name : "Flyby",
			description : "The quetzalcoatlus doesn't provoke opportunity attacks when it flies out of an enemy's reach."
		}
	]
};
CreatureList["stegosaurus"] = {
	name : "Stegosaurus",
	source : [["V", 140], ["ToA", 231]],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 76,
	hd : [8, 12], //[#, die]
	speed : "40 ft",
	scores : [20, 9, 17, 2, 11, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [6, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : ""
		}
	]
};
CreatureList["velociraptor"] = {
	name : "Velociraptor",
	source : [["V", 140], ["ToA", 235]],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 10,
	hd : [3, 4], //[#, die]
	speed : "30 ft",
	scores : [6, 14, 13, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "",
	passivePerception : 13,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One bite and one claw attack as an Attack action"
		}, {
			name : "Claw",
			ability : 2,
			damage : [1, 4, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One bite and one claw attack as an Attack action"
		}
	],
	traits : [{
			name : "Pack Tactics",
			description : "The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}
	]
};
// The following creatures were transcribed with the help of SoilentBrand and @lowbrr
CreatureList["almiraj"] = {
	name : "Almiraj",
	source : ["ToA", 211],
	size : 4, //Small
	type : "Beast",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 3,
	hd : [1, 6],
	speed : "50 ft",
	scores : [2, 16, 10, 2, 14, 10],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 4,
		"stealth" : 5,
	},
	senses : "Darkvision 30 ft; Adv. on Wis (Perception) checks using hearing/sight",
	passivePerception : 14,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Horn",
			ability : 2,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Keen Senses",
			description : "The almiraj has advantage on Wisdom (Perception) checks that rely on hearing or sight."
		}
	],
};
CreatureList["flying monkey"] = {
	name : "Flying Monkey",
	source : ["ToA", 220],
	size : 4, //Small
	type : "Beast",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 3,
	hd : [1, 6],
	speed : "30 ft, climb 20 ft, fly 30 ft",
	scores : [8, 14, 11, 5, 12, 6],
	saves : ["", "", "", "", "", ""],
	senses : "",
	passivePerception : 11,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Pack Tactics",
			description : "The flying monkey has advantage on an attack roll against a creature if at least one of the monkey's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}
	],
};
CreatureList["giant snapping turtle"] = {
	name : "Giant Snapping Turtle",
	source : ["ToA", 222],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 17,
	hp : 75,
	hd : [10, 10],
	speed : "30 ft, swim 40 ft",
	scores : [19, 10, 14, 2, 12, 5],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 11,
	languages : "",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [4, 6, "slashing"],
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Amphibious",
			description : "The turtle can breathe air and water."
		}, {
			name : "Stable",
			description : "Whenever an effect knocks the turtle prone, it can make a DC 10 Constitution saving throw to avoid being knocked prone. A prone turtle is upside down. To stand up, it must succeed on a DC 10 Dexterity check on its turn and then use all its movement for that turn. While prone, the turtle's AC becomes 12."
		}
	]
};
CreatureList["jaculi"] = {
	name : "Jaculi",
	source : ["ToA", 225],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 16,
	hd : [3, 10],
	speed : "30 ft, climb 20 ft",
	scores : [15, 14, 11, 2, 8, 3],
	saves : ["", "", "", "", "", ""],
	skills : {
		"athletics" : 4,
		"perception" : 1,
		"stealth" : 4
	},
	senses : "Blindsight 30 ft; Adv. on Wis (Perception) checks using smell",
	passivePerception : 11,
	languages : "",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "If used after at least 10 ft jump, adv. on to hit and extra 2d6 damage, see Spring trait"
		}
	],
	actions : [{
			name : "Spring",
			description : "The jaculi springs up to 30 feet in a straight line and makes a bite attack against a target within its reach. This attack has advantage if the jaculi springs at least 10 feet. If the attack hits, the bite deals an extra 7 (2d6) piercing damage."
		}
	],
	traits : [{
			name : "Camouflage",
			description : "The jaculi has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name : "Keen Smell",
			description : "The jaculi has advantage on Wisdom (Perception) checks that rely on smell."
		}
	],
	wildshapeString : "\u25C6 Senses: Blindsight 30 ft.\n\u25C6 Camouflage: advantage on Dexterity (Stealth) checks made to hide.\n\u25C6 Keen Smell: advantage on Wisdom (Perception) checks that rely on smell.\n\u25C6 Spring: 30 ft in a straight line and make a bite attack. Advantage on the attack roll if springing at least 10 ft. It deals an extra 7 (2d6) piercing damage on a hit."
};
var iFileName = "pub_20171121_XGtE.js";
RequiredSheetVersion(12.999);
// This file adds the backgrounds and beasts from Xanathar's Guide to Everything to MPMB's Character Record Sheet

// Define the source
SourceList.X={
	name : "Xanathar's Guide to Everything",
	abbreviation : "XGtE",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/xanathars-guide-everything",
	date : "2017/11/21"
};

// Add 3 subclasses for the Barbarian
AddSubClass("barbarian", "ancestral guardian-xgte", {
	regExpSearch : /^(?=.*ancestral)(?=.*guardian).*$/i,
	subname : "Path of the Ancestral Guardian",
	source : ["X", 9],
	fullname : "Ancestral Guardian",
	features : {
		"subclassfeature3" : {
			name : "Ancestral Protectors",
			source : ["X", 10],
			minlevel : 3,
			description : desc([
				"While raging, the first creature I hit with an attack on my turn becomes distracted",
				"While distracted, it has disadvantage on attack rolls that don't target me",
				"In addition, everybody but me counts as having resistance to all of the target's attacks",
				"This lasts until the start of my next turn, or until my rage ends"
			])
		},
		"subclassfeature6" : {
			name : "Spirit Shield",
			source : ["X", 10],
			minlevel : 6,
			description : desc([
				"As a reaction while raging when an ally I see within 30 ft is damaged, I can reduce it",
				"My guardian spirits reduce the damage by an amount equal to the roll of the dice"
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : (n < 10 ? 2 : n < 14 ? 3 : 4) + "d6 damage reduced"; }),
			action : ["reaction", " (in Rage)"]
		},
		"subclassfeature10" : {
			name : "Consult the Spirits",
			source : ["X", 10],
			minlevel : 10,
			description : desc([
				"I can cast either Clairvoyance or Augury, without a spell slot or material components",
				"Augury consults ancestral spirits; Clairvoyance summons an invisible ancestral spirit",
				"Wisdom is my spellcasting ability for these spells"
			]),
			spellcastingBonus : [{
				name : "Consult the Spirits",
				spells : ["augury"],
				selection : ["augury"],
				oncesr : true
			}, {
				name : "Consult the Spirits",
				spells : ["clairvoyance"],
				selection : ["clairvoyance"],
				oncesr : true
			}],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Vengeful Ancestors",
			source : ["X", 10],
			minlevel : 14,
			description : "\n   " + "When using Spirit Shield, the attacker takes the reduced amount as force damage"
		}
	}
});
AddSubClass("barbarian", "storm herald-xgte", {
	regExpSearch : /^(?=.*storm)(?=.*herald).*$/i,
	subname : "Path of the Storm Herald",
	source : ["X", 10],
	fullname : "Storm Herald",
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Storm Aura",
			source : ["X", 10],
			minlevel : 3,
			description : desc([
				"While raging, I emanate a 10-ft radius aura, but not through total cover",
				"The aura's features activate when I enter my rage or as a bonus action while raging",
				"Use the \"Choose Feature\" button above to select the type of aura"
			]),
			choices : ["Desert", "Sea", "Tundra"],
			action : ["bonus action", " (reactivate)"],
			"desert" : {
				name : "Storm Aura: Desert",
				description : desc([
					"While raging, I emanate a 10-ft radius aura, but not through total cover",
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, anybody in my aura other than me takes fire damage"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : (n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 20 ? 5 : 6) + " fire damage"; }),
				eval : "var ToAdd = ['barbarian', 'subclassfeature6', 'desert']; if (classes.known.barbarian.level >= 6 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature10'; if (classes.known.barbarian.level >= 10 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature14'; if (classes.known.barbarian.level >= 14 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"sea" : {
				name : "Storm Aura: Sea",
				description : desc([
					"While raging, I emanate a 10-ft radius aura, but not through total cover",
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, I can choose one creature in my aura other than me",
					"It takes lightning damage, or half as much on a successful Dexterity saving throw"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : (n < 10 ? 1 : n < 15 ? 2 : n < 20 ? 3 : 4) + "d6 lightning damage"; }),
				eval : "var ToAdd = ['barbarian', 'subclassfeature6', 'sea']; if (classes.known.barbarian.level >= 6 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature10'; if (classes.known.barbarian.level >= 10 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature14'; if (classes.known.barbarian.level >= 14 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"tundra" : {
				name : "Storm Aura: Tundra",
				description : desc([
					"While raging, I emanate a 10-ft radius aura, but not through total cover",
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, all creatures of my choice in my aura gain temporary HP"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : (n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 20 ? 5 : 6) + " temporary hit points"; }),
				eval : "var ToAdd = ['barbarian', 'subclassfeature6', 'tundra']; if (classes.known.barbarian.level >= 6 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature10'; if (classes.known.barbarian.level >= 10 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature14'; if (classes.known.barbarian.level >= 14 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			}
		},
		"subclassfeature6" : {
			name : "Storm Soul",
			source : ["X", 10],
			minlevel : 6,
			description : "\n   " + "Use the \"Choose Feature\" button above to select the effect",
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Storm Soul: Desert",
				description : desc([
					"I have resistance to fire damage and don't suffer the effects of extreme heat",
					"As an action, I can set fire to an unattended flammable object I touch"
				]),
				action : ["action", " (ignite)"],
				dmgres : ["Fire"],
				savetxt : { immune : ["effects of extreme heat"] }
			},
			"sea" : {
				name : "Storm Soul: Sea",
				description : desc([
					"I can breathe underwater and I have 30 ft swim speed",
					"In addition, I have resistance to lightning damage"
				]),
				dmgres : ["Lightning"],
				speed : { swim : { spd : 30, enc : 20 } }
			},
			"tundra" : {
				name : "Storm Soul: Tundra",
				description : desc([
					"I have resistance to cold damage and don't suffer the effects of extreme cold",
					"As an action, I can turn a 5-ft cube of water to ice, which melts after 1 minute",
					"This action fails if there are any creatures within the cube of water"
				]),
				action : ["action", " (freeze)"],
				dmgres : ["Cold"],
				savetxt : { immune : ["effects of extreme cold"] }
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?barbarian,subclassfeature3,(desert|sea|tundra).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'barbarian,subclassfeature6,' + FeaChoice, false);};};"
		},
		"subclassfeature10" : {
			name : "Shielding Storm",
			source : ["X", 10],
			minlevel : 10,
			description : "\n   " + "In rage, creatures of my choice within my Storm Aura also gain Storm Soul resistance",
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Shielding Storm: Desert",
				description : "\n   " + "While raging, creatures of my choice within my Storm Aura also gain resistance to fire"
			},
			"sea" : {
				name : "Shielding Storm: Sea",
				description : "\n   " + "In rage, creatures of my choice within my Storm Aura also gain resistance to lightning"
			},
			"tundra" : {
				name : "Shielding Storm: Tundra",
				description : "\n   " + "While raging, creatures of my choice within my Storm Aura also gain resistance to cold"
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?barbarian,subclassfeature3,(desert|sea|tundra).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'barbarian,subclassfeature10,' + FeaChoice, false);};};"
		},
		"subclassfeature14" : {
			name : "Raging Storm",
			source : ["X", 11],
			minlevel : 14,
			description : "\n   " + "Use the \"Choose Feature\" button above to select the effect",
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Raging Storm: Desert",
				description : desc([
					"As a reaction when hit by a creature in my Storm Aura, I can have it make a Dex save",
					"On a failed save, the attacker takes fire damage equal to half my barbarian level"
				]),
				action : ["reaction", " (if hit)"],
				additional : levels.map(function (n) { return n < 14 ? "" : Math.floor(n/2) + " fire damage"; })
			},
			"sea" : {
				name : "Raging Storm: Sea",
				description : desc([
					"As a reaction when I hit a creature in my Storm Aura, I can have it make a Str save",
					"On a failed save, the creature is knocked prone, as if struck by a wave"
				]),
				action : ["reaction", " (with attack)"]
			},
			"tundra" : {
				name : "Raging Storm: Tundra",
				description : desc([
					"Whenever I activate my Storm Aura, I can choose a creature in my aura that I can see",
					"It must make a Str save or have its speed reduced to 0 until the start of my next turn"
				])
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?barbarian,subclassfeature3,(desert|sea|tundra).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'barbarian,subclassfeature14,' + FeaChoice, false);};};"
		}
	}
});
AddSubClass("barbarian", "zealot-xgte", {
	regExpSearch : /zealot/i,
	subname : "Path of the Zealot",
	source : ["X", 11],
	fullname : "Zealot",
	features : {
		"subclassfeature3" : {
			name : "Divine Fury",
			source : ["X", 11],
			minlevel : 3,
			description : desc([
				"While raging, the first creature I hit with a weapon attack in my turn gets extra damage",
				"This is necrotic or radiant damage equal to 1d6 + half my barbarian level",
				"Choose a damage type using the \"Choose Feature\" button above"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "+1d6+" + Math.floor(n/2) + " damage"; }),
			choices : ["Necrotic Damage", "Radiant Damage"],
			"necrotic damage" : {
				name : "Divine Fury",
				description : desc([
					"While raging, the first creature I hit with a weapon attack in my turn gets extra damage",
					"It takes an extra 1d6 + half my barbarian level worth of necrotic damage"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : "+1d6+" + Math.floor(n/2) + " necrotic damage"; })
			},
			"radiant damage" : {
				name : "Divine Fury",
				description : desc([
					"While raging, the first creature I hit with a weapon attack in my turn gets extra damage",
					"It takes an extra 1d6 + half my barbarian level worth of radiant damage"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : "+1d6+" + Math.floor(n/2) + " radiant damage"; })
			},
			calcChanges : {
				atkAdd : ["if(!isSpell&&classes.known.barbarian&&classes.known.barbarian.level>2&&(/\\brage\\b/i).test(WeaponText)){var CFrem=What('Class Features Remember');var tReg=/.*?barbarian,subclassfeature3,(necrotic damage|radiant damage).*/i;var FeaChoice=(tReg).test(CFrem)?CFrem.replace(tReg,'$1'):'damage';fields.Description+=(fields.Description?'; ':'')+'+1d6+'+Math.floor(classes.known.barbarian.level/2)+' '+FeaChoice+' on first hit each turn';};", "If I include the word 'Rage' in a melee weapon's name, it will show in its description that its first hit does extra damage."],
			}
		},
		"subclassfeature3.1" : {
			name : "Warrior of the Gods",
			source : ["X", 11],
			minlevel : 3,
			description : "\n   " + "Spells restoring me to life (not undeath or anything else) don't require material comp."
		},
		"subclassfeature6" : {
			name : "Fanatical Focus",
			source : ["X", 11],
			minlevel : 6,
			description : desc([
				"When I fail a saving throw while raging, I can reroll it and must use the new roll",
				"I can use this ability only once per rage"
			]),
			usages : 1,
			recovery : "rage"
		},
		"subclassfeature10" : {
			name : "Zealous Presence",
			source : ["X", 11],
			minlevel : 10,
			description : desc([
				"As a bonus action, I choose up to 10 creatures within 60 ft that can hear my battle cry",
				"These creatures gain adv. on attacks and saves until the start of my next turn"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature14" : {
			name : "Rage Beyond Death",
			source : ["X", 11],
			minlevel : 14,
			description : desc([
				"While raging, having 0 hit points doesn't knock me unconscious",
				"I still must make death saves, and I suffer the normal effects of taking damage",
				"I only die due to failed death saves if my rage ends while I'm at 0 HP"
			])
		}
	}
});

// Add 3 subclasses for the Bard
AddSubClass("bard", "college of glamour-xgte", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*glamour).*$/i,
	subname : "College of Glamour",
	source : ["X", 14],
	features : {
		"subclassfeature3" : {
			name : "Mantle of Inspiration",
			source : ["X", 14],
			minlevel : 3,
			description : desc([
				"As a bonus action, I expend one Bardic Inspiration die to aid those within 60 ft of me",
				"My Cha mod (min 1) of creatures that I can see and can see me gain temporary HP",
				"They can immediately use a reaction to move their speed, without opportunity attacks"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "1 inspiration die; " + (n < 5 ? 5 : n < 10 ? 8 : n < 15 ? 11 : 14) + " temp HP"; }),
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Enthralling Performance",
			source : ["X", 14],
			minlevel : 3,
			recovery : "short rest",
			usages : 1,
			description : desc([
				"By performing for at least 1 minute, I can charm humanoids within 60 ft of me",
				"After the performance, my Cha mod (min 1) number of targets must make a Wis save",
				"On a fail, a target is charmed for 1 hour; If success, it doesn't knows I tried to charm it",
				"While charmed, the target idolizes me, hinders those opposing me, and avoids violence",
				"This lasts until a target takes damage, I attack it, or if it sees me attacking its allies"
			])
		},
		"subclassfeature6" : {
			name : "Mantle of Majesty",
			source : ["X", 14],
			minlevel : 6,
			recovery : "long rest",
			usages : 1,
			action : ["bonus action", ""],
			description : desc([
				"As a bonus action, I appear unearthly beautiful while I concentrate, up to 1 minute",
				"At the same time, and as a bonus action during, I can cast Command without a spell slot",
				"Creatures charmed by me automatically fail their saves against these Command spells"
			]),
			spellcastingBonus : [{
				name : "Mantle of Majesty",
				spells : ["command"],
				selection : ["command"],
				oncelr : true
			}]
		},
		"subclassfeature14" : {
			name : "Unbreakable Majesty",
			source : ["X", 14],
			minlevel : 14,
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""],
			description : desc([
				"As a bonus action, I gain a magically majestic presence for 1 min or until incapacitated",
				"During this, the first time a creature attacks me each turn they must make a Cha save",
				"If failed, it can't attack me this turn and must choose another target or lose its attack",
				"If successful, it can attack, but has disadv. on all saves against my spells on my next turn"
			])
		}
	}
});
AddSubClass("bard", "college of swords-xgte", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*\bswords?\b).*$/i,
	subname : "College of Swords",
	source : ["X", 15],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["X", 15],
			minlevel : 3,
			description : desc([
				"I gain proficiency with medium armor and scimitars",
				"My bardic spellcasting focus can be any simple or martial weapon I'm proficient with"
			]),
			armor : [false, true, false, false],
			weapons : [false, false, ["scimitar"]]
		},
		"subclassfeature3.1" : {
			name : "Fighting Style",
			source : ["X", 15],
			minlevel : 3,
			description : "\n   " + "Select a Fighting Style for the college of swords using the \"Choose Feature\" button above",
			choices : ["Dueling", "Two-Weapon Fighting"],
			"dueling" : FightingStyles.dueling,
			"two-weapon fighting" : FightingStyles.two_weapon
		},
		"subclassfeature3.2" : {
			name : "Blade Flourish",
			source : ["X", 15],
			minlevel : 3,
			description : desc([
				"When I take the Attack action on my turn, I gain bonus speed and special attack options",
				"I gain +10 ft to my walking speed until the end of the current turn",
				"Once per turn when I hit with a weapon attack, I can expend a Bardic Inspiration die",
				"The roll of that die is added to the weapon's damage, in addition to one of the following:",
				"\u2022 Defensive Flourish: the result is also added to my AC until the start of my next turn",
				"\u2022 Slashing Flourish: the extra damage is also dealt to any of my choosing in 5 ft of me",
				"\u2022 Mobile Flourish: the target is also pushed 5 plus the die result in feet away from me",
				"  As a reaction after this push, I can move my speed to a space within 5 ft of the target"
			])
		},
		"subclassfeature14" : {
			name : "Master Flourish",
			source : ["X", 16],
			minlevel : 14,
			description : "\n   " + "When I do a Blade Flourish, I can use a d6 instead of expending a Bardic Inspiration die"
		}
	}
});
AddSubClass("bard", "college of whispers-xgte", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*whispers).*$/i,
	subname : "College of Whispers",
	source : ["X", 16],
	features : {
		"subclassfeature3" : {
			name : "Psychic Blades",
			source : ["X", 16],
			minlevel : 3,
			description : desc([
				"When I hit a creature with a weapon attack, I can expend one use of Bardic Inspiration",
				"If so, the attack does extra psychic damage; I can do so only once per round, on my turn"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "1 Bardic Inspiration for +" + (n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 5 : 8) + "d6 damage"; })
		},
		"subclassfeature3.1" : {
			name : "Words of Terror",
			source : ["X", 16],
			minlevel : 3,
			recovery : "short rest",
			usages : 1,
			description : desc([
				"By speaking privately with a humanoid for at least 1 minute, I can try to inspire terror",
				"After the talk, it must make a Wis save or be frightened of me or someone of my choice",
				"If the save is successful, the target doesn't know I tried to frighten it",
				"This lasts for 1 hour, or until it sees its allies or itself being attacked or damaged"
			])
		},
		"subclassfeature6" : {
			name : "Mantle of Whispers",
			source : ["X", 16],
			minlevel : 6,
			recovery : "short rest",
			usages : 1,
			action : ["reaction", ""],
			description : desc([
				"As a reaction when a humanoid dies within 30 ft of me, I can capture its shadow",
				"As an action, I can use it to make me look just like the dead person did while it was alive",
				"While disguised, I know general information about it and its memories, but not its secrets",
				"Others can see through the disguise with a Wis (Insight) check vs. my Cha (Deception) +5",
				"A shadow lasts until used or next long rest; The disguise ends as a bonus action or 1 hour"
			]),
			eval : "AddAction('action', 'Shadow Disguise (start)', 'Bard (College of Whispers)'); AddAction('bonus action', 'Shadow Disguise (end)', 'Bard (College of Whispers)');",
			removeeval : "RemoveAction('action', 'Shadow Disguise (start)'); RemoveAction('bonus action', 'Shadow Disguise (end)');"
		},
		"subclassfeature14" : {
			name : "Shadow Lore",
			source : ["X", 16],
			minlevel : 14,
			recovery : "long rest",
			usages : 1,
			action : ["action", ""],
			description : desc([
				"As an action, I whisper to a creature within 30 ft that can hear and understand me",
				"Only the target can hear me; It must make a Wis save or be charmed by me for 8 hours",
				"If failed, it thinks I know its most mortifying secret, otherwise it only hears mumbling",
				"While charmed, the target obeys my commands, but won't fight or risk its life for me",
				"This lasts for 8 hours, or until I or my allies attack it, damage it, or have it make a save"
				//"When the effect ends, the target has no idea why it was so afraid of me"
			])
		}
	}
});

// Add 2 subclasses for the Cleric
AddSubClass("cleric", "forge domain-xgte", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(forge|forgery|blacksmith)).*$/i,
	subname : "Forge Domain",
	source : ["X", 18],
	spellcastingExtra : ["identify", "searing smite", "heat metal", "magic weapon", "elemental weapon", "protection from energy", "fabricate", "wall of fire", "animate objects", "creation"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["X", 19],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor and smith's tools",
			armor : [false, false, true, false],
			toolProfs : ["Smith's tools"]
		},
		"subclassfeature1.1" : {
			name : "Blessing of the Forge",
			source : ["X", 19],
			minlevel : 1,
			action : ["action", ""],
			usages : 1,
			recovery : "long rest",
			description : desc([
				"At the end of a long rest, I can imbue magic into a nonmagical weapon or armor",
				"It becomes magical: +1 AC if armor, or +1 to attack and damage rolls if a weapon",
				"This lasts until the end of my next long rest or until I die"
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Artisan's Blessing",
			source : ["X", 19],
			minlevel : 2,
			description : desc([
				"With an hour-long ritual, I can craft a nonmagical item that is at least part metal",
				"Including: suit of armor, simple or martial weapon, set of tools, 10 pieces of ammunition",
				"The creation can be worth up to 100 gp, and I must expend metals of equal value to it",
				"The metals irretrievably coalesce into the new item, forming even nonmetal parts of it",
				"The item can be an exact duplicate of a nonmagical item if I possess the original",
				"The item comes into existence at the end of the hour in an unoccupied space within 5 ft"
			])
		},
		"subclassfeature6" : {
			name : "Soul of the Forge",
			source : ["X", 19],
			minlevel : 6,
			description : "\n   " + "I gain resistance to fire damage and +1 to AC while wearing medium or heavy armor",
			dmgres : ["Fire"],
			eval : "AddACMisc(1, 'Soul of the Forge', '+1 AC while wearing Medium or Heavy armor.\\n\\nSoul of the Forge was gained from Cleric (Forge Domain).', \"!tDoc.getField('Medium Armor').isBoxChecked(0) && !tDoc.getField('Heavy Armor').isBoxChecked(0)\");",
			removeeval : "AddACMisc(0, 'Soul of the Forge', '+1 AC while wearing Medium or Heavy armor.\\n\\nSoul of the Forge was gained from Cleric (Forge Domain).');"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["X", 19],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 fire damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra fire damage."]
			}
		},
		"subclassfeature17" : {
			name : "Saint of Forge and Fire",
			source : ["X", 19],
			minlevel : 17,
			description : desc([
				"I gain immunity to fire damage",
				"When wearing heavy armor, I'm resistant to nonmagical bludg./piercing/slashing damage"
			]),
			savetxt : { immune : ["fire"] },
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});
AddSubClass("cleric", "grave domain-xgte", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(grave)).*$/i,
	subname : "Grave Domain",
	source : ["X", 19],
	spellcastingExtra : ["bane", "false life", "gentle repose", "ray of enfeeblement", "revivify", "vampiric touch", "blight", "death ward", "antilife shell", "raise dead"],
	features : {
		"subclassfeature1" : {
			name : "Circle of Mortality",
			source : ["X", 20],
			minlevel : 1,
			action : ["bonus action", ""],
			description : desc([
				"Spells I cast to heal a living creature at 0 HP have their dice count as their max result",
				"I learn Spare the Dying, which I can cast as a bonus action with a range of 30 ft"
			]),
			spellcastingBonus : {
				name : "Circle of Mortality",
				spells : ["spare the dying"],
				selection : ["spare the dying"],
				atwill : true
			}
		},
		"subclassfeature1.1" : {
			name : "Eyes of the Grave",
			source : ["X", 20],
			minlevel : 1,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			description : desc([
				"As an action, I sense undead within 60 ft that aren't protected from divination magic",
				"Until the end of my next turn, I sense the location of any undead not behind total cover"
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Path to the Grave",
			source : ["X", 20],
			minlevel : 2,
			action : ["action", ""],
			description : desc([
				"As an action, I can curse a creature within 30 ft until the end of my next turn",
				"It is vulnerable to all the damage from the next attack by me or my allies that hits it"
			])
		},
		"subclassfeature6" : {
			name : "Sentinel at Death's Door",
			source : ["X", 20],
			minlevel : 6,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""],
			description : "\n   " + "As a reaction, I turn a critical hit to me or an ally I see within 30 ft to a normal hit"
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["X", 20],
			minlevel : 8,
			description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Keeper of Souls",
			source : ["X", 20],
			minlevel : 17,
			description : desc([
				"Once per round, if I'm not incapacitated, I can manipulate the energy of the dying",
				"When an enemy I can see dies within 60 ft of me, I or an ally within 60 ft regain HP",
				"The HP regained is equal to the enemy's number of Hit Dice"
			])
		}
	}
});

// Add 2 subclasses for the Druid
AddSubClass("druid", "circle of dreams-xgte", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*\bdreams\b).*$/i,
	subname : "Circle of Dreams",
	source : ["X", 22],
	features : {
		"subclassfeature2" : {
			name : "Balm of the Summer Court",
			source : ["X", 22],
			minlevel : 2,
			description : desc([
				"I have a pool of fey energy represented by a number of d6s equal to my druid level",
				"As a bonus action, I can spend dice to heal an ally within 120 ft of me that I can see",
				"I can spend up to half my druid level worth of dice from the pool at once",
				"The ally heals an amount equal to the total rolled and gains 1 temp HP per die spent"
			]),
			usages : levels.map(function (n) { return n < 2 ? "" : n + "d6 per "; }),
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Hearth of Moonlight and Shadow",
			source : ["X", 22],
			minlevel : 6,
			description : desc([
				"At the start of a rest, I can create a 30-ft radius invisible magical sphere",
				"The sphere extends from a point in space I touch, but doesn't expend through total cover",
				"Within this area, my allies and I gain +5 on Wis (Perception) and Dex (Stealth) checks",
				"Also, any light from open flames that are in the sphere is invisible from outside the area",
				"This effect lasts until the end of the rest or when I leave the sphere"
			])
		},
		"subclassfeature10" : {
			name : "Hidden Paths",
			source : ["X", 22],
			minlevel : 10,
			description : desc([
				"As a bonus action, I can teleport myself up to 60 ft to a spot I can see",
				"As an action, I can teleport a willing ally I touch up to 30 ft to a spot I can see"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""],
			eval : "AddAction('action', 'Hidden Paths (on ally)', 'Druid (Circle of Dreams)');",
			removeeval : "RemoveAction('action', 'Hidden Paths (on ally)');"
		},
		"subclassfeature14" : {
			name : "Walker in Dreams",
			source : ["X", 23],
			minlevel : 14,
			usages : 1,
			recovery : "long rest",
			description : desc([
				"When I finish a short rest, I can cast either Dream, Scrying, or Teleportation Circle",
				"This doesn't require a spell slot or material components; Dream uses me as the messenger",
				"Teleportation Circle connects to the last place I finished a long rest, if on the same plane"
			]),
			spellcastingBonus : [{
				name : "Walker in Dreams",
				spells : ["dream"],
				selection : ["dream"],
				oncesr : true
			}, {
				name : "Walker in Dreams",
				spells : ["scrying"],
				selection : ["scrying"],
				oncesr : true
			}, {
				name : "Walker in Dreams",
				spells : ["teleportation circle"],
				selection : ["teleportation circle"],
				oncesr : true
			}]
		}
	}
});
AddSubClass("druid", "circle of the shepherd-xgte", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*shepherd).*$/i,
	subname : "Circle of the Shepherd",
	source : ["X", 23],
	features : {
		"subclassfeature2" : {
			name : "Speech of the Woods",
			source : ["X", 23],
			minlevel : 2,
			description : desc([
				"I can talk with beasts, they understand me and I them, to the limit of their intelligence",
				"This doesn't automatically make me friends with all beasts; Additionally, I learn Sylvan"
			]),
			languageProfs : ["Sylvan"]
		},
		"subclassfeature2.1" : {
			name : "Spirit Totem",
			source : ["X", 23],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can summon, or move, a spirit to a point I can see within 60 ft",
				"It is a spectral form of a Bear, Hawk, or Unicorn (my choice), with a 30-ft radius aura",
				"It is incorporeal, immobile, doesn't counts as a creature or object, and persists for 1 min",
				"The spirit persists for 1 minute or until I'm incapacitated",
				"\u2022 Bear: my allies and I, if in the aura, immediately gain 5 + my druid level in temp HP",
				"  While in the aura, my allies and I gain advantage on Strength checks and saves",
				"\u2022 Hawk: As a reaction, I can grant advantage on an attack vs. a target in the aura",
				"  While in the aura, my allies and I gain advantage on Wisdom (Perception) checks",
				"\u2022 Unicorn: my allies and I gain advantage on ability checks to detect targets in the aura",
				"  When I cast a healing spell with a spell slot, allies in the aura heal my druid level in HP"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Mighty Summoner",
			source : ["X", 24],
			minlevel : 6,
			description : "\n   " + "Beasts or Fey I summon with spells get +2 HP per HD and their attacks count as magical"
		},
		"subclassfeature10" : {
			name : "Guardian Spirit",
			source : ["X", 24],
			minlevel : 10,
			description : "\n   " + "When a Beast or Fey that I summoned ends its turn in my Spirit Totem aura, it heals",
			additional : levels.map(function (n) { return n < 10 ? "" : "heals " + Math.floor(n / 2) + " HP"; })
		},
		"subclassfeature14" : {
			name : "Faithful Summons",
			source : ["X", 24],
			minlevel : 14,
			description : desc([
				"When I am reduced to 0 HP or incapacitated against my will, I can cast Conjure Animals",
				"This is done as if using a 9th-level spell slot to summon 4 beast of my choice up to CR 2",
				"They appear within 20 ft of me, last 1 hour, and protect me from harm and attack foes"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});

// Add 3 subclasses for the Fighter
AddSubClass("fighter", "arcane archer-xgte", {
	regExpSearch : /^(?=.*arcane)(?=.*archer).*$/i,
	subname : "Arcane Archer",
	source : ["X", 28],
	fullname : "Arcane Archer",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Arcane Archer's Lore",
			source : ["X", 28],
			minlevel : 3,
			description : desc([
				"I gain proficiency with either the Arcana or Nature skill",
				"I also learn either the Prestidigitation or the Druidcraft cantrip"
			]),
			skillstxt : "\n\n" + toUni("Arcane Archer") + ": Choose Arcana or Nature.",
			spellcastingBonus : {
				name : "Arcane Archer's Lore",
				spells : ["druidcraft", "prestidigitation"]
			},
		},
		"subclassfeature3.1" : {
			name : "Arcane Shot",
			source : ["X", 28],
			minlevel : 3,
			description : desc([
				"I can unleash magical effects when I fire an arrow from a short- or longbow",
				"I can use this once per turn as part of the Attack action, after an attack hits",
				"I know a number of Arcane Shot Options and learn additional at certain levels",
				"Use the \"Choose Feature\" button above to add Arcane Shots Options to the third page"
			]),
			usages : 2,
			recovery : "short rest",
			additional : levels.map( function(n) { return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 18 ? 5 : 6) + " options known"; }),
			extraname : "Arcane Shot Option",
			extrachoices : ["Banishing Arrow [Abjuration]", "Beguiling Arrow [Enchantment]", "Bursting Arrow [Evocation]", "Enfeebling Arrow [Necromancy]", "Grasping Arrow [Conjuration]", "Piercing Arrow [Transmutation]", "Seeking Arrow [Divination]", "Shadow Arrow [Illusion]"],
			"banishing arrow [abjuration]" : {
				name : "Banishing Arrow [Abjuration]",
				source : ["X", 29],
				description : desc([
					"The target makes a Cha save or is banished to the Feywild until the end of its next turn",
					"While banished, its speed is 0 and is incapacitated; It re-appearing in the same spot",
					"When I reach 18th level, this Arcane Shot Option also does an extra 2d6 force damage"
				]),
				additional : levels.map( function(n) { return n < 18 ? "" : "+2d6 force damage"; })
			},
			"beguiling arrow [enchantment]" : {
				name : "Beguiling Arrow [Enchantment]",
				source : ["X", 29],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, it is charmed by one of my allies within 30 ft of it that I choose",
					"This lasts until my next turn starts or until the chosen ally attacks the target in any way"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 damage"; })
			},
			"bursting arrow [evocation]" : {
				name : "Bursting Arrow [Evocation]",
				source : ["X", 29],
				description : "\n   " + "The target, in addition to the shot, and all creatures within 10 ft of it take damage",
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 force damage"; })
			},
			"enfeebling arrow [necromancy]" : {
				name : "Enfeebling Arrow [Necromancy]",
				source : ["X", 29],
				description : desc([
					"The target takes extra necrotic damage and must make a Constitution save",
					"If failed, the damage of the target's attacks are halved until the start of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 necrotic damage"; })
			},
			"grasping arrow [conjuration]" : {
				name : "Grasping Arrow [Conjuration]",
				source : ["X", 29],
				description : desc([
					"The target takes extra poison damage as brambles wrap around it for 1 minute",
					"The brambles give it -10 ft speed and do it slashing damage every round it moves",
					"These can be removed by it or another as an action with Strength (Athletics) vs. my DC"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : (n < 18 ? 2 : 4) + "d6 poison/slash. damage"; })
			},
			"piercing arrow [transmutation]" : {
				name : "Piercing Arrow [Transmutation]",
				source : ["X", 29],
				description : desc([
					"With this I don't roll for the attack, but shoot the arrow in a 30-ft long, 1-ft wide line",
					"It passes through objects, ignoring cover, but all creatures in the area take damage",
					"The damage is the same as a normal hit from my attack, plus extra piercing damage",
					"A creature can make a Dexterity save to reduce the damage by half"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 1 : 2) + "d6 piercing damage"; })
			},
			"seeking arrow [divination]" : {
				name : "Seeking Arrow [Divination]",
				source : ["X", 30],
				description : desc([
					"With this I don't roll for the attack, but I choose a target I have seen in the last minute",
					"The seeking arrow moves around corners, obstacles, and ignores cover to hit the target",
					"It is hit if it is within the weapon's range and there is a path for the arrow to get to it",
					"The target takes the full damage of the attack plus extra force damage",
					"It can make a Dexterity save to reduce the damage by half; If failed, I know its location"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 1 : 2) + "d6 force damage"; })
			},
			"shadow arrow [illusion]" : {
				name : "Shadow Arrow [Illusion]",
				source : ["X", 30],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, the target can't see anything beyond 5 ft until the end of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 psyhic damage"; })
			}
		},
		"subclassfeature7" : {
			name : "Magic Arrow",
			source : ["X", 28],
			minlevel : 7,
			description : "\n   " + "Whenever I fire a nonmagical arrow from a short- or longbow, I can make it magical"
		},
		"subclassfeature7.1" : {
			name : "Curving Shot",
			source : ["X", 28],
			minlevel : 7,
			description : desc([
				"Once per turn when I miss with a magic arrow, I can use a bonus action to redirect it",
				"I reroll the attack against a different target within 60 ft of the original target"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature15" : {
			name : "Ever-Ready Shot",
			source : ["X", 28],
			minlevel : 15,
			description : "\n   " + "I regain one use of Arcane Shot if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("fighter", "cavalier-xgte", {
	regExpSearch : /cavalier/i,
	subname : "Cavalier",
	source : ["X", 30],
	fullname : "Cavalier",
	abilitySave : 1,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["X", 30],
			minlevel : 3,
			description : desc([
				"I gain proficiency with Animal Handling, History, Insight, Performance, or Persuasion",
				"Alternatively, I learn one language; Use the \"Choose Feature\" button above for this"
			]),
			choices : ["Language proficiency", "Skill proficiency: Animal Handling, History, Insight, Performance, or Persuasion"],
			"language proficiency" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I learn one language of my choice",
				languageProfs : [1]
			},
			"skill proficiency: animal handling, history, insight, performance, or persuasion" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I gain proficiency with Animal Handling, History, Insight, Performance, or Persuasion",
				skillstxt : "\n\n" + toUni("Cavalier") + ": Choose one from: Animal Handling, History, Insight, Performance, or Persuasion."
			}
		},
		"subclassfeature3.1" : {
			name : "Born in the Saddle",
			source : ["X", 30],
			minlevel : 3,
			description : desc([
				"I have advantage on saves to avoid falling off my mount, and land on my feet if I fail",
				"Mounting or dismounting a creature costs me only 5 ft of movement instead of half"
			]),
			savetxt : { adv_vs : ["falling off my mount"] }
		},
		"subclassfeature3.2" : {
			name : "Unwavering Mark",
			source : ["X", 30],
			minlevel : 3,
			description : desc([
				"If I hit a creature with a melee weapon attack, I mark it until the end of my next turn",
				"While it is within 5 ft of me, a marked target has disadv. on attacks not directed at me",
				"If it damages anybody but me, I can make a special melee attack vs. it in my next turn",
				"This takes a bonus action, but has adv. and adds half my fighter level to the damage",
				"A mark ends early if I'm incapacitated, die, or somebody else marks the target"
			]),
			usages : "Strength modifier per ",
			usagescalc : "event.value = Math.max(1, What('Str Mod'));",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+" + Math.floor(n/2) + " damage";
			}),
			calcChanges : {
				atkCalc : ["if (isMeleeWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/\\b(unwavering.?mark|marked)\\b/i).test(WeaponText)) { output.extraDmg += Math.floor(classes.known.fighter.level/2); }; ", "If I include the words 'Unwavering Mark' or 'Marked' in the name or description of a melee weapon, it gets half my fighter level added to its Damage."]
			}
		},
		"subclassfeature7" : {
			name : "Warding Maneuver",
			source : ["X", 30],
			minlevel : 7,
			description : desc([
				"As a reaction when I or a creature within 5 ft is hit, I can try to fend off the strike",
				"I add 1d8 to the target's AC; If the attack still hits, the target has resistance against it",
				"I can only do this while wielding a melee weapon or a shield"
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest",
			action : ["reaction", ""],
		},
		"subclassfeature10" : {
			name : "Hold the Line",
			source : ["X", 30],
			minlevel : 10,
			description : desc([
				"Creatures provoke opportunity attacks when moving 5 ft or more while within my reach",
				"If I hit an opportunity attack, the target's speed is reduced to 0 until the end of the turn"
			])
		},
		"subclassfeature15" : {
			name : "Ferocious Charger",
			source : ["X", 31],
			minlevel : 15,
			description : desc([
				"If I hit a creature after moving 10 ft in a straight line, it must make a Strength save",
				"If failed, the target is knocked prone; I can do this only once per turn"
			])
		},
		"subclassfeature18" : {
			name : "Vigilant Defender",
			source : ["X", 31],
			minlevel : 18,
			description : desc([
				"I can make opportunity attacks without using my reaction",
				"I can do this only once on every creature's turn, except on my own turn",
				"I can't do this on the same turn that I use my normal reaction"
			])
		}
	}
});
AddSubClass("fighter", "samurai-xgte", {
	regExpSearch : /samurai/i,
	subname : "Samurai",
	source : ["X", 31],
	fullname : "Samurai",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["X", 31],
			minlevel : 3,
			description : desc([
				"I gain proficiency with History, Insight, Performance, or Persuasion",
				"Alternatively, I learn one language; Use the \"Choose Feature\" button above for this"
			]),
			choices : ["Language proficiency", "Skill proficiency: History, Insight, Performance, or Persuasion"],
			"language proficiency" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I learn one language of my choice",
				languageProfs : [1]
			},
			"skill proficiency: history, insight, performance, or persuasion" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I gain proficiency with History, Insight, Performance, or Persuasion",
				skillstxt : "\n\n" + toUni("Samurai") + ": Choose one from: History, Insight, Performance, or Persuasion."
			}
		},
		"subclassfeature3.1" : {
			name : "Fighting Spirit",
			source : ["X", 31],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can give myself advantage on weapon attacks and temporary HP",
				"This advantage on weapon attack rolls lasts until the end of my current turn"
			]),
			recovery : "long rest",
			usages : 3,
			additional : levels.map(function (n) { return n < 3 ? "" : (n < 10 ? 5 : n < 15 ? 10 : 15) + " temporary HP"; }),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Elegant Courtier",
			source : ["X", 31],
			minlevel : 7,
			description : desc([
				"I can add my Wisdom modifier to any Charisma (Persuasion) checks I make",
				"I gain proficiency with Wis saves, or if I'm already proficient, either Int or Cha saves"
			]),
			saves : ["Wis"],
			addMod : { type : "skill", field : "Pers", mod : "Wis", text : "I can add my Wisdom modifier to any Charisma (Persuasion) checks I make." }
		},
		"subclassfeature10" : {
			name : "Tireless Spirit",
			source : ["X", 31],
			minlevel : 10,
			description : "\n   " + "I regain one use of Fighting Spirit if I have no more remaining when I roll initiative"
		},
		"subclassfeature15" : {
			name : "Rapid Strike",
			source : ["X", 31],
			minlevel : 15,
			description : desc([
				"With the Attack action, I can forgo advantage on one attack to make one extra attack",
				"This extra attack is part of the same action; I can do this only once per turn"
			])
		},
		"subclassfeature18" : {
			name : "Strength Before Death",
			source : ["X", 31],
			minlevel : 18,
			description : desc([
				"If I'm reduced to 0 HP but not killed outright, I can delay falling unconscious",
				"I then immediately take a bonus turn, interrupting the current turn",
				"While I'm at 0 HP, I suffer damage normally and die if I have 3 failed death saves",
				"If I'm still at 0 HP at the end of this bonus turn, I fall unconscious"
			]),
			recovery : "long rest",
			usages : 1
		}
	}
});

// Add 3 subclasses for the Monk
AddSubClass("monk", "way of the drunken master-xgte", {
	regExpSearch : /^((?=.*drunken)(?=.*master))|((?=.*drunk)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Drunken Master",
	source : ["X", 33],
	fullname : "Drunken Master",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["X", 34],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with the Performance skill and brewer's supplies",
			skills : ["Performance"],
			skillstxt : "\n\n" + toUni("Monk (Way of the Drunken Master)") + ": Performance.",
			toolProfs : ["Brewer's supplies"]
		},
		"subclassfeature3.1" : {
			name : "Drunken Technique",
			source : ["X", 34],
			minlevel : 3,
			description : "\n   " + "When using Flurry of Blows, I gain the benefits of a Disengage and +10 ft speed this turn"
		},
		"subclassfeature6" : {
			name : "Tipsy Sway",
			source : ["X", 34],
			minlevel : 6,
			description : "\n   " + "1 ki point: as a reaction if missed in melee, attacker instead hits other I see within 5 ft",
			additional : "Standing up from prone costs only 5 ft",
			action : ["reaction", ""]
		},
		"subclassfeature11" : {
			name : "Drunkard's Luck",
			source : ["X", 34],
			minlevel : 11,
			description : "\n   " + "By spending 2 ki points, I can remove disadv. from an ability check, attack roll, or save",
			additional : "2 ki points"
		},
		"subclassfeature17" : {
			name : "Intoxicated Frenzy",
			source : ["X", 34],
			minlevel : 17,
			description : "\n   " + "I can make 3 extra attacks with Flurry of Blows if each is used on a different target"
		}
	}
});
AddSubClass("monk", "way of the kensei-xgte", {
	regExpSearch : /kensei/i,
	subname : "Way of the Kensei",
	source : ["X", 34],
	fullname : "Kensei",
	features : {
		"subclassfeature3" : {
			name : "Path of the Kensei",
			source : ["X", 34],
			minlevel : 3,
			description : desc([
				"I gain proficiency with either calligrapher's supplies or painter's supplies",
				"Some weapons, that don't have the heavy or special property, are kensei weapons for me",
				"At least one ranged and one melee weapon, more at higher levels (longbow does qualify)",
				"With these: proficient, count as a monk weapons, special bonuses depending on type held:",
				"\u2022 Melee: if I do unarmed strike during an Attack action, +2 AC until my next turn starts",
				"\u2022 Ranged: as a bonus action, ranged weapon attacks deal +1d4 damage in current turn"
			]),
			action: ["bonus action", " (with ranged)"],
			additional : levels.map( function(n) { return n < 3 ? "" : (n < 6 ? 2 : n < 11 ? 3 : n < 17 ? 4 : 5) + " kensei weapons"; }),
			toolProfs : ["calligrapher's or painter's supplies"],
			calcChanges : {
				atkAdd : [
					"var monkDie = function(n) {return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10;}; if (classes.known.monk && classes.known.monk.level > 2 && theWea && !isSpell && !theWea.monkweapon && (!(/heavy|special/i).test(fields.Description) || WeaponName === 'longbow') && WeaponText.toLowerCase().indexOf('kensei') !== -1) {var aMonkDie = aMonkDie ? aMonkDie : monkDie(classes.known.monk.level); try {var curDie = eval(fields.Damage_Die.replace('d', '*'));} catch (e) {var curDie = 'x';}; if (isNaN(curDie) || curDie < aMonkDie) {fields.Damage_Die = '1d' + aMonkDie; }; if (theWea.ability === 1) {fields.Mod = StrDex; }; if (isRangedWeapon) {fields.Description += (fields.Description ? '; ' : '') + 'As bonus action with Attack action, +1d4 damage'; }; fields.Proficiency = true; }; ",
					"If I inlcude the word 'Kensei' in the name of a weapon that doesn't have the Heavy or Special attribute, or that is a longbow, that weapon gains the same benefits as any other 'Monk Weapon'.\nIn addition, with ranged 'Kensei Weapons', I can take a bonus action to have that hit, and any other hit after that as part of the same action, do +1d4 damage."
				]
			}
		},
		"ki-empowered strikes" : {
			name : "One with the Blade",
			source : ["X", 34],
			minlevel : 6,
			description : "\n   " + "My unarmed strikes and kensei weapon attacks count as magical",
			calcChanges : {
				atkAdd : ["if (((/unarmed strike/i).test(WeaponName) || (WeaponText.toLowerCase().indexOf('kensei') !== -1  && theWea && !isSpell && (!(/heavy|special/i).test(fields.Description) || WeaponName === 'longbow'))) && fields.Description.indexOf('Counts as magical') === -1 && !thisWeapon[1]) {fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';}; ", "My unarmed strikes and any Kensei Weapons count as magical for overcoming resistances and immunities."]
			},
			extraname : "Way of the Kensei 6",
			"deft strike" : {
				name : "Deft Strike",
				source : ["X", 35],
				description : "\n   " + "Once per turn when I hit with a kensei weapon, I can do a martial arts die extra damage",
				additional : "1 ki point"
			},
			eval : "ClassFeatureOptions(['monk', 'ki-empowered strikes', 'deft strike', 'extra']);",
			removeeval : "ClassFeatureOptions(['monk', 'ki-empowered strikes', 'deft strike', 'extra'], 'remove');"
		},
		"subclassfeature17" : {
			name : "Unerring Accuracy",
			source : ["X", 35],
			minlevel : 17,
			description : "\n   " + "Once per turn, if I miss a monk weapon attack on my turn, I can reroll the attack roll",
			extraname : "Way of the Kensei 11",
			"sharpen the blade" : {
				name : "Sharpen the Blade",
				source : ["X", 35],
				description : desc([
					"As a bonus action, I can grant my kensei weapon a bonus to attack and damage rolls",
					"This bonus is equal to the number of ki points I spend and doesn't stack with magic",
					"This lasts for 1 minute or until I use this feature again"
				]),
				additional : "1 to 3 ki points",
				action : ["bonus action", ""]
			},
			changeeval : "if (newClassLvl.monk >= 11 && (What('Extra.Notes') + What('Class Features')).toLowerCase().indexOf('sharpen the blade') === -1) {ClassFeatureOptions(['monk', 'subclassfeature17', 'sharpen the blade', 'extra'])} else if (newClassLvl.monk <= 11 && oldClassLvl.monk >= 11) {ClassFeatureOptions(['monk', 'subclassfeature17', 'sharpen the blade', 'extra'], 'remove')}"
		}
	}
});
if (!ClassSubList["monk-way of the sun soul"] && (!SourceList.S || SourceList.S.abbreviation.toLowerCase() !== "scag")) {
	// the Way of the Sun Soul subclass is identical to the one in SCAG, so only add if it that one doesn't exist yet
	AddSubClass("monk", "way of the sun soul", {
		regExpSearch : /^(?=.*\bsun)(?=.*\b(soul|spirit))((?=.*(warrior|monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
		subname : "Way of the Sun Soul",
		source : [["S", 131], ["X", 35]],
		features : {
			"subclassfeature3" : {
				name : "Radiant Sun Bolt",
				source : [["S", 131], ["X", 35]],
				minlevel : 3,
				additional : "1 ki point for 2 extra attacks",
				description : desc([
					"I gain a ranged spell attack that I can use as an attack in the Attack action",
					"If I do this and spend 1 ki point, I can make 2 of these attacks as a bonus action"
				]),
				action : ["bonus action", " (2\u00D7 with Attack action)"],
				eval : "AddWeapon('Radiant Sun Bolt');",
				removeeval : "RemoveWeapon('Radiant Sun Bolt');",
				extraname : "Way of the Sun Soul 6",
				changeeval : "if (newClassLvl.monk >= 6 && (What('Extra.Notes') + What('Class Features')).toLowerCase().indexOf('searing arc strike') === -1) {ClassFeatureOptions(['monk', 'subclassfeature3', 'searing arc strike', 'extra'])} else if (newClassLvl.monk < 6 && oldClassLvl.monk >= 6) {ClassFeatureOptions(['monk', 'subclassfeature3', 'searing arc strike', 'extra'], 'remove')};",
				"searing arc strike" : {
					name : "Searing Arc Strike",
					source : [["S", 131], ["X", 35]],
					description : desc([
						"After taking the Attack action, I can cast Burning Hands as a bonus action [PHB 220]",
						"For every additional ki point I spend, Burning hands is cast at 1 higher spell level",
						"The maximum total ki points I can spend for this (including the 2) is half my Monk level"
					]),
					additional : levels.map(function (n) {
						if (n < 3) return "";
						var xtrKi = Math.max(0,Math.floor(n/2) - 2);
						return "2 ki points + max " + xtrKi + " ki point" + (xtrKi == 1 ? "" : "s");
					}),
					action : ["bonus action", " (after Attack action)"]
				}
			},
			"subclassfeature11" : {
				name : "Searing Sunburst",
				source : [["S", 131], ["X", 35]],
				minlevel : 11,
				description : desc([
					"As an action, anyone in a 20-ft radius light on a point within 150 ft makes a Con save",
					"If failed and not behind opaque total cover, take 2d6 (+ 2d6/ki point) radiant damage"
				]),
				action : ["action", ""],
				additional : "0 ki points + max 3 ki points"
			},
			"subclassfeature17" : {
				name : "Sun Shield",
				source : [["S", 131], ["X", 35]],
				minlevel : 17,
				description : desc([
					"As a reaction, when I'm hit by a melee attack, I can deal 5 + Wis mod radiant damage",
					"I can only do this while my light aura is on; I can turn it on/off as a bonus action"
				]),
				action : ["bonus action", " (start/stop)"],
				additional : "30-ft rad bright + 30-ft dim light",
				eval : "AddAction('reaction', 'Sun Shield (hit in melee)', 'Monk (Way of the Sun Soul)')",
				removeeval : "RemoveAction('reaction', 'Sun Shield');"
			}
		}
	});
	WeaponsList["radiant sun bolt"] = {
		regExpSearch : /^(?=.*radiant)(?=.*(sun|light))(?=.*bolt).*$/i,
		name : "Radiant Sun Bolt",
		source : [["S", 131], ["X", 35]],
		ability : 2,
		type : "Spell",
		damage : [1, 4, "radiant"],
		range : "30 ft",
		description : "If used in an Attack action, spend 1 ki point to use it twice as a bonus action",
		monkweapon : true,
		abilitytodamage : true
	};
};

// Add 2 subclasses for the Paladin
AddSubClass("paladin", "oath of conquest-xgte", {
	regExpSearch : /^((?=.*(knight tyrant|iron mongers))|((?=.*(conquest|tyranny|tyrant))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Conquest",
	source : ["X", 37],
	spellcastingExtra : ["armor of agathys", "command", "hold person", "spiritual weapon", "bestow curse", "fear", "dominate beast", "stoneskin", "cloudkill", "dominate person"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Conquering Presence",
			source : ["X", 38],
			minlevel : 3,
			description : desc([
				"As an action, all creatures of my choice within a 30-ft radius must make a Wisdom save",
				"If failed, a target is frightened for 1 minute; It can save again at the end of each turn"
			]),
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Guided Strike",
			source : ["X", 38],
			minlevel : 3,
			description : "\n   " + "When I make an attack roll, I can add a +10 bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature7" : {
			name : "Aura of Conquest",
			source : ["X", 38],
			minlevel : 7,
			description : desc([
				"Creatures that are frightened of me have their speed reduced to 0 while in my aura",
				"They also take psychic damage whenever they start theirs turn within my aura"
			]),
			additional : levels.map(function (n) {
				if (n < 7) return "";
				return (n < 18 ? 10 : 30) + "-foot aura; " + Math.floor(n / 2) + " psychic damage";
			})
		},
		"subclassfeature15" : {
			name : "Scornful Rebuke",
			source : ["X", 38],
			minlevel : 15,
			description : desc([
				"Whenever I'm hit with an attack while I'm not incapacitated, the attacker takes damage",
				"This is psychic damage equal to my Charisma modifier (minimum of 1)"
			])
		},
		"subclassfeature20" : {
			name : "Invincible Conqueror",
			source : ["X", 38],
			minlevel : 20,
			description : desc([
				"As an action, I can gain the following benefits for 1 minute:",
				" - I have resistance to all damage",
				" - I can make an additional attack as part of my Attack action",
				" - My melee weapons score critical hits on a roll of 19 or 20"
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("paladin", "oath of redemption-xgte", {
	regExpSearch : /^((?=.*redeemer)|((?=.*redemption)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Redemption",
	source : ["X", 38],
	spellcastingExtra : ["sanctuary", "sleep", "calm emotions", "hold person", "counterspell", "hypnotic pattern", "otiluke's resilient sphere", "stoneskin", "hold monster", "wall of force"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Emissary of Peace",
			source : ["X", 39],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I grant myself +5 on Charisma (Persuasion) checks for 10 minutes",
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Rebuke the Violent",
			source : ["X", 39],
			minlevel : 3,
			description : desc([
				"As a reaction after a creature within 30 ft attacks and damages another, I can rebuke it",
				"It takes the same damage as it dealt but as radiant damage, with a Wis save to halve it"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature7" : {
			name : "Aura of the Guardian",
			source : ["X", 39],
			minlevel : 7,
			description : desc([
				"As a reaction when an ally within my aura takes damage, I instead take the damage",
				"This damage can't be reduced in any way; Other effects might still apply to my ally"
			]),
			additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Protective Spirit",
			source : ["X", 39],
			minlevel : 15,
			description : "\n   " + "At the end of my turn when I'm below half HP and not incapacitated, I regain HP",
			additional : levels.map(function (n) { return n < 15 ? "" : "1d6+" + Math.floor(n/2) + " HP"; })
		},
		"subclassfeature20" : {
			name : "Emissary of Redemption",
			source : ["X", 39],
			minlevel : 20,
			description : desc([
				"When taking damage from a creature, I take only half and it takes the other half",
				"This stops working on any that I attack or force to make a save, until I have a long rest"
			]),
			dmgres : ["All from creatures"]
		}
	}
});

// Add 3 subclasses for the Ranger
AddSubClass("ranger", "gloom stalker-xgte", {
	regExpSearch : /^(?=.*gloom)(?=.*stalker).*$/i,
	subname : "Gloom Stalker",
	source : ["X", 41],
	fullname : "Gloom Stalker",
	features : {
		"subclassfeature3" : {
			name : "Dread Ambusher",
			source : ["X", 42],
			minlevel : 3,
			description : desc([
				"I can add my Wisdom modifier to my initiative rolls",
				"In the first turn of combat I get +10 ft speed and an extra attack with the Attack action",
				"If I take the Attack action and that extra attack hits, it does +1d8 damage"
			]),
			addMod : { type : "skill", field : "Init", mod : "Wis", text : "I can add my Wisdom modifier to my initiative rolls." }
		},
		"subclassfeature3.1" : {
			name : "Gloom Stalker Magic",
			source : ["X", 42],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 15",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["disguise self", "rope trick", "fear", "greater invisibility", "seeming"].concat(new Array(95)).concat("AddToKnown")
		},
		"subclassfeature3.2" : {
			name : "Umbral Sight",
			source : ["X", 42],
			minlevel : 3,
			description : desc([
				"I gain 60 ft darkvision, or add 30 ft to darkvision if I already had it because of my race",
				"When I'm in darkness, others gain no benefit from darkvision to detect me"
			]),
			vision : [["Darkvision", "fixed 60"], ["Darkvision", "+30"]]
		},
		"subclassfeature7" : {
			name : "Iron Mind",
			source : ["X", 42],
			minlevel : 7,
			description : "\n   " + "I gain proficiency with Wis saves, or if I'm already proficient, either Int or Cha saves",
			saves : ["Wis"]
		},
		"subclassfeature11" : {
			name : "Stalker's Flurry",
			source : ["X", 42],
			minlevel : 11,
			description : "\n   " + "Once on each of my turns when I miss a weapon attack, I can make an extra attack"
		},
		"subclassfeature15" : {
			name : "Shadowy Dodge",
			source : ["X", 42],
			minlevel : 15,
			description : "\n   " + "As a reaction when I'm attacked without adv., I can impose disadv. on the attack roll",
			action : ["reaction", " (when attacked)"]
		}
	}
});
AddSubClass("ranger", "horizon walker-xgte", {
	regExpSearch : /^(?=.*horizon)(?=.*walker).*$/i,
	subname : "Horizon Walker",
	source : ["X", 42],
	fullname : "Horizon Walker",
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Detect Portal",
			source : ["X", 42],
			minlevel : 3,
			description : "\n   " + "As an action, I sense the distance and direction to the closest planar portal within 1 mile",
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Horizon Walker Magic",
			source : ["X", 42],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 15",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["protection from evil and good", "misty step", "haste", "banishment", "teleportation circle"].concat(new Array(95)).concat("AddToKnown")
		},
		"subclassfeature3.2" : {
			name : "Planar Warrior",
			source : ["X", 42],
			minlevel : 3,
			description : desc([
				"As a bonus action, I choose one creature that I can see within 30 ft of me",
				"All damage from my first weapon attack that hits it on this turn becomes force damage",
				"In addition, that first hit does extra damage"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "+" + (n < 11 ? 1 : 2) + "d8 force damage"; }),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Ethereal Step",
			source : ["X", 43],
			minlevel : 7,
			description : "\n   " + "As a bonus action, I can cast the Etherealness spell, which lasts until the end of my turn",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Ethereal Step",
				spells : ["etherealness"],
				selection : ["etherealness"],
				oncesr : true
			}
		},
		"subclassfeature11" : {
			name : "Distant Strike",
			source : ["X", 43],
			minlevel : 11,
			description : desc([
				"With the Attack action, I can teleport 10 ft before each attack, to a place I can see",
				"If I attack two different creatures with this action, I get an extra attack against a third"
			])
		},
		"subclassfeature15" : {
			name : "Spectral Defense",
			source : ["X", 43],
			minlevel : 15,
			description : "\n   " + "As a reaction when an attack damages me, I can give myself resistance vs. that attack",
			action : ["reaction", ""]
		}
	}
});
AddSubClass("ranger", "monster slayer-xgte", {
	regExpSearch : /^(?=.*monster)(?=.*slayer).*$/i,
	subname : "Monster Slayer",
	source : ["X", 43],
	fullname : "Monster Slayer",
	features : {
		"subclassfeature3" : {
			name : "Hunter's Sense",
			source : ["X", 43],
			minlevel : 3,
			description : desc([
				"As an action, I learn vulnerabilities/immunities/resistances of a target I see within 60 ft",
				"If it is protected from divination magic, I sense it has none of these"
			]),
			action : ["action", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature3.1" : {
			name : "Monster Slayer Magic",
			source : ["X", 43],
			minlevel : 3,
			description : "\n   " + "I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["protection from evil and good", "zone of truth", "magic circle", "banishment", "hold monster"].concat(new Array(95)).concat("AddToKnown")
		},
		"subclassfeature3.2" : {
			name : "Slayer's Prey",
			source : ["X", 43],
			minlevel : 3,
			description : desc([
				"As a bonus action, I designate a creature I see within 60 ft; This lasts until I do this again",
				"My first hit to the target with a weapon attack on each of my turns does +1d6 damage"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Supernatural Defense",
			source : ["X", 43],
			minlevel : 7,
			description : desc([
				"I add 1d6 to saving throws the current target of my Slayer's Prey forces me to make",
				"In addition, I also add 1d6 to checks to escape that target's grapple"
			])
		},
		"subclassfeature11" : {
			name : "Magic-User's Nemesis",
			source : ["X", 43],
			minlevel : 11,
			description : desc([
				"As a reaction when I see someone within 60 ft casting a spell or teleporting, I can foil it",
				"The target must make a Wisdom save or have its spell or teleport fail and be wasted"
			]),
			action : ["reaction", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Slayer's Counter",
			source : ["X", 43],
			minlevel : 15,
			description : desc([
				"As a reaction when the target of my Slayer's Prey has me make a save, I can attack it",
				"I can make one weapon attack; If this hits, I automatically succeed on the saving throw"
			]),
			action : ["reaction", ""]
		}
	}
});

// Add 4 subclasses for the Rogue
AddSubClass("rogue", "inquisitive-xgte", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*inquisitive).*$/i,
	subname : "Inquisitive",
	source : ["X", 45],
	features : {
		"subclassfeature3" : {
			name : "Ear for Deceit",
			source : ["X", 45],
			minlevel : 3,
			description : "\n   " + "For Wis (Insight) to sense if another is lying, I can treat a die roll of 7 or lower as an 8"
		},
		"subclassfeature3.1" : {
			name : "Eye for Detail",
			source : ["X", 46],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can do either of the following:",
				"\u2022 Make a Wisdom (Perception) check to spot a hidden creature or object",
				"\u2022 Make an Intelligence (Investigation) check to uncover or decipher clues"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.2" : {
			name : "Insightful Fighting",
			source : ["X", 46],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can decipher the tactics of another I can see that's not incapacitated",
				"I have to make a Wisdom (Insight) check vs. the target's Charisma (Deception) check",
				"If I succeed, I can use my sneak attack on it even if I don't have adv. (but not if disadv.)",
				"This benefit lasts for 1 minute or until I successfully use Insightful Fighting again"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature9" : {
			name : "Steady Eye",
			source : ["X", 46],
			minlevel : 9,
			usages : 1,
			recovery : "long rest",
			description : desc([
				"I'm more perceptive when I don't move more than half my speed in the same turn",
				"If so, I gain adv. on Wis (Perception) and Int (Investigation) checks during that turn"
			])
		},
		"subclassfeature13" : {
			name : "Unerring Eye",
			source : ["X", 46],
			minlevel : 13,
			description : desc([
				"As an action, I can sense magical deceptions within 30 feet of me, but not what it does",
				"I learn the presence of illusions, shapechanged creatures, or magic designed to deceive"
			]),
			action : ["action", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature17" : {
			name : "Eye for Weakness",
			source : ["X", 46],
			minlevel : 17,
			description : "\n   " + "While my Insightful Fighting is active, I add 3d6 to sneak attacks against that target"
		}
	}
});
if (!ClassSubList["rogue-mastermind"] && (!SourceList.S || SourceList.S.abbreviation.toLowerCase() !== "scag")) {
	// the Mastermind subclass is identical to the one in SCAG, so only add if it that one doesn't exist yet
	AddSubClass("rogue", "mastermind", {
		regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*(mastermind|strategist)).*$/i,
		subname : "Mastermind",
		fullname : "Mastermind",
		source : [["S", 135], ["X", 46]],
		features : {
			"subclassfeature3" : {
				name : "Master of Intrigue",
				source : [["S", 135], ["X", 46]],
				minlevel : 3,
				description : desc([
					"I gain proficiency with disguise kits, forgery kits, one gaming set, and two languages",
					"I can mimic speech patterns and accents if I've heard them for at least 1 minute"
				]),
				languageProfs : [2],
				toolProfs : ["Disguise kit", "Forgery kit", ["Gaming set", 1]]
			},
			"subclassfeature3.1" : {
				name : "Master of Tactics",
				source : [["S", 135], ["X", 46]],
				minlevel : 3,
				description : desc([
					"I can use the Help action as a bonus action",
					"This even works if the ally attacks a target within 30 ft of me that can see or hear me"
				]),
				action : ["bonus action", ""]
			},
			"subclassfeature9" : {
				name : "Insightful Manipulator",
				source : [["S", 135], ["X", 46]],
				minlevel : 9,
				description : desc([
					"By spending 1 minute observing/interacting outside of combat I can learn capabilities",
					"The DM tells me if the target is my equal, superior, or inferior in regard to two things:",
					" - Intelligence score    - Wisdom score    - Charisma score    - Class levels (if any)"
				])
			},
			"subclassfeature13" : {
				name : "Misdirection",
				source : [["S", 135], ["X", 46]],
				minlevel : 13,
				description : desc([
					"As a reaction, I can redirect an attack meant for me to a creature within 5 ft of me",
					"This only works if the creature is providing me with cover against the attack"
				]),
				action : ["reaction", ""]
			},
			"subclassfeature17" : {
				name : "Soul of Deceit",
				source : [["S", 135], ["X", 46]],
				minlevel : 17,
				description : desc([
					"My thoughts can't be read by telepathy or similar means; I can project false thoughts",
					"For that, I must pass a Cha (Deception) vs. Wis (Insight) check to fool the mind reader",
					"Magic always determines I'm truthful; I can't be magically compelled to tell the truth"
				])
			}
		}
	});
};
AddSubClass("rogue", "scout-xgte", {
	regExpSearch : /scout/i,
	subname : "Scout",
	source : ["X", 47],
	features : {
		"subclassfeature3" : {
			name : "Skirmisher",
			source : ["X", 47],
			minlevel : 3,
			description : "\n   " + "As a reaction when a hostile ends its turn within 5 ft of me, I can move half my speed",
			action : ["reaction", ""]
		},
		"subclassfeature3.1" : {
			name : "Survivalist",
			source : ["X", 47],
			minlevel : 3,
			description : "\n   " + "I gain proficiency and expertise with the Nature and Survival skills",
			skillstxt : "\n\n" + toUni("Scout") + ": proficiency and expertise with Nature and Survival.",
			eval : "AddSkillProf('Nature', true, true); AddSkillProf('Survival', true, true);",
			removeeval : "AddSkillProf('Nature', false, true); AddSkillProf('Survival', false, true);"
		},
		"subclassfeature9" : {
			name : "Superior Mobility",
			source : ["X", 47],
			minlevel : 9,
			description : "\n   " + "I gain +10 ft to my walking speed (and swimming/climbing speed, if applicable)",
			speed : {
				walk : { spd : "+10", enc : "+10" },
				climb : { spd : "_10", enc : "_10" },
				swim : { spd : "_10", enc : "_10" }
			}
		},
		"subclassfeature13" : {
			name : "Ambush Master",
			source : ["X", 47],
			minlevel : 13,
			description : desc([
				"I gain advantage on Initiative rolls",
				"The first creature I hit in the first round of combat becomes an easy target",
				"Until the start of my next turn, all attacks against the target have advantage"
			]),
			eval : "Checkbox('Init Adv', true, 'Advantage to Initiative checks was gained from Scout (Ambush Master)');",
			removeeval : "Checkbox('Init Adv', false, '');"
		},
		"subclassfeature17" : {
			name : "Sudden Strike",
			source : ["X", 47],
			minlevel : 17,
			description : desc([
				"With the Attack action, I can make one additional attack as a bonus action",
				"This attack can benefit from my Sneak Attack even if I already used it this turn",
				"However, I still can't use Sneak Attack on a single target more than once per turn"
			]),
			action : ["bonus action", " (with Attack action)"]
		}
	}
});
if (!ClassSubList["rogue-swashbuckler"] && (!SourceList.S || SourceList.S.abbreviation.toLowerCase() !== "scag")) {
	// the Swashbuckler subclass is identical to the one in SCAG, so only add if it that one doesn't exist yet
	AddSubClass("rogue", "swashbuckler", {
		regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*swashbuckl).*$/i,
		subname : "Swashbuckler",
		fullname : "Swashbuckler",
		source : [["S", 135], ["X", 47]],
		features : {
			"subclassfeature3" : {
				name : "Fancy Footwork",
				source : [["S", 135], ["X", 47]],
				minlevel : 3,
				description : desc([
					"Enemies I make a melee attack against in my turn can't use opportunity attacks on me",
					"This lasts until the end of my current turn"
				])
			},
			"subclassfeature3.1" : {
				name : "Rakish Audacity",
				source : [["S", 136], ["X", 47]],
				minlevel : 3,
				description : desc([
					"I don't need advantage to sneak attack if my target is the only one within 5 ft of me",
					"I still can't sneak attack if I have disadv.; I add my Charisma modifier to initiative rolls"
				]),
				addMod : { type : "skill", field : "Init", mod : "Cha", text : "I can add my Charisma modifier to initiative rolls." }
			},
			"subclassfeature9" : {
				name : "Panache",
				source : [["S", 136], ["X", 47]],
				minlevel : 9,
				description : desc([
					"As an action, I can beguile a creature that hears and understands me, for 1 minute",
					"It must succeed a Wis (Insight) check opposed by my Cha (Persuasion) or be affected as:",
					"\u2022 A hostile target gains disadv. on attacks and can't do opportunity attacks vs. not-me",
					"  This effect ends if an ally attacks or casts a spell vs. it, or if it and I are 60 ft apart",
					"\u2022 Targets that are not hostile are charmed and regard me as a friendly acquaintance",
					"  This effect ends if me or an ally do anything harmful to it"
				]),
				action : ["action", ""]
			},
			"subclassfeature13" : {
				name : "Elegant Maneuver",
				source : [["S", 136], ["X", 47]],
				minlevel : 13,
				description : "\n   " + "As a bonus action, I can gain adv. on my next Dex (Acrobatics) or Str (Athletics) check",
				action : ["bonus action", ""]
			},
			"subclassfeature17" : {
				name : "Master Duelist",
				source : [["S", 136], ["X", 47]],
				minlevel : 17,
				description : "\n   " + "Once per short rest, when I miss with an attack roll, I can roll again with advantage",
				recovery : "short rest",
				usages : 1
			}
		}
	});
};

// Add 3 subclasses for the Sorcerer
AddSubClass("sorcerer", "divine soul-xgte", { // this code includes contributions by SoilentBrad
	regExpSearch : /^(?=.*divine)(?=.*soul).*$/i,
	subname : "Divine Soul",
	source : ["X", 50],
	fullname : "Divine Soul",
	spellcastingList : {
		"class" : ["cleric", "sorcerer"]
	},
	features : {
		"subclassfeature1" : {
			name : "Divine Magic",
			source : ["X", 50],
			minlevel : 1,
			description : desc([
				"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
				"These cleric spells count as sorcerer spells for me",
				"I also learn a spell based on my affinity, use the \"Choose Feature\" button above for this"
			]),
			choices : ["Good", "Evil", "Law", "Chaos", "Neutrality"],
			"good" : {
				name : "Divine Magic: Good",
				description : desc([
					"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
					"I also learn Cure Wounds, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : {
					name : "Divine Magic (Good)",
					"class" : "cleric",
					level : [1,9],
					selection : ["cure wounds"]
				},
				eval : "if (classes.known.sorcerer && classes.known.sorcerer.level >= 14 && !(/.*?sorcerer,subclassfeature14,eagle.*/i).test(What('Class Features Remember'))) { ClassFeatureOptions(['sorcerer', 'subclassfeature14', 'eagle']); };"
			},
			"evil" : {
				name : "Divine Magic: Evil",
				description : desc([
					"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
					"I also learn Inflict Wounds, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : {
					name : "Divine Magic (Evil)",
					"class" : "cleric",
					level : [1,9],
					selection : ["inflict wounds"]
				},
				eval : "if (classes.known.sorcerer && classes.known.sorcerer.level >= 14 && !(/.*?sorcerer,subclassfeature14,bat.*/i).test(What('Class Features Remember'))) { ClassFeatureOptions(['sorcerer', 'subclassfeature14', 'bat']); };"
			},
			"law" : {
				name : "Divine Magic: Law",
				description : desc([
					"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
					"I also learn Bless, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : {
					name : "Divine Magic (Law)",
					"class" : "cleric",
					level : [1,9],
					selection : ["bless"]
				},
				eval : "if (classes.known.sorcerer && classes.known.sorcerer.level >= 14 && !(/.*?sorcerer,subclassfeature14,eagle.*/i).test(What('Class Features Remember'))) { ClassFeatureOptions(['sorcerer', 'subclassfeature14', 'eagle']); };"
			},
			"chaos" : {
				name : "Divine Magic: Chaos",
				description : desc([
					"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
					"I also learn Bane, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : {
					name : "Divine Magic (Chaos)",
					"class" : "cleric",
					level : [1,9],
					selection : ["bane"]
				},
				eval : "if (classes.known.sorcerer && classes.known.sorcerer.level >= 14 && !(/.*?sorcerer,subclassfeature14,bat.*/i).test(What('Class Features Remember'))) { ClassFeatureOptions(['sorcerer', 'subclassfeature14', 'bat']); };"
			},
			"neutrality" : {
				name : "Divine Magic: Neutrality",
				description : desc([
					"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
					"I learn Protection from Evil \u00D7 Good; It doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : {
					name : "Divine Magic (Neutrality)",
					"class" : "cleric",
					level : [1,9],
					selection : ["protection from evil and good"]
				},
				eval : "if (classes.known.sorcerer && classes.known.sorcerer.level >= 14) { ClassFeatureOptions(['sorcerer','subclassfeature14','dragonfly']); };"
			}
		},
		"subclassfeature1.2" : {
			name : "Favored by the Gods",
			source : ["X", 50],
			minlevel : 1,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can add 2d4 to the total",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Empowered Healing",
			source : ["X", 50],
			minlevel : 6,
			description : desc([
				"Once per turn, when I or an ally in 5 ft roll dice to healing with a spell, I can reroll dice",
				"By spending 1 sorcery point; I can reroll any number of those dice for that spell once"
			]),
			additional : "1 sorcery point"
		},
		"subclassfeature14" : {
			name : "Otherworldy Wings",
			source : ["X", 50],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
				"These wings last until I become incapacitated or I dismiss them as a bonus action"
			]),
			choices : ["eagle", "bat", "dragonfly"],
			choicesNotInMenu : true,
			"eagle" : {
				name : "Otherworldy Wings",
				description : desc([
					"As a bonus action, I manifest a pair of spectral eagle wings, giving me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"bat" : {
				name : "Otherworldy Wings",
				description : desc([
					"As a bonus action, I manifest a pair of spectral bat wings, giving me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"dragonfly" : {
				name : "Otherworldy Wings",
				description : desc([
					"As a bonus action, I create a pair of spectral dragonfly wings, giving me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			action : ["bonus action", ""],
			speed : { fly : { spd : 30, enc : 20 } },
			eval : "if(FeaChoice===''){var CFrem=What('Class Features Remember');var tReg=/.*?sorcerer,subclassfeature1,(good|evil|law|chaos|neutrality).*/i;if((tReg).test(CFrem)){var CFchoice=CFrem.replace(tReg,'$1');FeaChoice=(/good|law/).test(CFchoice)?'eagle':(/evil|chaos/).test(CFchoice)?'bat':'dragonfly';AddString('Class Features Remember','sorcerer,subclassfeature14,'+FeaChoice,false);};};"
		},
		"subclassfeature18" : {
			name : "Unearthly Recovery",
			source : ["X", 50],
			minlevel : 18,
			description : desc([
				"As a bonus action when I have less than half of my max HP remaining, I can heal myself",
				"I regain a number of HP equal to half my hit point maximum"
			]),
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("sorcerer", "shadow magic-xgte", {
	regExpSearch : /^(?=.*(sorcerer|witch))(?=.*shadow).*$/i,
	subname : "Shadow Magic",
	source : ["X", 50],
	fullname : "Shadow Sorcerer",
	features : {
		"subclassfeature1" : {
			name : "Eyes of the Dark",
			source : ["X", 51],
			minlevel : 1,
			description : "\n   " + "I gain 120 ft darkvision",
			vision : [["Darkvision", 120]]
		},
		"subclassfeature1.1" : {
			name : "Strength of the Grave",
			source : ["X", 51],
			minlevel : 1,
			description : desc([
				"When damage reduces me to 0 HP, that isn't radiant damage or a critical hit,",
				"I can make a Charisma save (DC 5 + damage taken) to drop to 1 HP instead"
			]),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature3" : {
			name : "Darkness",
			source : ["X", 51],
			minlevel : 3,
			description : desc([
				"I learn Darkness, which doesn't count against my number of spells known",
				"I can also cast it by spending 2 sorcery points and then I can see through it normally"
			]),
			additional : "2 sorcery points",
			action : ["action", " (2 sorcery points)"],
			spellcastingBonus : {
				name : "Eyes of the Dark",
				spells : ["darkness"],
				selection : ["darkness"]
			}
		},
		"subclassfeature6" : {
			name : "Hound of Ill Omen",
			source : ["X", 51],
			minlevel : 6,
			description : desc([
				"As a bonus action, I summon a hound within 30 ft of a creature I see within 120 ft",
				"The hound has all the stats of a dire wolf with the following exceptions:",
				"\u2022 It is medium size and counts as a monstrosity not a beast",
				"\u2022 It start with a number of temporary hit points equal to half my sorcerer level",
				"\u2022 At the start of its turn, it automatically knows where the (hidden) target is",
				"\u2022 It can only move towards and make (opportunity) attack against the target",
				"\u2022 It can move through other creatures and objects as if they were difficult terrain",
				"\u2022 It takes 5 force damage if it ends its turn inside an object",
				"The target has disadvantage on saves vs. my spells while the hound is within 5 ft of it",
				"It disappears if reduced to 0 HP, if the target is reduced to 0 HP, or after 5 minutes"
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : "3 sorcery points; " + Math.floor(n/2) + " temporary HP"; }),
			action : ["bonus action", " (3 sorcery points)"]
		},
		"subclassfeature14" : {
			name : "Shadow Walk",
			source : ["X", 51],
			minlevel : 14,
			description : desc([
				"As a bonus action when I'm in dim light or darkness, I can teleport up to 120 ft",
				"The destination has to be unoccupied, within line of sight, and in dim light or darkness"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Umbral Form",
			source : ["X", 51],
			minlevel : 18,
			additional : "6 sorcery points",
			description : desc([
				"As a bonus action, I transform into a shadow form for 1 minute",
				"While transformed, I have resistance to all damage except force and radiant damage",
				"Also, I can move through other creatures and objects as if they were difficult terrain",
				"I take 5 force damage if I end my turn inside an object",
				"This ends early if I end it as a bonus action, I die, or I'm incapacitated"
			]),
			action : ["bonus action", " (6 sorcery points)"]
		}
	}
});
if (!ClassSubList["sorcerer-storm sorcery"] && (!SourceList.S || SourceList.S.abbreviation.toLowerCase() !== "scag")) {
	// the Storm Sorcery subclass is identical to the one in SCAG, so only add if it that one doesn't exist yet
	AddSubClass("sorcerer", "storm sorcery", {
		regExpSearch : /^(?=.*(sorcerer|witch))((?=.*(storm|tempest|hurricane))|((?=.*air)(?=.*element))).*$/i,
		subname : "Storm Sorcery",
		fullname : "Storm Sorcerer",
		source : [["S", 137], ["X", 51]],
		features : {
			"subclassfeature1" : {
				name : "Wind Speaker",
				source : [["S", 137], ["X", 52]],
				minlevel : 1,
				description : "\n   " + "I can speak, read, and write Primordial (and its dialects Aquan, Auran, Ignan, Terran)",
				languageProfs : ["Primordial"]
			},
			"subclassfeature1.1" : {
				name : "Tempestuous Magic",
				source : [["S", 137], ["X", 52]],
				minlevel : 1,
				description : desc([
					"As a bonus action, after casting a 1st-level or higher spell, I can control elemental air",
					"I can use this control to fly up to 10 feet without provoking opportunity attacks"
				]),
				action : ["bonus action", " (after casting)"]
			},
			"subclassfeature6" : {
				name : "Heart of the Storm",
				source : [["S", 137], ["X", 52]],
				minlevel : 6,
				description : desc([
					"I have resistance to lightning and thunder damage",
					"When I start casting a 1st-level or higher spell that deals lightning or thunder damage,",
					"I deal lightning or thunder damage to a creature within 10 ft of me that I can see"
				]),
				additional : levels.map(function (n) { return n < 6 ? "" : Math.floor(n/2) + " damage"; }),
				dmgres : ["Lightning", "Thunder"]
			},
			"subclassfeature6.1" : {
				name : "Storm Guide",
				source : [["S", 137], ["X", 52]],
				minlevel : 6,
				description : desc([
					"As an action, I can stop rain around me in 20-ft radius; bonus action for it to resume",
					"As a bonus action, I can choose the direction of wind around me in a 100-ft radius",
					"This lasts until the end of my next turn and doesn't alter the wind's speed"
				]),
				action : ["bonus action", ""]
			},
			"subclassfeature14" : {
				name : "Storm's Fury",
				source : [["S", 137], ["X", 52]],
				minlevel : 14,
				description : desc([
					"As a reaction when hit by a melee attack, I can deal lightning damage to the attacker",
					"The attacker must also make a Strength save or be pushed up to 20 ft away from me"
				]),
				action : ["reaction", ""],
				additional : levels.map(function (n) { return n < 14 ? "" : n + " lightning damage"; })
			},
			"subclassfeature18" : {
				name : "Wind Soul",
				source : [["S", 137], ["X", 52]],
				minlevel : 18,
				description : desc([
					"I have immunity to lightning and thunder damage and gain magical 60 ft fly speed",
					"As an action, I reduce my fly speed to 30 ft and give allies 30 ft fly speed for 1 hour",
					"I can do this once per short rest for up to 3 + my Charisma modifier allies within 30 ft"
				]),
				action : ["action", ""],
				savetxt : { immune : ["lightning", "thunder"] },
				speed : { fly : { spd : "fixed 60", enc : "fixed 60" } },
				usages : 1,
				recovery : "short rest"
			}
		}
	});
};

// Add 2 subclasses for the Warlock
AddSubClass("warlock", "the celestal-xgte", {
	regExpSearch : /^(?=.*warlock)(?=.*celestial).*$/i,
	subname : "the Celestial",
	source : ["X", 54],
	spellcastingExtra : ["cure wounds", "guiding bolt", "flaming sphere", "lesser restoration", "daylight", "revivify", "guardian of faith", "wall of fire", "flame strike", "greater restoration"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrips",
			source : ["X", 54],
			minlevel : 1,
			description : "\n   " + "I learn the Light and Sacred Flame cantrips, not counting for the number I can know",
			spellcastingBonus : [{
				name : "Bonus Cantrips",
				spells : ["light"],
				selection : ["light"]
			}, {
				name : "Bonus Cantrips",
				spells : ["sacred flame"],
				selection : ["sacred flame"]
			}]
		},
		"subclassfeature1.1" : {
			name : "Healing Light",
			source : ["X", 54],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can heal a creature I can see within 60 ft by expending dice",
				"I can expend up to my Charisma modifier (min 1) of dice from my pool at a time",
				"The target heals HP equal to the roll of the dice; I regain all expended dice on a long rest"
			]),
			usages : levels.map(function (n) { return (n + 1) + "d6 per "; }),
			usagescalc : "event.value = !classes.known.warlock ? '' : (1 + classes.known.warlock.level) + 'd6';",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Radiant Soul",
			source : ["X", 55],
			minlevel : 6,
			description : desc([
				"I add my Cha modifier once to the fire or radiant damage of cantrips and spells I cast",
				"This bonus only applies to one damage roll; Also, I have resistance to radiant damage"
			]),
			dmgres : ["Radiant"],
			calcChanges : {
				atkCalc : ["if (isSpell && (/fire|radiant/i).test(fields.Damage_Type)) { output.extraDmg += What('Cha Mod'); }; ", "Cantrips and spells that deal fire or radiant damage get my Charisma modifier added to the damage once."]
			}
		},
		"subclassfeature10" : {
			name : "Celestial Resilience",
			source : ["X", 55],
			minlevel : 10,
			description : desc([
				"When I finish a short or long rest, I and up to five allies gain temporary hit points",
				"I get my warlock level + Cha mod, while my allies get half my warlock level + Cha mod"
			]),
			additional : levels.map(function (n) { return n < 10 ? "" : "Me: " + n + "+Cha mod; Allies: " + Math.floor(n / 2) + "+Cha mod"; })
		},
		"subclassfeature14" : {
			name : "Searing Vengeance",
			source : ["X", 55],
			minlevel : 14,
			description : desc([
				"At the start of my turn when I would make a death save, I can instead spring back up",
				"I recover HP equal to half my current HP maximum, and can then stand up if I choose",
				"When I do, creatures of my choice within 30 ft take 2d8 + Cha mod in radiant damage",
				"Damaged creatures are blinded until the end of my current turn"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});
AddSubClass("warlock", "the hexblade-xgte", { // this code includes contributions by SoilentBrad
	regExpSearch : /^(?=.*hexblade)(?=.*warlock).*$/i,
	subname : "the Hexblade",
	source : ["X", 55],
	spellcastingExtra : ["shield", "wrathful smite", "blur", "branding smite", "blink", "elemental weapon", "phantasmal killer", "staggering smite", "banishing smite", "cone of cold"],
	features : {
		"subclassfeature1" : {
			name : "Hexblade's Curse",
			source : ["X", 55],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can curse a creature I can see within 30 ft of me for 1 minute",
				"\u2022 I add my proficiency bonus to damage rolls against the cursed target",
				"\u2022 My attack rolls against the curse target score a critical hit on a roll of 19 and 20",
				"\u2022 If the target dies while cursed, I regain HP equal to my warlock level + Cha mod",
				"The curse ends after 1 minute, when the target dies, I die, or I'm incapacitated"
			]),
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : ["if (!isDC && (/curse/i).test(WeaponText) && !CritChance) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "If I include the word 'Curse' in the name of a weapon, the automation will treat the attack as being against a target of the Hexblade's Curse: adding my proficiency bonus to the damage and adding the increased chance of a critical hit to the description."],
				atkCalc : ["if ((/curse/i).test(WeaponText)) {output.extraDmg += output.prof; }; ", ""]
			}
		},
		"subclassfeature1.1" : {
			name : "Hex Warrior",
			source : ["X", 55],
			minlevel : 1,
			description : desc([
				"I gain proficiency with medium armor, shields, and martial weapons",
				"When I finish a long rest, I can imbue one weapon I touch with my will",
				"Until my next long rest, I can use it with Charisma instead of Strength or Dexterity",
				"I have to be proficient with the weapon and that is can't have the two-handed property",
				"This benefit also works with every weapon from Pact of the Blade, with no restriction"
			]),
			armor : [false, true, false, true],
			weapons : [false, true],
			calcChanges : {
				atkAdd : ["if ((/\\bpact\\b/i).test(WeaponText) || ((/hexblade/i).test(WeaponText) && !(/\\b(2|two).?hand(ed)?s?\\b/i).test(WeaponText))) { fields.Mod = What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') ? 6 : fields.Mod; }; ", "If I include either the word 'Hexblade' or 'Pact' in a weapon's name, it gets treated as the weapon I imbued to use Charisma instead of Strength or Dexterity, if my Charisma modifier is higher than the ability it would otherwise use. For a 'Pact' weapon, this will work with any type. For 'Hexblade', this will only work if the weapon doesn't have the two-handed property."]
			}
		},
		"subclassfeature6" : {
			name : "Accursed Specter",
			source : ["X", 56],
			minlevel : 6,
			description : desc([
				"When I slay a humanoid, I can curse its soul and have it rise as a specter from its corpse",
				"It has the stats of a specter (MM 279) with temporary HP equal to half my warlock level",
				"It rolls initiative and has its own turns, obeying my verbal commands",
				"It gains a bonus to attack rolls equal to my Charisma modifier (min +0)",
				"The specter remains until the end of my next long rest, at which point it vanishes"
			]),
			additional : levels.map( function(n) { return n < 6 ? "" : Math.floor(n/2) + " temp HP"; }),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Armor of Hexes",
			source : ["X", 56],
			minlevel : 10,
			description : desc([
				"As a reaction when a Hexblade's Curse recipient hits me with an attack, I can roll a d6",
				"On a result of 4 or higher, the attacks misses me instead, regardless of its d20 roll"
			])
		},
		"subclassfeature14" : {
			name : "Master of Hexes",
			source : ["X", 56],
			minlevel : 14,
			description : desc([
				"When the target of my Hexblade's Curse dies, I can curse another I can see within 30 ft",
				"I can't do this while incapacitated and I don't regain HP from the death of the previous"
			])
		}
	}
});

// Add Warlock Invocations
AddWarlockInvocation("Aspect of the Moon (prereq: Pact of the Tome)", {
	name : "Aspect of the Moon",
	description : "\n   " + "I don't need sleep nor can be forced to by any means; I can rest while doing light activity",
	source : [["X", 56], ["UA:RCO", 5]],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the tome') !== -1",
	savetxt : { text : ["Nothing can force me to sleep"] }
});
AddWarlockInvocation("Cloak of Flies (prereq: level 5 warlock)", {
	name : "Cloak of Flies",
	description : desc([
		"As a bonus action, I can surround myself with a 5-ft radius magical aura of buzzing flies",
		"It lasts until I'm incapacitated or dismiss it as a bonus action; Total cover block the aura",
		"The aura grants me adv. on Cha (Intimidation), but disadv. on all other Cha checks",
		"Creatures starting their turn in the aura take my Cha mod (min 0) in poison damage"
	]),
	source : [["X", 56], ["UA:RCO", 5]],
	prereqeval : "classes.known.warlock.level >= 5",
	recovery : "short rest",
	usages : 1,
	action : ["bonus action", " (start/stop)"]
});
AddWarlockInvocation("Eldritch Smite (prereq: level 5 warlock, Pact of the Blade)", {
	name : "Eldritch Smite",
	description : desc([
		"Once per turn when I hit a creature with my pact weapon, I can empower the strike",
		"By expending a warlock spell slot, the creature takes extra damage and is knocked prone",
		"It takes 1d8 force damage and another 1d8 force damage per level of the spell slot",
		"The target is only knocked prone if it is Huge or smaller"
	]),
	source : ["X", 56],
	prereqeval : "classes.known.warlock.level >= 5 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1"
});
AddWarlockInvocation("Ghostly Gaze (prereq: level 7 warlock)", {
	name : "Ghostly Gaze",
	description : desc([
		"As an action, I can gain darkvision, and the ability to see through solid objects, out to 30 ft",
		"Objects appear ghostly to me; This lasts up to 1 minute, while I'm concentrating on this"
	]),
	source : ["X", 56],
	prereqeval : "classes.known.warlock.level >= 7",
	recovery : "short rest",
	usages : 1,
	action : ["action", ""]
});
AddWarlockInvocation("Gift of the Depths (prereq: level 5 warlock)", {
	name : "Gift of the Depths",
	description : desc([
		"I can breathe underwater and I have a swim speed equal to my walking speed",
		"Once per long rest, I can cast Water Breathing without using a spell slot (PHB 287)"
	]),
	source : [["X", 57], ["UA:RCO", 6]],
	spellcastingBonus : {
		name : "Gift of the Depths",
		spells : ["water breathing"],
		selection : ["water breathing"],
		oncelr : true
	},
	prereqeval : "classes.known.warlock.level >= 5",
	speed : { swim : { spd : "walk", enc : "walk" } }
});
AddWarlockInvocation("Gift of the Ever-Living Ones (prereq: Pact of the Chain)", {
	name : "Gift of the Ever-Living Ones",
	description : "\n   " + "When I regain HP while my familiar is within 100 ft, I regain the max the dice can roll",
	source : [["X", 57], ["UA:RCO", 6]],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1"
});
AddWarlockInvocation("Grasp of Hadar (prereq: Eldritch Blast cantrip)", {
	name : "Grasp of Hadar",
	description : "\n   " + "When my Eldritch Blast hits a creature once or more, I can move it 10 ft closer to me",
	source : [["X", 57], ["UA:RCO", 6]],
	prereqeval : "hasEldritchBlast",
	calcChanges : {
		atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; Target moved 10 ft to me'; }; ", "When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can move it in a straight line 10 ft closer to me."]
	}
});
AddWarlockInvocation("Improved Pact Weapon (prereq: Pact of the Blade)", {
	name : "Improved Pact Weapon",
	description : desc([
		"I can use any pact weapon I create as my spellcasting focus for warlock spells",
		"Any pact weapon I create has a +1 magic weapon, if it isn't already a magic weapon",
		"I can now also conjure a shortbow, longbow, or light or heavy crossbow as my pact weapon"
	]),
	source : ["X", 57],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	calcChanges : {
		atkCalc : ["if (!thisWeapon[1] && (/\\bpact\\b/i).test(WeaponText)) { var pactMag = pactMag !== undefined ? 1 - pactMag : 1; output.magic += pactMag; }; ", "If I include the word 'Pact' in a the name of a melee weapon, shortbow, longbow, light crossbow, or heavy crossbow, it will be treated as my Pact Weapon.\n - If it doesn't already include a magical bonus in its name, the calculation will add +1 to its To Hit and Damage."],
		atkAdd : ["if ((/^(shortbow|longbow|light crossbow|heavy crossbow)$/).test(WeaponName) && (/\\bpact\\b/i).test(WeaponText)) {fields.Proficiency = true; fields.Description += thisWeapon[1] ? '' : (fields.Description ? '; ' : '') + 'Counts as magical'; }; ", ""]
	}
});
AddWarlockInvocation("Lance of Lethargy (prereq: Eldritch Blast cantrip)", {
	name : "Lance of Lethargy",
	description : desc([
		"Once per turn when my Eldritch Blast hits a creature, I can reduce its speed by 10 ft",
		"This speed reduction lasts until the end of my next turn"
	]),
	source : ["X", 57],
	prereqeval : "hasEldritchBlast",
	calcChanges : {
		atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; 1 target -10 ft speed'; }; ", "Once on each of my turns when I hit a creature with my Eldritch Blast cantrip, I can reduce its speed by 10 ft until the end of my next turn."]
	}
});
AddWarlockInvocation("Maddening Hex (prereq: level 5 warlock, Hex spell or warlock feature that curses)", {
	name : "Maddening Hex",
	description : desc([
		"As a bonus action, I cause pain around a target hexed by me within 30 ft that I can see",
		"It and any within 5 ft of it that I can see take my Cha mod (min 1) in psychic damage",
		"The Hex spell and any of my warlock features that curse are considered a hex for this"
	]),
	source : ["X", 57],
	prereqeval : "classes.known.warlock.level >= 5 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock.subclass) || (/sign of ill omen/i).test(toTestE))",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Relentless Hex (prereq: level 7 warlock, Hex spell or warlock feature that curses)", {
	name : "Relentless Hex",
	description : desc([
		"As a bonus action, I can teleport to a target hexed by me within 30 ft that I can see",
		"I teleport up to 30 ft to an unoccupied space that I can see within 5 ft of the target"
	]),
	source : ["X", 57],
	prereqeval : "classes.known.warlock.level >= 7 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock.subclass) || (/sign of ill omen/i).test(toTestE))",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Shroud of Shadow (prereq: level 15 warlock)", {
	name : "Shroud of Shadow",
	description : "\n   " + "I can cast Invisibility at will, without using spell slots (PHB 254)",
	source : [["X", 57], ["UA:RCO", 6]],
	spellcastingBonus : {
		name : "Shroud of Shadow",
		spells : ["invisibility"],
		selection : ["invisibility"],
		atwill : true
	},
	prereqeval : "classes.known.warlock.level >= 15"
});
AddWarlockInvocation("Tomb of Levistus (prereq: level 5 warlock)", {
	name : "Tomb of Levistus",
	description : desc([
		"As a reaction when I take damage, I can entomb myself in ice until the end of my turn",
		"During, I get 10 temp. HP per warlock level, which I use to absorb the triggering damage",
		"After, till the ice is gone, I also get vulnerability to fire, 0 speed, and am incapacitated"
	]),
	source : [["X", 57], ["UA:RCO", 6]],
	prereqeval : "classes.known.warlock.level >= 5",
	recovery : "short rest",
	usages : 1,
	action : ["reaction", ""],
	additional : levels.map( function(n) { return (n * 10) + " temp HP"; })
});
AddWarlockInvocation("Trickster's Escape (prereq: level 7 warlock)", {
	name : "Trickster's Escape",
	description : "\n   " + "Once per long rest, I can cast Freedom of Movement on myself without using a spell slot",
	source : [["X", 57], ["UA:RCO", 7]],
	spellcastingBonus : {
		name : "Trickster's Escape",
		spells : ["freedom of movement"],
		selection : ["freedom of movement"],
		oncelr : true
	},
	prereqeval : "classes.known.warlock.level >= 7"
});

// Add 1 subclass for the Wizard
AddSubClass("wizard", "war magic-xgte", {
	regExpSearch : /^(?=.*war)(?=.*(wizard|magic|mage)).*$/i,
	subname : "War Magic",
	source : ["X", 59],
	fullname : "War Mage",
	features : {
		"subclassfeature2" : { //has to be identical to a feature named in the ClassList
			name : "Arcane Deflection",
			source : ["X", 59],
			minlevel : 2,
			description : desc([
				"As a reaction when I'm hit by an attack, I can gain +2 to my AC against that attack",
				"As a reaction when I fail a save, I can gain +4 bonus to that saving throw",
				"After I do either, I can't cast spells other than cantrips until the end of my next turn"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature2.1" : {
			name : "Tactical Wit",
			source : ["X", 60],
			minlevel : 2,
			description : "\n   " + "I gain a bonus to my initiative rolls equal to my Intelligence modifier",
			addMod : { type : "skill", field : "Init", mod : "Int", text : "I can add my Intelligence modifier to initiative rolls." }
		},
		"subclassfeature6" : {
			name : "Power Surge",
			source : ["X", 60],
			minlevel : 6,
			description : desc([
				"I have a pool of stored power surges that I can use to empower my damaging spells",
				"I gain a power surge whenever I successfully end a spell with Dispel Magic or Counterspell",
				"This pool can store a number of power surges equal to my Intelligence modifier (min 1)",
				"It resets to 1 power surge after a long rest or when I have 0 surges left after a short rest",
				"When I deal damage with a wizard spell, I can spend a power surge to do extra damage",
				"One target takes half my wizard level in force damage; I can do this only once per turn"
			]),
			usages : "Resets to 1 after ",
			usagescalc : "event.value = !event.value || event.value == 'Resets to 1 after ' ? 1 : event.value;",
			recovery : "long rest",
			additional : levels.map( function(n) { return n < 6 ? "" : "+" + Math.floor(n/2) + " force damage"; })
		},
		"subclassfeature10" : {
			name : "Durable Magic",
			source : ["X", 60],
			minlevel : 10,
			description : "\n   " + "While I'm maintaining concentration on a spell, I gain +2 to AC and all saving throws"
		},
		"subclassfeature14" : {
			name : "Deflecting Shroud",
			source : ["X", 60],
			minlevel : 14,
			description : desc([
				"When I use my Arcane Deflection feature, magical energy arcs from me to creatures",
				"Up to 3 targets I can see within 60 ft of me take half my wizard level in force damage"
			]),
			additional : levels.map( function(n) { return n < 14 ? "" : Math.floor(n/2) + " force damage"; })
		}
	}
});

// Add feats
FeatsList["bountiful luck-xgte"] = {
	name : "Bountiful Luck",
	source : ["X", 73],
	prerequisite : "Being a Halfling",
	prereqeval : "CurrentRace.known.indexOf('halfling') !== -1",
	description : "When an ally I can see within 30 ft of me rolls a 1 on an attack roll, an ability check, or a saving throw, I can use my reaction to let the ally reroll the die. The ally must use the new roll. When I use this, I can't use my racial Lucky trait until the end of my next turn.",
	action : ["reaction", ""]
};
FeatsList["dragon fear-xgte"] = {
	name : "Dragon Fear",
	source : ["X", 74],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	calculate : "event.value = 'I can use my Breath Weapon to roar instead. Chosen creatures within 30 ft that can see or hear me must make a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' Wis save (8 + prof. bonus + Cha mod) or be frightened of me for 1 min. A target can repeat the save whenever it takes damage. [+1 Str, Con, or Cha]';",
	improvements : "Dragon Fear (feat): +1 Strength, Constitution, or Charisma;",
	eval : "AddAction('action', 'Breath Weapon or Dragon Fear', 'Dragon Fear (feat)', 'Breath Weapon');",
	removeeval : "AddAction('action', 'Breath Weapon', 'Dragonborn (Draconic Ancestry)', 'Breath Weapon or Dragon Fear'); if (CurrentRace.known !== 'dragonborn') { RemoveAction('action', 'Breath Weapon'); }; "
};
FeatsList["dragon hide-xgte"] = {
	name : "Dragon Hide",
	source : ["X", 74],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	description : "I gain retractable claws that I can retract or extend, requiring no action. While extended, my unarmed strikes deal 1d4 slashing damage. My scales harden, giving me an AC of 13 + Dexterity modifier + shield when I'm not wearing armor. [+1 Str, Con, or Cha]",
	improvements : "Dragon Hide (feat): +1 Strength, Constitution, or Charisma;",
	eval : "AddWeapon('Retractable Claws');",
	removeeval : "RemoveWeapon('Retractable Claws');",
	addarmor : "Dragon Hide"
};
FeatsList["drow high magic-xgte"] = {
	name : "Drow High Magic",
	source : ["X", 74],
	prerequisite : "Being a Drow (Dark Elf)",
	prereqeval : "CurrentRace.known.indexOf('dark elf') !== -1",
	description : "I can cast Detect Magic at will, without expending a spell slot. I can also cast Levitate and Dispel Magic without expending a spell slot, but each only once per long rest. Charisma is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 6,
		spells : ["detect magic"],
		selection : ["detect magic"],
		atwill : true
	}, {
		name : "Once per long rest",
		spells : ["levitate"],
		selection : ["levitate"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["dispel magic"],
		selection : ["dispel magic"],
		oncelr : true
	}]
};
FeatsList["dwarven fortitude-xgte"] = {
	name : "Dwarven Fortitude",
	source : ["X", 74],
	prerequisite : "Being a Dwarf",
	prereqeval : "CurrentRace.known.indexOf('dwarf') !== -1",
	description : "Whenever I take the Dodge action in combat, I can spend one Hit Die to heal myself. I roll the die, add my Constitution modifier, and regain a number of hit points equal to the total (minimum of 1). [+1 Constitution]",
	improvements : "Dwarf Fortitude (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0]
};
FeatsList["elven accuracy-xgte"] = {
	name : "Elven Accuracy",
	source : ["X", 74],
	prerequisite : "Being an Elf or a Half-Elf",
	prereqeval : "(/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known)",
	description : "Whenever I have advantage on an attack roll that uses Dexterity, Intelligence, Wisdom, or Charisma, I can reroll one of the dice once. [+1 Dexterity, Intelligence, Wisdom, or Charisma]",
	improvements : "Elven Accuracy (feat): +1 Dexterity, Intelligence, Wisdom, or Charisma;"
};
FeatsList["fade away-xgte"] = {
	name : "Fade Away",
	source : ["X", 74],
	prerequisite : "Being a Gnome",
	prereqeval : "CurrentRace.known.indexOf('gnome') !== -1",
	description : "As a reaction when I take damage, I can magically become invisible until the end of my next turn or until I attack, deal damage, or force someone to make a saving throw. Once I do this, I can't do so again until I finish a short rest. [+1 Dexterity or Intelligence]",
	improvements : "Fade Away (feat): +1 Dexterity or Intelligence;",
	action : ["reaction", ""],
	usages : 1,
	recovery : "short rest"
};
FeatsList["fey teleportation-xgte"] = { // this code includes contributions by SoilentBrad
	name : "Fey Teleportation",
	source : ["X", 74],
	prerequisite : "Being a High Elf",
	prereqeval : "CurrentRace.known.indexOf('high elf') !== -1",
	description : "I can cast Misty Step without using a spell slot. I can do so once per short rest. Intelligence is my spellcasting ability for this spell. I also learn to speak, read, and write Sylvan. [+1 Intelligence or Charisma]",
	improvements : "Fey Teleportation (feat): +1 Intelligence or Charisma;",
	spellcastingBonus : {
		name : "Once per short rest",
		spellcastingAbility : 4,
		spells : ["misty step"],
		selection : ["misty step"],
		oncesr : true
	},
	languageProfs : ["Sylvan"],
	usages : 1,
	recovery : "short rest"
};
FeatsList["flames of phlegethos-xgte"] = {
	name : "Flames of Phlegethos",
	source : ["X", 74],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "When I cast a fire damage spell, I can reroll any 1 on fire damage dice once. I then sheathe myself in flame until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 fire damage. [+1 Int or Cha]",
	improvements : "Flames of Phlegethos (feat): +1 Intelligence or Charisma;"	
};
FeatsList["infernal constitution-xgte"] = {
	name : "Infernal Constitution",
	source : ["X", 75],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "I have resistance to cold and poison damage and I have advantage on saving throws against being poisoned.\n[+1 Constitution]",
	improvements : "Infernal Constitution (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0],
	dmgres : ["Cold", "Poison"],
	savetxt : { adv_vs : ["poison"] }
};
FeatsList["orcish fury-xgte"] = {
	name : "Orcish Fury",
	source : ["X", 75],
	prerequisite : "Being a Half-Orc",
	prereqeval : "(/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known)",
	description : "Once per short rest, I can roll an extra damage die for an attack with a simple or martial weapon. In addition, Immediately after I use my Relentless Endurance trait, I can use my reaction to make one weapon attack. [+1 Strength or Constitution]",
	improvements : "Orcish Fury (feat): +1 Strength or Constitution;",
	action : ["reaction", " (after Relentless Endurance)"],
	usages : 1,
	recovery : "short rest",
	additional : "extra damage"
};
FeatsList["prodigy-xgte"] = {
	name : "Prodigy",
	source : ["X", 75],
	prerequisite : "Being a Half-Elf, Half-Orc, or Human",
	prereqeval : "(/human|^(?=.*half)(?=.*(elf|orc)).*$/i).test(CurrentRace.known)",
	description : "I gain proficiency with one skill of my choice and expertise with it, or expertise with another skill of my choice that I'm already proficient with. I also gain proficiency with one tool of my choice and fluency in one language of my choice.",
	skills : "\n\n" + toUni("Prodigy (feat)") + ": Proficiency with any one skill and Expertise with any one skill that you are already proficient with.",
	languageProfs : [1],
	toolProfs : [["Any tool", 1]]
};
FeatsList["second chance-xgte"] = {
	name : "Second Chance",
	source : ["X", 75],
	prerequisite : "Being a Halfling",
	prereqeval : "CurrentRace.known.indexOf('halfling') !== -1",
	description : "When a creature I can see hits me with an attack roll, I can use my reaction to force that creature to reroll. Once I use this ability, I can't do so again until I roll initiative at the start of combat or I finish a short rest. [+1 Dexterity, Constitution, or Charisma]",
	improvements : "Second Chance (feat): +1 Dexterity, Constitution, or Charisma;",
	action : ["reaction", ""],
	usages : 1,
	recovery : "Combat"
};
FeatsList["squat nimbleness-xgte"] = {
	name : "Squat Nimbleness",
	source : ["X", 75],
	prerequisite : "Being a Dwarf or a small race",
	prereqeval : "(/dwarf/i).test(CurrentRace.known) || tDoc.getField('Size Category').currentValueIndices === 4",
	description : "My walking speed increases by 5 ft. I gain proficiency in either the Acrobatics or the Athletics skill. I have advantage on Dexterity (Acrobatics) and Strength (Athletics) checks I make to escape from being grappled. [+1 Strength or Dexterity]",
	improvements : "Squat Nimbleness (feat): +1 Strength or Dexterity;",
	skills : "\n\n" + toUni("Squat Nimbleness (feat)") + ": Acrobatics or Athletics.",
	speed : { walk : {spd : "+5", enc : "+5" } }
};
FeatsList["wood elf magic-xgte"] = {
	name : "Wood Elf Magic",
	source : ["X", 75],
	prerequisite : "Being a Wood Elf",
	prereqeval : "CurrentRace.known.indexOf('wood elf') !== -1",
	description : "I learn a druid cantrip. In addition, I can cast Longstrider and Pass Without Trace, without expending a spell slot, but each only once per long rest. Wisdom is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "Druid Cantrip",
		spellcastingAbility : 5,
		"class" : "druid",
		level : [0, 0],
		atwill : true
	}, {
		name : "Once per long rest",
		spells : ["longstrider"],
		selection : ["longstrider"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["pass without trace"],
		selection : ["pass without trace"],
		oncelr : true
	}]
};

// Add weapon for the Dragon Hide feat
WeaponsList["claws"] = {
	regExpSearch : /^(?=.*\b(sharp|cat|dragon|retractable|tortle))(?=.*\bclaws?\b).*$/i,
	name : "Sharp Claws",
	source : [["V", 115], ["UA:FR", 2], ["TP", 4], ["X", 74]],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};

// Add spells, first those taken from the Elemental Evil Player's Companion, if not already present
if (!SourceList.E || !(/Elemental.*Evil.*Player.*Companion/i).test(SourceList.E.name)) {
	SpellsList["abi-dalzim's horrid wilting"] = {
		name : "Abi-Dalzim's Horrid Wilting",
		nameShort : "Abi-D's Horrid Wilting",
		nameAlt : "Horrid Wilting",
		classes : ["sorcerer", "wizard"],
		source : [["X", 150], ["E", 15]],
		level : 8,
		school : "Necro",
		time : "1 a",
		range : "150 ft",
		components : "V,S,M",
		compMaterial : "A bit of sponge",
		duration : "Instantaneous",
		save : "Con",
		description : "30-ft cube all crea 12d8 Necrotic dmg; save halves; plants/water elem. dis. const/undead immune",
		descriptionFull : "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one." + "\n   " + "Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly."
	};
	SpellsList["absorb elements"] = {
		name : "Absorb Elements",
		classes : ["druid", "ranger", "sorcerer", "wizard"],
		source : [["X", 150], ["E", 15]],
		level : 1,
		school : "Abjur",
		time : "1 rea",
		range : "Self",
		components : "S",
		duration : "1 rnd",
		description : "Acid, Cold, Fire, Lightning, or Thunder resistance vs. 1 atk; first melee hit next rnd +1d6+1d6/SL dmg",
		descriptionFull : "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."
	};
	SpellsList["aganazzar's scorcher"] = {
		name : "Aganazzar's Scorcher",
		nameAlt : "Scorch", //as per the Spell Compandium's (DnD 3.5e) alternative name
		classes : ["sorcerer", "wizard"],
		source : [["X", 150], ["E", 15]],
		level : 2,
		school : "Evoc",
		time : "1 a",
		range : "30-ft line",
		components : "V,S,M",
		compMaterial : "A red dragon's scale",
		duration : "Instantaneous",
		save : "Dex",
		description : "30-ft long 5-ft wide line all creatures 3d8+1d8/SL Fire dmg; save halves",
		descriptionFull : "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
	};
	SpellsList["beast bond"] = {
		name : "Beast Bond",
		classes : ["druid", "ranger"],
		source : [["X", 150], ["E", 15]],
		level : 1,
		school : "Div",
		time : "1 a",
		range : "Touch",
		components : "V,S,M",
		compMaterial : "A bit of fur wrapped in a cloth",
		duration : "Conc, 10 min",
		description : "Telepathic link with 1 beast Int<4 while in line of sight; beast has adv. on attacks vs. crea you can see",
		descriptionFull : "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see."
	};
	SpellsList["bones of the earth"] = {
		name : "Bones of the Earth",
		classes : ["druid"],
		source : [["X", 150], ["E", 15]],
		level : 6,
		school : "Trans",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Dex",
		description : "6+2/SL 2.5-ft rad ground burst up 30-ft, \u2265 Med. creas save or lifted, 6d6 bludg. dmg if ceiling; see B",
		descriptionFull : "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot-diameter portion of the area requires at least 1 minute to clear by hand." + "\n   " + "If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save." + "\n   " + "If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature's choice) against the spell's save DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, you can create."
	};
	SpellsList["catapult"] = {
		name : "Catapult",
		classes : ["sorcerer", "wizard"],
		source : [["X", 150], ["E", 15]],
		level : 1,
		school : "Trans",
		time : "1 a",
		range : "60 ft",
		components : "S",
		duration : "Instantaneous",
		save : "Dex",
		description : "Send 5+5/SL lb unattended object in 90 ft straight line; if hits crea, save or 3d8+1d8/SL Bludg. dmg",
		descriptionFull : "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage."
	};
	SpellsList["control flames"] = {
		name : "Control Flames",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 152], ["E", 16]],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "60 ft",
		components : "S",
		duration : "Instant. or 1 h",
		description : "Nonmagical flame up to 5 cu ft; instant: expand/exinguish, 1h: brighten/dim/color/create shapes",
		descriptionFull : "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways." + "\n \u2022 " + "You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location." + "\n \u2022 " + "You instantaneously extinguish the flames within the cube." + "\n \u2022 " + "You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour." + "\n \u2022 " + "You cause simple shapes-such as the vague form of a creature, an inanimate object, or a location-to appear within the flames and animate as you like. The shapes last for 1 hour." + "\n   " + "If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
	};
	SpellsList["control winds"] = {
		name : "Control Winds",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 152], ["E", 16]],
		level : 5,
		school : "Trans",
		time : "1 a",
		range : "300 ft",
		components : "V,S",
		duration : "Conc, 1 h",
		description : "100-ft cube of air either gusts, downdraft, or updraft; affects flying/jump/ranged; 1 a change; see B",
		descriptionFull : "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted." + "\n   " + toUni("Gusts") + ": A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved." + "\n   " + toUni("Downdraft") + ": You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone." + "\n   " + toUni("Updraft") + ": You cause a sustained updraft within the cube, rising upward from the cube's bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal."
	};
	SpellsList["create bonfire"] = {
		name : "Create Bonfire",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 152], ["E", 16]],
		level : 0,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Conc, 1 min",
		save : "Dex",
		description : "5-ft cube all crea at casting or entering save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5/11/17",
		descriptionFull : "You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there." + "\n   " + "The bonfire ignites flammable objects in its area that aren't being worn or carried." + "\n   " + "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
	};
	SpellsList["dust devil"] = {
		name : "Dust Devil",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 154], ["E", 17]],
		level : 2,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "A pinch of dust",
		duration : "Conc, 1 min",
		save : "Str",
		description : "5-ft cube; all in 5-ft 1d8+1d8/SL Bludg. dmg and pushed 10 ft away; save halves, no push; see book",
		descriptionFull : "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration." + "\n   " + "Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away from the dust devil. On a successful save, the creature takes half as much damage and isn't pushed." + "\n   " + "As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
	};
	SpellsList["earthbind"] = {
		name : "Earthbind",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 154], ["E", 17]],
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "300 ft",
		components : "V",
		duration : "Conc, 1 min",
		save : "Str",
		description : "1 creatures save or fly speed is reduced to 0; airborne creatures safely descend at 60 ft per round",
		descriptionFull : "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends."
	};
	SpellsList["earth tremor"] = {
		name : "Earth Tremor",
		classes : ["bard", "druid", "sorcerer", "wizard"],
		source : [["X", 155], ["E", 17]],
		level : 1,
		school : "Evoc",
		time : "1 a",
		range : "10 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Dex",
		description : "All crea in range except you save or 1d6+1d6/SL Bludgeoning dmg and prone; loose ground is dif. ter.",
		descriptionFull : "You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
	};
	SpellsList["elemental bane"] = {
		name : "Elemental Bane",
		classes : ["druid", "warlock", "wizard"],
		source : [["X", 155], ["E", 17]],
		level : 4,
		school : "Trans",
		time : "1 a",
		range : "90 ft",
		components : "V,S",
		duration : "Conc, 1 min",
		save : "Con",
		description : "1+1/SL crea in 30 ft save or first attack each rnd of chosen energy does +2d6 dmg; no resistance",
		descriptionFull : "Choose one creature you can see within range, and choose one of the following damage types - acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
	};
	SpellsList["erupting earth"] = {
		name : "Erupting Earth",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 155], ["E", 17]],
		level : 3,
		school : "Trans",
		time : "1 a",
		range : "120 ft",
		components : "V,S,M",
		compMaterial : "A piece of obsidian",
		duration : "Instantaneous",
		save : "Dex",
		description : "20-ft cube all crea 3d12+1d12/SL Bludgeoning dmg; save halves; area becomes difficult terrain",
		descriptionFull : "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd."
	};
	SpellsList["flame arrows"] = {
		name : "Flame Arrows",
		classes : ["druid", "ranger", "sorcerer", "wizard"],
		source : [["X", 156], ["E", 18]],
		level : 3,
		school : "Trans",
		time : "1 a",
		range : "Touch",
		components : "V,S",
		duration : "Conc, 1 h",
		description : "12+2/SL ammunition drawn from touched quiver do +1d6 Fire damage on a successful hit",
		descriptionFull : "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd."
	};
	SpellsList["frostbite"] = {
		name : "Frostbite",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 156], ["E", 18]],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Con",
		description : "1 crea save or 1d6 Cold dmg and dis. on next weapon attack roll; +1d6 at CL 5, 11, and 17",
		descriptionFull : "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
	};
	SpellsList["gust"] = {
		name : "Gust",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 157], ["E", 19]],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Str",
		description : "Med. or smaller crea save or push 5 ft; or push unattended 5 lb obj 10 ft; or harmless sensory effect",
		descriptionFull : "You seize the air and compel it to create one of the following effects at a point you can see within range." + "\n " + "\u2022 One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you." + "\n " + "\u2022 You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage." + "\n " + "\u2022 You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze."
	};
	SpellsList["ice knife"] = {
		name : "Ice Knife",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 157], ["E", 19]],
		level : 1,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "S,M",
		compMaterial : "A drop of water or piece of ice",
		duration : "Instantaneous",
		save : "Dex",
		description : "Ranged atk for 1d10 Piercing dmg; hit/miss 5-ft rad on target all crea save or 2d6+1d6/SL Cold dmg",
		descriptionFull : "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 cold damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st."
	};
	SpellsList["immolation"] = {
		name : "Immolation",
		classes : ["sorcerer", "wizard"],
		source : [["X", 158], ["E", 19]],
		level : 5,
		school : "Evoc",
		time : "1 a",
		range : "90 ft",
		components : "V",
		duration : "Conc, 1 min",
		save : "Dex",
		description : "1 crea save or 8d6 Fire dmg and burns for 4d6 Fire dmg/rnd; save each rnd to end; half dmg on save",
		descriptionFull : "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished by nonmagical means." + "\n   " + "If damage from this spell kills a target, the target is turned to ash."
	};
	SpellsList["investiture of flame"] = {
		name : "Investiture of Flame",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 159], ["E", 19]],
		level : 6,
		school : "Trans",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Conc, 10 min",
		save : "Dex",
		description : "Fire immune; Cold res.; 1d10 Fire dmg in 5 ft; 1 a 15-ft long 5-ft wide all crea 4d8 Fire dmg, save half",
		descriptionFull : "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits." + "\n " + "\u2022 You are immune to fire damage and have resistance to cold damage." + "\n " + "\u2022 Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage." + "\n " + "\u2022 You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one."
	};
	SpellsList["investiture of ice"] = {
		name : "Investiture of Ice",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 159], ["E", 19]],
		level : 6,
		school : "Trans",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Conc, 10 min",
		save : "Con",
		description : "Cold immune; Fire resist; 10-ft rad dif. ter.; 1 a 15-ft cone all crea 4d6 Cold dmg, half speed, save half",
		descriptionFull : "Until the spell ends, ice rimes your body, and you gain the following benefits." + "\n " + "\u2022 You are immune to cold damage and have resistance to fire damage." + "\n " + "\u2022 You can move across difficult terrain created by ice or snow without spending extra movement." + "\n " + "\u2022 The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you." + "\n " + "\u2022 You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn."
	};
	SpellsList["investiture of stone"] = {
		name : "Investiture of Stone",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 159], ["E", 19]],
		level : 6,
		school : "Trans",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Conc, 10 min",
		save : "Dex",
		description : "Nonmagical Bludg/Pierc/Slash resist.; 1 a 15-ft rad all crea save or prone; move through earth/stone",
		descriptionFull : "Until the spell ends, bits of rock spread across your body, and you gain the following benefits:" + "\n \u2022 " + "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks." + "\n \u2022 " + "You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone." + "\n \u2022 " + "You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn."
	};
	SpellsList["investiture of wind"] = {
		name : "Investiture of Wind",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 160], ["E", 20]],
		level : 6,
		school : "Trans",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Conc, 10 min",
		save : "Con",
		description : "Rngd wea atks dis. vs. you; fly 60 ft; 1 a 15-ft cube in 60 ft all 2d10 Bludg. dmg, push 10 ft, save half",
		descriptionFull : "Until the spell ends, wind whirls around you, and you gain the following benefits." + "\n " + "\u2022 Ranged weapon attacks made against you have disadvantage on the attack roll." + "\n " + "\u2022 You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it." + "\n " + "\u2022 You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube."
	};
	SpellsList["maelstrom"] = {
		name : "Maelstrom",
		classes : ["druid"],
		source : [["X", 160], ["E", 20]],
		level : 5,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S,M",
		compMaterial : "Paper or leaf in the shape of a funnel",
		duration : "Conc, 1 min",
		save : "Str",
		description : "5-ft deep 30-ft rad dif. ter.; all crea starting turn in save or 6d6 Bludg. dmg and pulled 10 ft to center",
		descriptionFull : "A mass of 5-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center."
	};
	SpellsList["magic stone"] = {
		name : "Magic Stone",
		classes : ["druid", "warlock"],
		source : [["X", 160], ["E", 20]],
		level : 0,
		school : "Trans",
		time : "1 bns",
		range : "Touch",
		components : "V,S",
		duration : "1 min",
		description : "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do 1d6+spellcasting mod Bludg. dmg",
		descriptionFull : "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone." + "\n   " + "If you cast this spell again, the spell ends early on any pebbles still affected by it."
	};
	SpellsList["maximilian's earthen grasp"] = {
		name : "Maximilian's Earthen Grasp",
		nameShort : "Max's Earthen Grasp",
		nameAlt : "Earthen Grasp",
		classes : ["sorcerer", "wizard"],
		source : [["X", 161], ["E", 20]],
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "A miniature hand sculpted from clay",
		duration : "Conc, 1 min",
		save : "Str",
		description : "Medium hand atks 1 crea: save or 2d6 Bludg. dmg \u0026 restrained; 1 a hand moves/atks, releases; see B",
		descriptionFull : "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell's duration." + "\n   " + "As an action, you can cause the hand to crush the restrained target, which must make a Strength saving throw. The target takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one." + "\n   " + "To break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand." + "\n   " + "As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either."
	};
	SpellsList["melf's minute meteors"] = {
		name : "Melf's Minute Meteors",
		nameAlt : "Minute Meteors",
		classes : ["sorcerer", "wizard"],
		source : [["X", 161], ["E", 20]],
		level : 3,
		school : "Evoc",
		time : "1 a",
		range : "Self",
		components : "V,S,M",
		compMaterial : "Niter, sulfur, and pine tar formed into a bead",
		duration : "Conc, 10 min",
		save : "Dex",
		description : "6+2/SL meteors; at casting/bns a send up to two 120 ft for 5-ft rad all crea 2d6 Fire dmg; save half",
		descriptionFull : "You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell-and as a bonus action on each of your turns thereafter-you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd."
	};
	SpellsList["mold earth"] = {
		name : "Mold Earth",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 162], ["E", 21]],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "S",
		duration : "Instant. or 1 h",
		description : "5 cu ft earth; instant.: excavate; 1h: change to difficult or normal terrain, or change shape and color",
		descriptionFull : "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways." + "\n " + "\u2022 If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage." + "\n " + "\u2022 You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour." + "\n " + "\u2022 If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour." + "\n\n" + "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
	};
	SpellsList["primordial ward"] = {
		name : "Primordial Ward",
		classes : ["druid"],
		source : [["X", 163], ["E", 21]],
		level : 6,
		school : "Abjur",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Conc, 1 min",
		description : "Acid, Cold, Fire, Lightning, and Thunder resistance; use rea to gain 1 immunity for 1 rnd, spell ends",
		descriptionFull : "You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration." + "\n   " + "When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends."
	};
	SpellsList["pyrotechnics"] = {
		name : "Pyrotechnics",
		classes : ["bard", "sorcerer", "wizard"],
		source : [["X", 163], ["E", 21]],
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Con",
		description : "5 cu ft nonma. flame extinguish, or 10-ft rad all crea save or blind 1 rnd, or 20-ft rad hvy obsc. 1 min",
		descriptionFull : "Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so." + "\n   " + toUni("Fireworks") + ": The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn." + "\n   " + toUni("Smoke") + ": Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it."
	};
	SpellsList["shape water"] = {
		name : "Shape Water",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 164], ["E", 21]],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "S",
		duration : "Instant. or 1 h",
		description : "5 cu ft water; instant: move/change flow; 1h: simple shapes/change color or opacity/freeze",
		descriptionFull : "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways." + "\n " + "\u2022 You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage." + "\n " + "\u2022 You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour." + "\n " + "\u2022 You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour." + "\n " + "\u2022 You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour." + "\n\n" + "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
	};
	SpellsList["skywrite"] = {
		name : "Skywrite",
		classes : ["bard", "druid", "wizard"],
		source : [["X", 165], ["E", 22]],
		ritual : true,
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "Sight",
		components : "V,S",
		duration : "Conc, 1 h",
		description : "Write up to 10 words with clouds in a part of the sky you can see; strong wind can diperse the clouds",
		descriptionFull : "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early."
	};
	SpellsList["snilloc's snowball swarm"] = {
		name : "Snilloc's Snowball Swarm",
		nameAlt : "Snowball Swarm",
		classes : ["sorcerer", "wizard"],
		source : [["X", 165], ["E", 22]],
		level : 2,
		school : "Evoc",
		time : "1 a",
		range : "90 ft",
		components : "V,S,M",
		compMaterial : "A piece of ice or a small white rock chip",
		duration : "Instantaneous",
		save : "Dex",
		description : "5-ft radius all creatures 3d6+1d6/SL Cold damage; save halves",
		descriptionFull : "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
	};
	SpellsList["storm sphere"] = {
		name : "Storm Sphere",
		classes : ["sorcerer", "wizard"],
		source : [["X", 166], ["E", 22]],
		level : 4,
		school : "Evoc",
		time : "1 a",
		range : "150 ft",
		components : "V,S",
		duration : "Conc, 1 min",
		save : "Str",
		description : "20-ft rad dif. ter.; all crea + end turn save or 2d6+1d6/SL Bludg.; bns a 60 ft spell atk 4d6 Lightning",
		descriptionFull : "A 20-foot-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain." + "\n   " + "Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage." + "\n   " + "Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th."
	};
	SpellsList["thunderclap"] = {
		name : "Thunderclap",
		classes : ["bard", "druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 168], ["E", 22]],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "5 ft",
		components : "S",
		duration : "Instantaneous",
		save : "Con",
		description : "100-ft rad audible; all crea but you in area save or 1d6 Thunder dmg; +1d6 at CL 5, 11, and 17",
		descriptionFull : "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must succeed on a Constitution saving throw or take 1d6 thunder damage." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
	};
	SpellsList["tidal wave"] = {
		name : "Tidal Wave",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 168], ["E", 22]],
		level : 3,
		school : "Conj",
		time : "1 a",
		range : "120 ft",
		components : "V,S,M",
		compMaterial : "A drop of water",
		duration : "Instantaneous",
		save : "Dex",
		description : "30-ft x 10-ft, 10-ft high all crea 4d8 Bludg. dmg and prone; save halves not prone; extinguish flames",
		descriptionFull : "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes."
	};
	SpellsList["transmute rock"] = {
		name : "Transmute Rock",
		classes : ["druid", "wizard"],
		source : [["X", 169], ["E", 22]],
		level : 5,
		school : "Trans",
		time : "1 a",
		range : "120 ft",
		components : "V,S,M",
		compMaterial : "Clay and water",
		duration : "Until dispelled",
		description : "40 cu ft stone to mud or mud to stone; mud and stone restrains; mud from ceiling falls; see book",
		descriptionFull : "You choose an area of stone or mud that you can see that fits within a 40-foot cube and is within range, and choose one of the following effects." + "\n   " + toUni("Transmute Rock to Mud") + ": Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell's duration." + "\n   " + "The ground in the spell's area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud." + "\n   " + "If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one." + "\n   " + toUni("Transmute Mud to Rock") + ": Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes restrained by the rock. A restrained creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and it is immune to poison and psychic damage."
	};
	SpellsList["vitriolic sphere"] = {
		name : "Vitriolic Sphere",
		classes : ["sorcerer", "wizard"],
		source : [["X", 170], ["E", 23]],
		level : 4,
		school : "Evoc",
		time : "1 a",
		range : "150 ft",
		components : "V,S,M",
		compMaterial : "A drop of giant slug bile",
		duration : "Instantaneous",
		save : "Dex",
		description : "20-ft rad all crea 10d4+2d4/SL now and 5d4 Acid dmg at end next turn; save half \u0026 no dmg next rnd",
		descriptionFull : "You point at a location within range, and a glowing, 1-foot-diameter ball of emerald acid streaks there and explodes in a 20-foot-radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and another 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th."
	};
	SpellsList["wall of sand"] = {
		name : "Wall of Sand",
		classes : ["wizard"],
		source : [["X", 170], ["E", 23]],
		level : 3,
		school : "Evoc",
		time : "1 a",
		range : "90 ft",
		components : "V,S,M",
		compMaterial : "A handful of sand",
		duration : "Conc, 10 min",
		description : "30\u00D710\u00D710ft (l\u00D7w\u00D7h) wall on the ground; blocks line of sight; blinded while inside; 1/3 move",
		descriptionMetric : "9\u00D73\u00D73m (l\u00D7w\u00D7h) wall on the ground; blocks line of sight; blinded while inside; 1/3 move",
		descriptionFull : "You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there."
	};
	SpellsList["wall of water"] = {
		name : "Wall of Water",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 170], ["E", 23]],
		level : 3,
		school : "Evoc",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "A drop of water",
		duration : "Conc, 10 min",
		description : "30\u00D71\u00D710ft (l\u00D7w\u00D7h) or 20-ft rad 20-ft high; dif. ter.; range wea dis.; Fire dmg half; Cold dmg freezes",
		descriptionMetric : "9\u00D70,3\u00D73m (l\u00D7w\u00D7h) or 6-m rad 6-m high; dif. ter.; ranged wea dis.; Fire dmg half; Cold dmg freezes",
		descriptionFull : "You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain." + "\n   " + "Any ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall's water doesn't fill it."
	};
	SpellsList["warding wind"] = {
		name : "Warding Wind",
		classes : ["bard", "druid", "sorcerer", "wizard"],
		source : [["X", 170], ["E", 23]],
		level : 2,
		school : "Evoc",
		time : "1 a",
		range : "10-ft rad",
		components : "V",
		duration : "Conc, 10 min",
		description : "Strong (20 mph) wind in area deafens/extinguishes unprotected flames/dif. ter./ranged wea have dis",
		descriptionFull : "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration." + "\n   " + "The wind has the following effects." + "\n " + "\u2022 It deafens you and other creatures in its area." + "\n " + "\u2022 It extinguishes unprotected flames in its area that are torch-sized or smaller." + "\n " + "\u2022 The area is difficult terrain for creatures other than you." + "\n " + "\u2022 The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind." + "\n " + "\u2022 It hedges out vapor, gas, and fog that can be dispersed by strong wind."
	};
	SpellsList["watery sphere"] = {
		name : "Watery Sphere",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 170], ["E", 23]],
		level : 4,
		school : "Conj",
		time : "1 a",
		range : "90 ft",
		components : "V,S,M",
		compMaterial : "A droplet of water",
		duration : "Conc, 1 min",
		save : "Str",
		description : "5-ft rad all crea < Huge save or restrained; on save ejected; save each rnd; 1 a move sphere 30 ft",
		descriptionFull : "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration." + "\n   " + "Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success." + "\n   " + "The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it." + "\n   " + "As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw." + "\n   " + "When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes."
	};
	SpellsList["whirlwind"] = {
		name : "Whirlwind",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 171], ["E", 24]],
		level : 7,
		school : "Evoc",
		time : "1 a",
		range : "300 ft",
		components : "V,M",
		compMaterial : "A piece of straw",
		duration : "Conc, 1 min",
		save : "Dex",
		description : "10-ft rad 30-ft high all crea 10d6 Bludg. dmg; save halves; restrains; 1 a move 30 ft; see book",
		descriptionFull : "A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone." + "\n   " + "A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft." + "\n   " + "A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 \u00D7 10 feet away from it in a random direction."
	};
};
// Then add the new spells from XGtE (contains contributions by SoilentBrad)
SpellsList["catnap"] = {
	name : "Catnap",
	classes : ["bard", "sorcerer", "wizard"],
	source : ["X", 151],
	ritual : false,
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "S,M",
	compMaterial : "A pinch of sand",
	duration : "10 min",
	description : "3+1/SL willing crea unconscious for 10 min to gain benefits of short rest; Ends if dmg or 1 a to wake",
	descriptionFull : "You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall unconscious for the spell's duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains unconscious for the full duration, that target gains the benefit of a short rest, and it can't be affected by this spell again until it finishes a long rest." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional willing creature for each slot level above 3rd."
};
SpellsList["cause fear-xgte"] = {
	name : "Cause Fear",
	classes : ["warlock", "wizard"],
	source : ["X", 151],
	ritual : false,
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1+1/SL crea in 15-ft rad save or frightened; extra save at end of each turn; constr./undead immune",
	descriptionFull : "You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become frightened of you until the spell ends. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["ceremony-xgte"] = {
	name : "Ceremony",
	classes : ["cleric", "paladin"],
	source : ["X", 151],
	ritual : true,
	level : 1,
	school : "Abjur",
	time : "1 h",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "25 gp worth of powdered silver, which the spell consumes",
	duration : "Instantaneous",
	description : "Perform religious ceremony on target(s) within 10 ft throughout the casting; see book (25gp cons.)",
	descriptionFull : "You perform a special religious ceremony that is infused with magic. When you cast the spell, choose one of the following rites, the target of which must be within 10 feet of you throughout the casting." + "\n   " + toUni("Atonement") + ": You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a successful check, you restore the target to its original alignment." + "\n   " + toUni("Bless Water") + ": You touch one vial of water and cause it to become holy water." + "\n   " + toUni("Coming of Age") + ": You touch one humanoid who is a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a d4 and add the number rolled to the ability check. A creature can benefit from this rite only once." + "\n   " + toUni("Dedication") + ": You touch one humanoid who wishes to be dedicated to your god's service. For the next 24 hours, whenever the target makes a saving throw, it can roll a d4 and add the number rolled to the save. A creature can benefit from this rite only once." + "\n   " + toUni("Funeral Rite") + ": You touch one corpse, and for the next 7 days, the target can't become undead by any means short of a wish spell." + "\n   " + toUni("Wedding") + ": You touch adult humanoids willing to be bonded together in marriage. For the next 7 days, each target gains a +2 bonus to AC while they are within 30 feet of each other. A creature can benefit from this rite again only if widowed."
};
SpellsList["chaos bolt-xgte"] = {
	name : "Chaos Bolt",
	classes : ["sorcerer"],
	source : ["X", 151],
	ritual : false,
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Spell atk 2d8+1d6+1d6/SL dmg, d8s set dmg type, see B; double on d8s: new atk vs. crea in 30 ft",
	descriptionFull : "You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the attack's damage type, as shown below." + "\n\n" + toUni("d8") + "\t" + toUni("Damage Type") + "\n  1\tAcid" + "\n  2\tCold" + "\n  3\tFire" + "\n  4\tForce" + "\n  5\tLightning" + "\n  6\tPoison" + "\n  7\tPsychic" + "\n  8\tThunder" + "\n\n   " + "If you roll the same number on both d8s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again." + "\n   " + "A creature can be targeted only once by each casting of this spell." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, each target takes 1d6 extra damage of the type rolled for each slot level above 1st."
};
SpellsList["charm monster"] = {
	name : "Charm Monster",
	classes : ["bard", "druid", "sorcerer", "warlock", "wizard"],
	source : ["X", 151],
	ritual : false,
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "1 h",
	save : "Wis",
	description : "1+1/SL crea in 15-ft rad save or charmed; adv. if you or allies fighting it; ends if your or allies harms",
	descriptionFull : "You attempt to charm a creature you can see within range. It must make a Wisdom saving throw, and it does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature is friendly to you. When the spell ends, the creature knows it was charmed by you." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["create homunculus"] = {
	name : "Create Homunculus",
	classes : ["wizard"],
	source : ["X", 152],
	ritual : false,
	level : 6,
	school : "Trans",
	time : "1 h",
	range : "Touch",
	components : "V,S,M\u0192",
	compMaterial : "Clay, ash, and mandrake root, all of which the spell consumes, and a jewel-encrusted dagger worth at least 1,000 gp", 
	duration : "Instantaneous",
	description : "You take 2d4 piercing dmg to create a homunculus as your faithful companion; see book (1000gp)",
	descriptionFull : "While speaking an intricate incantation, you cut yourself with a jewel-encrusted dagger, taking 2d4 piercing damage that can't be reduced in any way. You then drip your blood on the spell's other components and touch them, transforming them into a special construct called a homunculus." + "\n   " + "The statistics of the homunculus are in the Monster Manual. It is your faithful companion, and it dies if you die. Whenever you finish a long rest, you can spend up to half your Hit Dice if the homunculus is on the same plane of existence as you. When you do so, roll each die and add your Constitution modifier to it. Your hit point maximum is reduced by the total, and the homunculus's hit point maximum and current hit points are both increased by it. This process can reduce you to no lower than 1 hit point, and the change to your and the homunculus's hit points ends when you finish your next long rest. The reduction to your hit point maximum can't be removed by any means before then, except by the homunculus's death." + "\n   " + "You can have only one homunculus at a time. If you cast this spell while your homunculus lives, the spell fails."
};
SpellsList["crown of stars"] = {
	name : "Crown of Stars",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["X", 152],
	ritual : false,
	level : 7,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "1 h",
	description : "7+2/SL motes shed 30-ft light; bonus action to fire one as 120 ft ranged atk for 4d12 Radiant dmg",
	descriptionFull : "Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit, the target takes 4d12 radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote." + "\n   " + "If you have four or more motes remaining, they shed bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed dim light in a 30-foot radius." + AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the number of motes created increases by two for each slot level above 7th."
};
SpellsList["danse macabre"] = {
	name : "Danse Macabre",
	classes : ["warlock", "wizard"],
	source : ["X", 153],
	ritual : false,
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "5+2/SL small/medium corpses as zombie/skeleton; spellc. mod to atk/dmg; bns a command in 60 ft",
	descriptionFull : "Threads of dark power leap from your fingers to pierce up to five Small or Medium corpses you can see within range. Each corpse immediately stands up and becomes undead. You decide whether it is a zombie or a skeleton (the statistics for zombies and skeletons are in the Monster Manual), and it gains a bonus to its attack and damage rolls equal to your spellcasting ability modifier." + "\n   " + "You can use a bonus action to mentally command the creatures you make with this spell, issuing the same command to all of them. To receive the command, a creature must be within 60 feet of you. You decide what action the creatures will take and where they will move during their next turn, or you can issue a general command, such as to guard a chamber or passageway against your foes. If you issue no commands, the creatures do nothing except defend themselves against hostile creatures. Once given an order, the creatures continue to follow it until their task is complete." + "\n   " + "The creatures are under your control until the spell ends, after which they become inanimate once more" + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, you animate up to two additional corpses for each slot level above 5th."
};
SpellsList["dawn"] = {
	name : "Dawn",
	classes : ["cleric", "wizard"],
	source : ["X", 153],
	ritual : false,
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u0192",
	compMaterial : "A sunburst pendant worth at least 100 gp", 
	duration : "Conc, 1 min",
	save : "Con",
	description : "30-ft rad 40-ft high all crea 4d10 Radiant dmg when cast or end turn in; bns a move it 60 ft (100gp)",
	descriptionFull : "The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot-radius, 40-foot-high cylinder of bright light glimmers there. This light is sunlight." + "\n   " + "When the cylinder appears, each creature in it must make a Constitution saving throw, taking 4d10 radiant damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder." + "\n   " + "If you're within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn."
};
SpellsList["dragon's breath"] = {
	name : "Dragon's Breath",
	classes : ["sorcerer", "wizard"],
	source : ["X", 154],
	ritual : false,
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A hot pepper",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 willing crea: 1 act to breathe 15-ft cone 3d6+1d6/SL Acid/Cold/Fire/Light./Poison dmg; save half",
	descriptionFull : "You touch one willing creature and imbue it with the power to spew magical energy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["druid grove"] = {
	name : "Druid Grove",
	classes : ["druid"],
	source : ["X", 154],
	ritual : false,
	level : 6,
	school : "Abjur",
	time : "10 min",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "Mistletoe, which the spell consumes, that was harvested with a golden sickle under the light of a full moon",
	duration : "24 h",
	description : "Protect 30-ft to 90-ft cube outdoors or underground; see book for effects",
	descriptionFull : "You invoke the spirits of nature to protect an area outdoors or underground. The area can be as small as a 30-foot cube or as large as a 90-foot cube. Buildings and other structures are excluded from the affected area. If you cast this spell in the same area every day for a year, the spell lasts until dispelled." + "\n   " + "The spell creates the following effects within the area. When you cast this spell, you can specify creatures as friends who are immune to the effects. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects." + "\n   " + "The entire warded area radiates magic. A dispel magic cast on the area, if successful, removes only one of the following effects, not the entire area. That spell's caster chooses which effect to end. Only when all its effects are gone is this spell dispelled." + "\n   " + toUni("Solid Fog") + ": You can fill any number of 5-foot squares on the ground with thick fog, making them heavily obscured. The fog reaches 10 feet high. In addition, every foot of movement through the fog costs 2 extra feet. To a creature immune to this effect, the fog obscures nothing and looks like soft mist, with motes of green light floating in the air." + "\n   " + toUni("Grasping Undergrowth") + ": You can fill any number of 5-foot squares on the ground that aren't filled with fog with grasping weeds and vines, as if they were affected by an entangle spell. To a creature immune to this effect, the weeds and vines feel soft and reshape themselves to serve as temporary seats or beds." + "\n   " + toUni("Grove Guardians") + ": You can animate up to four trees in the area, causing them to uproot themselves from the ground. These trees have the same statistics as an awakened tree, which appears in the Monster Manual, except they can't speak, and their bark is covered with druidic symbols. If any creature not immune to this effect enters the warded area, the grove guardians fight until they have driven off or slain the intruders. The grove guardians also obey your spoken commands (no action required by you) that you issue while in the area. If you don't give them commands and no intruders are present, the grove guardians do nothing. The grove guardians can't leave the warded area. When the spell ends, the magic animating them disappears, and the trees take root again if possible." + "\n   " + toUni("Additional Spell Effects") + ": You can place your choice of one of the following magical effects within the warded area:" + "\n \u2022 " + "A constant gust of wind in two locations of your choice" + "\n \u2022 " + "Spike growth in one location of your choice" + "\n \u2022 " + "Wind wall in two locations of your choice" + "\n   " + "To a creature immune to this effect, the winds are a fragrant, gentle breeze, and the area of spike growth is harmless."
};
SpellsList["enemies abound"] = {
	name : "Enemies Abound",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["X", 155],
	ritual : false,
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or regard all creatures it can see as enemies, random targeting; save when damaged to end",
	descriptionFull : "You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being frightened. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success." + "\n   " + "Whenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, spell, or other ability it's using. If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to."
};
SpellsList["enervation"] = {
	name : "Enervation",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["X", 155],
	ritual : false,
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 crea 4d8+1d8/SL Necro dmg, action to repeat, I heal half; on save 2d8+1d8/SL dmg once; see book",
	descriptionFull : "A tendril of inky darkness reaches out from you, touching a creature you can see within range to drain life from it. The target must make a Dexterity saving throw. On a successful save, the target takes 2d8 necrotic damage, and the spell ends. On a failed save, the target takes 4d8 necrotic damage, and until the spell ends, you can use your action on each of your turns to automatically deal 4d8 necrotic damage to the target. The spell ends if you use your action to do anything else, if the target is ever outside the spell's range, or if the target has total cover from you." + "\n   " + "Whenever the spell deals damage to a target, you regain hit points equal to half the amount of necrotic damage the target takes." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};
SpellsList["far step"] = {
	name : "Far Step",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["X", 155],
	ritual : false,
	level : 5,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "At casting and as bonus action for duration, you can teleport 60 ft to a space you can see",
	descriptionFull : "You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the spell ends, you can use a bonus action to teleport in this way again."
};
SpellsList["find greater steed"] = {
	name : "Find Greater Steed",
		classes : ["paladin"],
		source : ["X", 156],
		level : 4,
		school : "Conj",
		time : "10 min",
		range : "30 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Gain the services of a steed; can communicate with it telepathically; can share spells with it; see book",
		descriptionFull : "You summon a spirit that assumes the form of a loyal, majestic mount. Appearing in an unoccupied space within range, the spirit takes on a form you choose: a griffon, a pegasus, a peryton, a dire wolf, a rhinoceros, or a saber-toothed tiger. The creature has the statistics provided in the Monster Manual for the chosen form, though it is a celestial, a fey, or a fiend (your choice) instead of its normal creature type. Additionally, if it has an Intelligence score of 5 or lower, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak." + "\n   " + "You control the mount in combat. While the mount is within 1 mile of you, you can communicate with it telepathically. While mounted on it, you can make any spell you cast that targets only you also target the mount." + "\n   " + "The mount disappears temporarily when it drops to 0 hit points or when you dismiss it as an action. Casting this spell again re-summons the bonded mount, with all its hit points restored and any conditions removed." + "\n   " + "You can't have more than one mount bonded by this spell or find steed at the same time. As an action, you can release a mount from its bond, causing it to disappear permanently." + "\n   " + "Whenever the mount disappears, it leaves behind any objects it was wearing or carrying."
};
SpellsList["guardian of nature"] = {
	name : "Guardian of Nature",
	classes : ["druid", "ranger"],
	source : ["X", 157],
	ritual : false,
	level : 4,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "You transform into a Primal Beast (offensive bonuses) or a Great Tree (defensive bonuses); see book",
	descriptionFull : "A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree." + "\n\n" + toUni("Primal Beast") + ": Bestial fur covers your body, your facial features become feral, and you gain the following benefits:" + "\n \u2022 " + "Your walking speed increases by 10 feet." + "\n \u2022 " + "You gain darkvision with a range of 120 feet." + "\n \u2022 " + "You make Strength-based attack rolls with advantage." + "\n \u2022 " + "Your melee weapon attacks deal an extra 1d6 force damage on a hit." + "\n\n" + toUni("Great Tree") + ": Your skin appears barky, leaves sprout from your hair, and you gain the following benefits:" + "\n \u2022 " + "You gain 10 temporary hit points." + "\n \u2022 " + "You make Constitution saving throws with advantage." + "\n \u2022 " + "You make Dexterity- and Wisdom-based attack rolls with advantage." + "\n \u2022 " + "While you are on the ground, the ground within 15 feet of you is difficult terrain for your enemies."
};
SpellsList["healing spirit"] = {
	name : "Healing Spirit",
	classes : ["druid", "ranger"],
	source : ["X", 157],
	ritual : false,
	level : 2,
	school : "Conj",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "5-ft cube heals any crea I can see that enter it for 1d6+1d6/SL HP; I can move it 30 ft as a bns action",
	descriptionFull : "You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice)." + "\n   " + "Until the spell ends, whenever you or a creature you can see moves into the spirit's space for the first time on a turn or starts its turn there, you can cause the spirit to restore 1d6 hit points to that creature (no action required). The spirit can't heal constructs or undead." + "\n   " + "As a bonus action on your turn, you can move the spirit up to 30 feet to a space you can see." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d6 for each slot level above 2nd."
};
SpellsList["holy weapon"] = { 
	name : "Holy Weapon",
	classes : ["cleric", "paladin"],
	source : ["X", 157],
	ritual : false,
	level : 5,
	school : "Evoc",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 h",
	save : "Con",
	description : "Wea +2d8 Radiant dmg; bns a end spell, 30-ft rad all crea 4d8 Radiant dmg, blind; save half, no blind",
	descriptionFull : "You imbue a weapon you touch with holy power. Until the spell ends, the weapon emits bright light in a 30-foot radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra 2d8 radiant damage on a hit. If the weapon isn't already a magic weapon, it becomes one for the duration." + "\n   " + "As a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of you must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, a creature takes half as much damage and isn't blinded. At the end of each of its turns, a blinded creature can make a Constitution saving throw, ending the effect on itself on a success."
};
SpellsList["illusory dragon"] = {
	name : "Illusory Dragon",
	classes : ["wizard"],
	source : ["X", 157],
	ritual : false,
	level : 8,
	school : "Illus",
	time : "1 a",
	range : "120 ft",
	components : "S",
	duration : "Conc, 1 min",
	save : "W/I",
	description : "Huge shadowy dragon; see: Wis save or fright.; bns a move 60 ft \u0026 breath wea 7d6 dmg; Int save half",
	descriptionFull : "By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell's duration and occupies its space, as if it were a creature." + "\n   " + "When the illusion appears, any of your enemies that can see it must succeed on a Wisdom saving throw or become frightened of it for 1 minute. If a frightened creature ends its turn in a location where it doesn't have line of sight to the illusion, it can repeat the saving throw, ending the effect on itself on a success." + "\n   " + "As a bonus action on your turn, you can move the illusion up to 60 feet. At any point during its movement, you can cause it to exhale a blast of energy in a 60-foot cone originating from its space. When you create the dragon, choose a damage type: acid, cold, fire, lightning, necrotic, or poison. Each creature in the cone must make an Intelligence saving throw, taking 7d6 damage of the chosen damage type on a failed save, or half as much damage on a successful one." + "\n   " + "The illusion is tangible because of the shadow stuff used to create it, but attacks miss it automatically, it succeeds on all saving throws, and it is immune to all damage and conditions. A creature that uses an action to examine the dragon can determine that it is an illusion by succeeding on an Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it and has advantage on saving throws against its breath."
};
SpellsList["infernal calling"] = {
	name : "Infernal Calling",
	classes : ["warlock", "wizard"],
	source : ["X", 158],
	ritual : false,
	level : 5,
	school : "Conj",
	time : "1 min",
	range : "90 ft",
	components : "V,S,M\u0192",
	compMaterial : "A ruby worth at least 999 gp",
	duration : "Conc, 1 h",
	description : "Summon 1 devil of CR 6+1/SL; hostile to all, obeys your command if to its liking or Cha check; see B",
	descriptionFull : "Uttering a dark incantation, you summon a devil from the Nine Hells. You choose the devil's type, which must be one of challenge rating 6 or lower, such as a barbed devil or a bearded devil. The devil appears in an unoccupied space that you can see within range. The devil disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The devil is unfriendly toward you and your companions. Roll initiative for the devil, which has its own turns. It is under the Dungeon Master's control and acts according to its nature on each of its turns, which might result in its attacking you if it thinks it can prevail, or trying to tempt you to undertake an evil act in exchange for limited service. The DM has the creature's statistics." + "\n   " + "On each of your turns, you can try to issue a verbal command to the devil (no action required by you). It obeys the command if the likely outcome is in accordance with its desires, especially if the result would draw you toward evil. Otherwise, you must make a Charisma (Deception, Intimidation, or Persuasion) check contested by its Wisdom (Insight) check. You make the check with advantage if you say the devil's true name. If your check fails, the devil becomes immune to your verbal commands for the duration of the spell, though it can still carry out your commands if it chooses. If your check succeeds, the devil carries out your command — such as “attack my enemies,” “explore the room ahead,” or “bear this message to the queen” — until it completes the activity, at which point it returns to you to report having done so." + "\n   " + "If your concentration ends before the spell reaches its full duration, the devil doesn't disappear if it has become immune to your verbal commands. Instead, it acts in whatever manner it chooses for 3d6 minutes, and then it disappears." + "\n   " + "If you possess an individual devil's talisman, you can summon that devil if it is of the appropriate challenge rating plus 1, and it obeys all your commands, with no Charisma checks required." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
};
SpellsList["infestation-xgte"] = {
	name : "Infestation",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : ["X", 158],
	ritual : false,
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A living flea",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea save or 1d6 Poison dmg and moved 5 ft in random direction; +1d6 at CL 5, 11, and 17",
	descriptionFull : "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction:" + "\n\n" + toUni("d4") + "\t" + toUni("Direction") + "\n  1\tNorth" + "\n  2\tSouth" + "\n  3\tEast" + "\n  4\tWest" + "\n\n   " + "This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["invulnerability"] = {
	name : "Invulnerability",
	classes : ["wizard"],
	source : ["X", 160],
	ritual : false,
	level : 9,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u2020",
	compMaterial : "A small piece of adamantine worth at least 500 gp, which the spell consumes",
	duration : "Conc, 10 min",
	description : "Immune to all damage until the spell ends (500gp cons.)",
	descriptionFull : "You are immune to all damage until the spell ends."
};
SpellsList["life transference"] = {
	name : "Life Transference",
	classes : ["cleric", "wizard"],
	source : ["X", 160],
	ritual : false,
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "You take 4d8+1d8/SL Necrotic dmg, and 1 crea in range you can see regains HP twice that amount",
	descriptionFull : "You sacrifice some of your health to mend another creature's injuries. You take 4d8 necrotic damage, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};
SpellsList["maddening darkness"] = {
	name : "Maddening Darkness",
	classes : ["warlock", "wizard"],
	source : ["X", 160],
	ritual : false,
	level : 8,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V,M",
	compMaterial : "A drop of pitch mixed with a drop of mercury",
	duration : "Conc, 10 min",
	save : "Wis",
	description : "60-ft rad darkness; darkvision, light doesn't work; Crea starting turn in 8d8 Psychic dmg, save halves",
	descriptionFull : "Magical darkness spreads from a point you choose within range to fill a 60-foot-radius sphere until the spell ends. The darkness spreads around corners. A creature with darkvision can't see through this darkness. Nonmagical light, as well as light created by spells of 8th level or lower, can't illuminate the area." + "\n   " + "Shrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one."
};
SpellsList["mass polymorph"] = {
	name : "Mass Polymorph",
	classes : ["bard", "sorcerer", "wizard"],
	source : ["X", 160],
	ritual : false,
	level : 9,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A caterpillar cocoon",
	duration : "Conc, 1 h",
	save : "Wis",
	description : "10 crea save or take chosen beast form of CR \u2264 its CR or half its char. level; can only act as beast; see B",
	descriptionFull : "You transform up to ten creatures of your choice that you can see within range. An unwilling target must succeed on a Wisdom saving throw to resist the transformation. An unwilling shapechanger automatically succeeds on the save." + "\n   " + "Each target assumes a beast form of your choice, and you can choose the same form or different ones for each target. The new form can be any beast you have seen whose challenge rating is equal to or less than the target's (or half the target's level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast, but the target retains its hit points, alignment, and personality." + "\n   " + "Each target gains a number of temporary hit points equal to the hit points of its new form. These temporary hit points can't be replaced by temporary hit points from another source. A target reverts to its normal form when it has no more temporary hit points or it dies. If the spell ends before then, the creature loses all its temporary hit points and reverts to its normal form." + "\n   " + "The creature is limited in the actions it can perform by the nature of its new form. It can't speak, cast spells, or do anything else that requires hands or speech." + "\n   " + "The target's gear melds into the new form. The target can't activate, use, wield, or otherwise benefit from any of its equipment."
};
SpellsList["mental prison"] = {
	name : "Mental Prison",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["X", 161],
	ritual : false,
	level : 6,
	school : "Illus",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea 5d10 Psychic dmg; save or restrained, blind, deaf, and takes 10d10 dmg if moved; charm effect",
	descriptionFull : "You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw. The target succeeds automatically if it is immune to being charmed. On a successful save, the target takes 5d10 psychic damage, and the spell ends. On a failed save, the target takes 5d10 psychic damage, and you make the area immediately around the target's space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever form the illusion takes, the target can't see or hear anything beyond it and is restrained for the spell's duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes 10d10 psychic damage, and the spell ends."
};
SpellsList["mighty fortress"] = {
	name : "Mighty Fortress",
	classes : ["wizard"],
	source : ["X", 161],
	ritual : false,
	level : 8,
	school : "Conj",
	time : "1 min",
	range : "1 mile",
	components : "V,S,M\u2020",
	compMaterial : "A diamond worth at least 500 gp, which the spell consumes",
	duration : "Instantaneous",
	description : "Create a stone fortress 120 ft on a side for 7 days; see book for effects (500gp cons.)",
	descriptionFull : "A fortress of stone erupts from a square area of ground of your choice that you can see within range. The area is 120 feet on each side, and it must not have any buildings or other structures on it. Any creatures in the area are harmlessly lifted up as the fortress rises." + "\n   " + "The fortress has four turrets with square bases, each one 20 feet on a side and 30 feet tall, with one turret on each corner. The turrets are connected to each other by stone walls that are each 80 feet long, creating an enclosed area. Each wall is 1 foot thick and is composed of panels that are 10 feet wide and 20 feet tall. Each panel is contiguous with two other panels or one other panel and a turret. You can place up to four stone doors in the fortress's outer wall." + "\n   " + "A small keep stands inside the enclosed area. The keep has a square base that is 50 feet on each side, and it has three floors with 10-foot-high ceilings. Each of the floors can be divided into as many rooms as you like, provided each room is at least 5 feet on each side. The floors of the keep are connected by stone staircases, its walls are 6 inches thick, and interior rooms can have stone doors or open archways as you choose. The keep is furnished and decorated however you like, and it contains sufficient food to serve a nine-course banquet for up to 100 people each day. Furnishings, food, and other objects created by this spell crumble to dust if removed from the fortress." + "\n   " + "A staff of one hundred invisible servants obeys any command given to them by creatures you designate when you cast the spell. Each servant functions as if created by the unseen servant spell." + "\n   " + "The walls, turrets, and keep are all made of stone that can be damaged. Each 10-foot-by-10-foot section of stone has AC 15 and 30 hit points per inch of thickness. It is immune to poison and psychic damage. Reducing a section of stone to 0 hit points destroys it and might cause connected sections to buckle and collapse at the DM's discretion." + "\n   " + "After 7 days or when you cast this spell somewhere else, the fortress harmlessly crumbles and sinks back into the ground, leaving any creatures that were inside it safely on the ground." + "\n   " + "Casting this spell on the same spot once every 7 days for a year makes the fortress permanent."
};
SpellsList["mind spike"] = { // +1d8 at higher levels errata (https://twitter.com/JeremyECrawford/status/930603935391293440)
	name : "Mind Spike",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["X", 162],
	ritual : false,
	level : 2,
	school : "Div",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Conc, 1 h",
	save: "Wis",
	description : "1 crea 3d8+1d8/SL Psychic dmg, know its location, can't be invis for you; save half, no other benefits",
	descriptionFull : "You reach into the mind of one creature you can see within range. The target must make a Wisdom saving throw, taking 3d8 psychic damage on a failed save, or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can't become hidden from you, and if it's invisible, it gains no benefit from that condition against you." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
};
SpellsList["negative energy flood"] = {
	name : "Negative Energy Flood",
	classes : ["warlock", "wizard"],
	source : ["X", 163],
	ritual : false,
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,M",
	compMaterial : "A broken bone and a square of black silk",
	duration : "Instantaneous",
	save : "Con",
	description : "1 non-undead 5d12 Necrotic dmg; save halves; rises as zombie if killed; undead gain 5d12/2 temp HP",
	descriptionFull : "You send ribbons of negative energy at one creature you can see within range. Unless the target is undead, it must make a Constitution saving throw, taking 5d12 necrotic damage on a failed save, or half as much damage on a successful one. A target killed by this damage rises up as a zombie at the start of your next turn. The zombie pursues whatever creature it can see that is closest to it. Statistics for the zombie are in the Monster Manual." + "\n   " + "If you target an undead with this spell, the target doesn't make a saving throw. Instead, roll 5d12. The target gains half the total as temporary hit points."
};
SpellsList["power word pain"] = {
	name : "Power Word Pain",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["X", 163],
	ritual : false,
	level : 7,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "Instantaneous",
	description : "1 crea with 100 HP or less disadv. atk/check/save, conc. save to cast; save/rnd to end; charm effect",
	descriptionFull : "You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the spell has no effect on it. A target is also unaffected if it is immune to being charmed." + "\n   " + "While the target is affected by crippling pain, any speed it has can be no higher than 10 feet. The target also has disadvantage on attack rolls, ability checks, and saving throws, other than Constitution saving throws. Finally, if the target tries to cast a spell, it must first succeed on a Constitution saving throw, or the casting fails and the spell is wasted." + "\n   " + "A target suffering this pain can make a Constitution saving throw at the end of each of its turns. On a successful save, the pain ends."
};
SpellsList["primal savagery-xgte"] = { 
	name : "Primal Savagery",
	classes : ["druid"],
	source : ["X", 163],
	ritual : false,
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "S",
	duration : "Instantaneous",
	description : "Melee spell attack, 5 ft range, for 1d10 Acid dmg; +1d10 at CL 5, 11, and 17",
	descriptionFull : "You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal." + "\n   " + "The spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};
SpellsList["psychic scream"] = {
	name : "Psychic Scream",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["X", 163],
	ritual : false,
	level : 9,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Int",
	description : "10 crea Int>2 save or 14d6 Psychic dmg and stunned; save halves, no stun; end of turn save to stop",
	descriptionFull : "You unleash the power of your mind to blast the intellect of up to ten creatures of your choice that you can see within range. Creatures that have an Intelligence score of 2 or lower are unaffected." + "\n   " + "Each target must make an Intelligence saving throw. On a failed save, a target takes 14d6 psychic damage and is stunned. On a successful save, a target takes half as much damage and isn't stunned. If a target is killed by this damage, its head explodes, assuming it has one." + "\n   " + "A stunned target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the stunning effect ends."
};
SpellsList["scatter"] = {
	name : "Scatter",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["X", 164],
	ritual : false,
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Wis",
	description : "Up to 5 creatures in range, save or teleported 120 ft to a different space you can see on the ground",
	descriptionFull : "The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. That space must be on the ground or on a floor."
};
SpellsList["shadow blade"] = {
	name : "Shadow Blade",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["X", 164],
	ritual : false,
	level : 2,
	school : "Illus",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Sword 2d8 Psychic dmg, finesse, light, thrown (20/60ft), adv. if target in dim/dark; +1d8 at SL3/5/7",
	descriptionMetric : "Sword: 2d8 Psychic dmg, finesse, light, thrown (6/18m), adv. if target in dim/dark; +1d8 at SL3/5/7",
	descriptionFull : "You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage." + "\n   " + "If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand." + AtHigherLevels + "When you cast this spell using a 3rd- or 4th-level spell slot, the damage increases to 3d8. When you cast it using a 5th- or 6th-level spell slot, the damage increases to 4d8. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d8."
};
SpellsList["shadow of moil"] = {
	name : "Shadow of Moil",
	classes : ["warlock"],
	source : ["X", 164],
	ritual : false,
	level : 4,
	school : "Necro",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "An undead eyeball encased in a gem worth at least 150 gp",
	duration : "Conc, 1 min",
	description : "You: heavy obs., resist Radiant dmg; 10-ft rad: 1 step darker, hit vs. you take 2d8 Necro dmg (150gp)",
	descriptionFull : "Flame-like shadows wreathe your body until the spell ends, causing you to become heavily obscured to others. The shadows turn dim light within 10 feet of you into darkness, and bright light in the same area to dim light." + "\n   " + "Until the spell ends, you have resistance to radiant damage. In addition, whenever a creature within 10 feet of you hits you with an attack, the shadows lash out at that creature, dealing it 2d8 necrotic damage."
};
SpellsList["sickening radiance"] = {
	name : "Sickening Radiance",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["X", 164],
	ritual : false,
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Con",
	description : "30-ft rad; all enter/start turn: save or 4d10 Radiant dmg, 1 level of exhaustion, and emit 5-ft rad light",
	descriptionFull : "Dim, greenish light spreads within a 30-foot-radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the spell ends." + "\n   " + "When a creature moves into the spell's area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw or take 4d10 radiant damage, and it suffers one level of exhaustion and emits a dim, greenish light in a 5-foot radius. This light makes it impossible for the creature to benefit from being invisible. The light and any levels of exhaustion caused by this spell go away when the spell ends."
};
SpellsList["skill empowerment"] = {
	name : "Skill Empowerment",
	classes : ["bard", "sorcerer", "wizard"],
	source : ["X", 165],
	ritual : false,
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "1 willing creature gains expertise in one skill of my choice that it is proficient with for the duration",
	descriptionFull : "Your magic deepens a creature's understanding of its own talent. You touch one willing creature and give it expertise in one skill of your choice; until the spell ends, the creature doubles its proficiency bonus for ability checks it makes that use the chosen skill." + "\n   " + "You must choose a skill in which the target is proficient and that isn't already benefiting from an effect, such as Expertise, that doubles its proficiency bonus."
};
SpellsList["snare-xgte"] = {
	name : "Snare",
	classes : ["druid", "ranger", "wizard"],
	source : ["X", 165],
	ritual : false,
	level : 1,
	school : "Abjur",
	time : "1 min",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "25 feet of rope, which is consumed by the spell",
	duration : "8 h, till trigger",
	save : "Dex",
	description : "5-ft rad trap; Investigation vs spell DC to see; save or restrained 3 ft in the air; save each rnd (5sp)",
	descriptionFull : "As you cast this spell, you use the rope to create a circle with a 5-foot radius on the ground or the floor. When you finish casting, the rope disappears and the circle becomes a magic trap." + "\n   " + "This trap is nearly invisible, requiring a successful Intelligence (Investigation) check against your spell save DC to be discerned." + "\n   " + "The trap triggers when a Small, Medium, or Large creature moves onto the ground or the floor in the spell's radius. That creature must succeed on a Dexterity saving throw or be magically hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is restrained there until the spell ends." + "\n   " + "A restrained creature can make a Dexterity saving throw at the end of each of its turns, ending the effect on itself on a success. Alternatively, the creature or someone else who can reach it can use an action to make an Intelligence (Arcana) check against your spell save DC. On a success, the restrained effect ends." + "\n   " + "After the trap is triggered, the spell ends when no creature is restrained by it."
};
SpellsList["soul cage"] = {
	name : "Soul Cage",
	classes : ["warlock", "wizard"],
	source : ["X", 165],
	ritual : false,
	level : 6,
	school : "Necro",
	time : "1 rea",
	range : "60 ft",
	components : "V,S,M\u0192",
	compMaterial : "A tiny silver cage worth 100 gp",
	duration : "8 h",
	description : "As a reaction when humanoid in range dies, you capture their soul in a tiny cage; see book (100gp)",
	descriptionFull : "This spell snatches the soul of a humanoid as it dies and traps it inside the tiny cage you use for the material component. A stolen soul remains inside the cage until the spell ends or until you destroy the cage, which ends the spell. While you have a soul inside the cage, you can exploit it in any of the ways described below. You can use a trapped soul up to six times. Once you exploit a soul for the sixth time, it is released, and the spell ends. While a soul is trapped, the dead humanoid it came from can't be revived." + "\n   " + toUni("Steal Life") + ": You can use a bonus action to drain vigor from the soul and regain 2d8 hit points." + "\n   " + toUni("Query Soul") + ": You ask the soul a question (no action required) and receive a brief telepathic answer, which you can understand regardless of the language used. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic." + "\n   " + toUni("Borrow Experience") + ": You can use a bonus action to bolster yourself with the soul's life experience, making your next attack roll, ability check, or saving throw with advantage. If you don't use this benefit before the start of your next turn, it is lost." + "\n   " + toUni("Eyes of the Dead") + ": You can use an action to name a place the humanoid saw in life, which creates an invisible sensor somewhere in that place if it is on the plane of existence you're currently on. The sensor remains for as long as you concentrate, up to 10 minutes (as if you were concentrating on a spell). You receive visual and auditory information from the sensor as if you were in its space using your senses" + "\n   " + "A creature that can see the sensor (such as one using see invisibility or truesight) sees a translucent image of the tormented humanoid whose soul you caged."
};
SpellsList["steel wind strike"] = {
	name : "Steel Wind Strike",
	classes : ["ranger", "wizard"],
	source : ["X", 166],
	ritual : false,
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "S,M\u0192",
	compMaterial : "A melee weapon worth at least 1 sp",
	duration : "Instantaneous",
	description : "Melee spell attack vs. 5 crea in range; 6d10 Force dmg on hit; after, you teleport next to one target",
	descriptionFull : "You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 6d10 force damage." + "\n   " + "You can then teleport to an unoccupied space you can see within 5 feet of one of the targets you hit or missed."
};
SpellsList["summon greater demon"] = {
	name : "Summon Greater Demon",
	classes : ["warlock", "wizard"],
	source : ["X", 166],
	ritual : false,
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A vial of blood from a humanoid killed within the past 24 hours",
	duration : "Conc, 1 h",
	save : "Cha",
	description : "Summon 1 demon of CR 5+1/SL that obeys you; end of each of its turn, save to break free; see book",
	descriptionFull : "You utter foul words, summoning one demon from the chaos of the Abyss. You choose the demon's type, which must be one of challenge rating 5 or lower, such as a shadow demon or a barlgura. The demon appears in an unoccupied space you can see within range, and the demon disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "Roll initiative for the demon, which has its own turns. When you summon it and on each of your turns thereafter, you can issue a verbal command to it (requiring no action on your part), telling it what it must do on its next turn. If you issue no command, it spends its turn attacking any creature within reach that has attacked it." + "\n   " + "At the end of each of the demon's turns, it makes a Charisma saving throw. The demon has disadvantage on this saving throw if you say its true name. On a failed save, the demon continues to obey you. On a successful save, your control of the demon ends for the rest of the duration, and the demon spends its turns pursuing and attacking the nearest non-demons to the best of its ability. If you stop concentrating on the spell before it reaches its full duration, an uncontrolled demon doesn't disappear for 1d6 rounds if it still has hit points." + "\n   " + "As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demon can't cross the circle or harm it, and it can't target anyone within it. Using the material component in this manner consumes it when the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the challenge rating increases by 1 for each slot level above 4th."
};
SpellsList["summon lesser demons"] = {
	name : "Summon Lesser Demons",
	classes : ["warlock", "wizard"],
	source : ["X", 167],
	ritual : false,
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A vial of blood from a humanoid killed within the past 24 hours",
	duration : "Conc, 1 h",
	description : "Summon up to 8 (16 at SL6, 24 at SL8) CR \u22641 1 demons, DM choice; attack nearest non-demons",
	descriptionFull : "You utter foul words, summoning demons from the chaos of the Abyss. Roll on the following table to determine what appears." + "\n\n " + toUni("d6") + "\t" + toUni("Demons Summoned") + "\n  1-2\tTwo demons of challenge rating 1 or lower" + "\n  3-4\tFour demons of challenge rating 1/2 or lower" + "\n  5-6\tEight demons of challenge rating 1/4 or lower" + "\n\n   " + "The DM chooses the demons, such as manes or dretches, and you choose the unoccupied spaces you can see within range where they appear. A summoned demon disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The demons are hostile to all creatures, including you. Roll initiative for the summoned demons as a group, which has its own turns. The demons pursue and attack the nearest non-demons to the best of their ability." + "\n   " + "As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demons can't cross the circle or harm it, and they can't target anyone within it. Using the material component in this manner consumes it when the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 6th or 7th level, you summon twice as many demons. If you cast it using a spell slot of 8th or 9th level, you summon three times as many demons."
};
SpellsList["synaptic static"] = {
	name : "Synaptic Static",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["X", 167],
	ritual : false,
	level : 5,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instant, 1 min",
	save : "Int",
	description : "20-ft rad all crea Int>2 save or 8d6 Psychic dmg, -1d6 on atks/check/conc. save; save half, no -1d6",
	descriptionFull : "You choose a point within range and cause psychic energy to explode there. Each creature in a 20-foot-radius sphere centered on that point must make an Intelligence saving throw. A creature with an Intelligence score of 2 or lower can't be affected by this spell. A target takes 8d6 psychic damage on a failed save, or half as much damage on a successful one." + "\n   " + "After a failed save, a target has muddled thoughts for 1 minute. During that time, it rolls a d6 and subtracts the number rolled from all its attack rolls and ability checks, as well as its Constitution saving throws to maintain concentration. The target can make an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success."
};
SpellsList["temple of the gods"] = {
	name : "Temple of the Gods",
	classes : ["cleric"],
	source : ["X", 167],
	ritual : false,
	level : 7,
	school : "Conj",
	time : "1 h",
	range : "120 ft",
	components : "V,S,M\u0192",
	compMaterial : "A holy symbol worth at least 5 gp",
	duration : "24 h",
	description : "Create a temple 120 ft on a side to the deity of a holy symbol used; see book for effects",
	descriptionFull : "You cause a temple to shimmer into existence on ground you can see within range. The temple must fit within an unoccupied cube of space, up to 120 feet on each side. The temple remains until the spell ends. It is dedicated to whatever god, pantheon, or philosophy is represented by the holy symbol used in the casting." + "\n   " + "You make all decisions about the temple's appearance. The interior is enclosed by a floor, walls, and a roof, with one door granting access to the interior and as many windows as you wish. Only you and any creatures you designate when you cast the spell can open or close the door." + "\n   " + "The temple's interior is an open space with an idol or altar at one end. You decide whether the temple is illuminated and whether that illumination is bright light or dim light. The smell of burning incense fills the air within, and the temperature is mild." + "\n   " + "The temple opposes types of creatures you choose when you cast this spell. Choose one or more of the following: celestials, elementals, fey, fiends, or undead. If a creature of the chosen type attempts to enter the temple, that creature must make a Charisma saving throw. On a failed save, it can't enter the temple for 24 hours. Even if the creature can enter the temple, the magic there hinders it; whenever it makes an attack roll, an ability check, or a saving throw inside the temple, it must roll a d4 and subtract the number rolled from the d20 roll." + "\n   " + "In addition, the sensors created by divination spells can't appear inside the temple, and creatures within can't be targeted by divination spells." + "\n   " + "Finally, whenever any creature in the temple regains hit points from a spell of 1st level or higher, the creature regains additional hit points equal to your Wisdom modifier (minimum 1 hit point)." + "\n   " + "The temple is made from opaque magical force that extends into the Ethereal Plane, thus blocking ethereal travel into the temple's interior. Nothing can physically pass through the temple's exterior. It can't be dispelled by dispel magic, and antimagic field has no effect on it. A disintegrate spell destroys the temple instantly." + "\n   " + "Casting this spell on the same spot once every 7 days for a year makes this effect permanent."
};
SpellsList["tenser's transformation"] = {
	name : "Tenser's Transformation",
	classes : ["wizard"],
	source : ["X", 168],
	ritual : false,
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A few hairs from a bull",
	duration : "Conc, 10 min",
	description : "50 temp HP; prof Str/Con save, all wea/arm; extra atk; adv., +1d12 Force dmg on wea atks; no spellc.",
	descriptionFull : "You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can't cast spells, and you gain the following benefits:" + "\n \u2022 " + "You gain 50 temporary hit points. If any of these remain when the spell ends, they are lost." + "\n \u2022 " + "You have advantage on attack rolls that you make with simple and martial weapons." + "\n \u2022 " + "When you hit a target with a weapon attack, that target takes an extra 2d12 force damage." + "\n \u2022 " + "You have proficiency with all armor, shields, simple weapons, and martial weapons." + "\n \u2022 " + "You have proficiency in Strength and Constitution saving throws." + "\n \u2022 " + "You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks." + "\n   " + "Immediately after the spell ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion."
};
SpellsList["thunder step"] = {
	name : "Thunder Step",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["X", 168],
	ritual : false,
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Con",
	description : "You + willing crea teleport 90 ft; all crea in 10 ft of left spot 3d10+1d10/SL Thunder dmg; save half",
	descriptionFull : "You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking 3d10 thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away." + "\n   " + "You can bring along objects as long as their weight doesn't exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd."
};
SpellsList["tiny servant"] = {
	name : "Tiny Servant",
	classes : ["wizard"],
	source : ["X", 168],
	ritual : false,
	level : 3,
	school : "Trans",
	time : "1 min",
	range : "Touch",
	components : "V,S",
	duration : "8 h",
	description : "Animate 1+2/SL Tiny, nonmagical, unattended obj as tiny servants; bns a to command telepathically",
	descriptionFull : "You touch one Tiny, nonmagical object that isn't attached to another object or a surface and isn't being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 hit points. See the Tiny Servant stat block for its statistics." + "\n   " + "As a bonus action, you can mentally command the creature if it is within 120 feet of you. (If you control multiple creatures with this spell, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a simple, general command, such as to fetch a key, stand watch, or stack some books. If you issue no commands, the servant does nothing other than defend itself against hostile creatures. Once given an order, the servant continues to follow that order until its task is complete." + "\n   " + "When the creature drops to 0 hit points, it reverts to its original form, and any remaining damage carries over to that form." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can animate two additional objects for each slot level above 3rd."
};
SpellsList["toll the dead-xgte"] = {
	name : "Toll the Dead",
	classes : ["cleric", "warlock", "wizard"],
	source : ["X", 169],
	ritual : false,
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea save or 1d12 Necrotic damage (only 1d8 if at full hp); +1d12/+1d8 at CL 5, 11, and 17",
	descriptionFull : "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage." + "\n   " + "The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."
};
SpellsList["wall of light"] = {
	name : "Wall of Light",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["X", 170],
	ritual : false,
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A hand mirror",
	duration : "Conc, 10 min",
	save: "Con",
	description : "60\u00D75\u00D710ft (l\u00D7w\u00D7h) 4d8+1d8/SL Radiant dmg & blind; save half, not blind; 1 a rngd spell atk; see B",
	descriptionMetric : "18\u00D71,5\u00D73m (l\u00D7w\u00D7h) 4d8+1d8/SL Radiant dmg & blind; save half, not blind; 1 a rngd spell atk; see B",
	descriptionFull : "A shimmering wall of bright light appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits bright light out to 120 feet and dim light for an additional 120 feet." + "\n   " + "When the wall appears, each creature in its area must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded. A blinded creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success." + "\n   " + "A creature that ends its turn in the wall's area takes 4d8 radiant damage." + "\n   " + "Until the spell ends, you can use an action to launch a beam of radiance from the wall at one creature you can see within 60 feet of it. Make a ranged spell attack. On a hit, the target takes 4d8 radiant damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the wall's length drops to 0 feet, the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};
SpellsList["word of radiance"] = {
	name : "Word of Radiance",
	classes : ["cleric"],
	source : ["X", 171],
	ritual : false,
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5 ft",
	components : "V,M",
	compMaterial : "A holy symbol",
	duration : "Instantaneous",
	save : "Con",
	description : "Any crea within range save or 1d6 Radiant damage; +1d6 at CL 5, 11, and 17",
	descriptionFull : "You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["wrath of nature"] = {
	name : "Wrath of Nature",
	classes : ["druid", "ranger"],
	source : ["X", 171],
	ritual : false,
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "60-ft cu dif. ter., tree: Dex or 4d6 Slash. dmg, root: Str or restr., rock: rngd atk 3d8 Bludg. dmg; see B ",
	descriptionFull : "You call out to the spirits of nature to rouse them against your enemies. Choose a point you can see within range. The spirits cause trees, rocks, and grasses in a 60-foot cube centered on that point to become animated until the spell ends." + "\n   " + toUni("Grasses and Undergrowth") + ": Any area of ground in the cube that is covered by grass or undergrowth is difficult terrain for your enemies." + "\n   " + toUni("Trees") + ": At the start of each of your turns, each of your enemies within 10 feet of any tree in the cube must succeed on a Dexterity saving throw or take 4d6 slashing damage from whipping branches." + "\n   " + toUni("Roots and Vines") + ": At the end of each of your turns, one creature of your choice that is on the ground in the cube must succeed on a Strength saving throw or become restrained until the spell ends. A restrained creature can use an action to make a Strength (Athletics) check against your spell save DC, ending the effect on itself on a success." + "\n   " + toUni("Rocks") + ": As a bonus action on your turn, you can cause a loose rock in the cube to launch at a creature you can see in the cube. Make a ranged spell attack against the target. On a hit, the target takes 3d8 nonmagical bludgeoning damage, and it must succeed on a Strength saving throw or fall prone."
};
SpellsList["zephyr strike-xgte"] = { 
	name : "Zephyr Strike",
	classes : ["ranger"],
	source : ["X", 171],
	ritual : false,
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "Moving doesn't provoke opportunity atks; once: adv. on wea atk, +1d8 Force dmg, +30 ft spd for turn",
	descriptionFull : "You move like the wind. Until the spell ends, your movement doesn't provoke opportunity attacks." + "\n   " + "Once before the spell ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra 1d8 force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn."
};

// Add weapons (attack cantrips)
WeaponsList["create bonfire"] = {
	regExpSearch : /^(?=.*create)(?=.*bonfire).*$/i,
	name : "Create Bonfire",
	source : [["X", 152], ["E", 16]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "fire"],
	range : "60 ft",
	description : "5-ft cube; Dex save at casting or when moved into, success - no damage; Conc, 1 min (XGtE 152)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["frostbite"] = {
	regExpSearch : /frostbite/i,
	name : "Frostbite",
	source : [["X", 156], ["E", 18]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "cold"],
	range : "60 ft",
	description : "Con save, success - no damage, fail - also disadv. on next weapon attack roll in next turn; 1 creature (XGtE 156)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["infestation-xgte"] = {
	regExpSearch : /infestation/i,
	name : "Infestation",
	source : ["X", 158],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "poison"],
	range : "30 ft",
	description : "Con save, success - no damage, fail - target also moved 5 ft in random direction (XGtE 158)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["magic stone"] = {
	regExpSearch : /^(?=.*magic)(?=.*stone).*$/i,
	name : "Magic Stone",
	source : [["X", 160], ["E", 20]],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : [1, 6, "bludgeoning"],
	range : "60/120 ft",
	description : "Produces 3 stones that each can be thrown (60 ft) or hurled with a sling (120 ft) as a spell attack (XGtE 160)",
	abilitytodamage : true
};
WeaponsList["primal savagery-xgte"] = {
	regExpSearch : /^(?=.*primal)(?=.*savagery).*$/i,
	name : "Primal Savagery",
	source : ["X", 169],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 10, "acid"],
	range : "Melee (5 ft)",
	description : "(XGtE 163)",
	abilitytodamage : false
};
WeaponsList["thunderclap"] = {
	regExpSearch : /thunderclap/i,
	name : "Thunderclap",
	source : [["X", 168], ["E", 22]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "thunder"],
	range : "5-ft radius",
	description : "Con save, success - no damage; all creatures in area; audible in 100 ft (XGtE 168)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["toll the dead-xgte"] = {
	regExpSearch : /^(?=.*toll)(?=.*the)(?=.*dead).*$/i,
	name : "Toll the Dead",
	source : ["X", 169],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 12, "necrotic"],
	range : "60 ft",
	description : "Wis save, success - no damage; If target is at full hp, d8 instead of d12 damage (XGtE 169)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["word of radiance"] = {
	regExpSearch : /^(?=.*word)(?=.*radiance).*$/i,
	name : "Word of Radiance",
	source : ["X", 171],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 6, "radiant"],
	range : "5-ft radius",
	description : "Con save, success - no damage; Only chosen creatures I can see are affected (XGtE 171)",
	abilitytodamage : false,
	dc : true
};

// Add creatures
CreatureList["hound of ill omen"] = { // Stats for the Sorcerer (Shadow Magic) feature
	name : "Hound of Ill Omen",
	source : ["X", 51],
	size : 3,
	type : "Monstrosity",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 37,
	hd : [5, 10],
	speed : "50 ft",
	scores : [17, 15, 15, 3, 12, 7],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 4
	},
	senses : "Adv. on Wis (Perception) checks using hearing/smell;\nAt the start of each turn, knows where the target is",
	passivePerception : 13,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "Target must succeed on a DC 13 Strength saving throw or be knocked prone"
		}
	],
	traits : [{
			name : "Keen Hearing and Smell",
			description : "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
			name : "Pack Tactics",
			description : "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}
	],
	features : [{
			name : "Actions",
			description : "The hound can only move towards its targets and make attacks or opportunity attacks against its target."
		}, {
			name : "Temporary Hit Points",
			description : "When the hound is summoned, it gains temporary HP equal to half my sorcerer level."
		}, {
			name : "Shadowy Form",
			description : "The hound can move through other creatures and objects as if they were difficult terrain. It takes 5 force damage if it ends its turn inside an object."
		}, {
			name : "Sign of Ill Omen",
			description : "While the hound is within 5 ft of its target, that target has disadvantage on saving throws versus my spells."
		}
	]
};
CreatureList["accursed specter"] = { // Stats for the Warlock (the Hexblade) feature
	name : "Accursed Specter",
	source : ["X", 56],
	size : 3,
	type : "Undead",
	subtype : "",
	alignment : "Chaotic Evil",
	ac : 12,
	hp : 22,
	hd : [5, 8],
	speed : "fly 50 ft (hover)",
	scores : [1, 14, 11, 10, 10, 12],
	saves : ["", "", "", "", "", ""],
	damage_resistances : "acid; cold; fire; lightning; thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	damage_immunities : "necrotic, poison",
	condition_immunities : "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "all languages it knew in life, but can't speak",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Life Drain",
			ability : 2,
			damage : [3, 6, "necrotic"],
			range : "Melee (5 ft)",
			description : "DC 10 Con save or HP max reduced by same as damage taken until a long rest",
			modifiers : ["oCha", "", false],
			tooltip : "Life Drain\n\nThe target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
		}
	],
	traits : [{
			name : "Incorporeal Movement",
			description : "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}, {
			name : "Sunlight Sensitivity",
			description : "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name : "Life Drain",
			description : "The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
		}
	],
	features : [{
			name : "Temporary Hit Points",
			description : "When the accursed specter rises from a corpse, it gains temporary HP equal to half my warlock level."
		}, {
			name : "Attack Bonus",
			description : "The accursed specter adds the warlock's Charisma modifier (minimum +0) to its attack rolls."
		}
	]
};
CreatureList["tiny servant"] = { // Stats for the Tiny Servant spell (contains contributions by SoilentBrad)
	name : "Tiny Servant",
	source : ["X", 169],
	size : 5,
	type : "Construct",
	subtype : "",
	alignment : "Unaligned",
	ac : 15,
	hp : 10,
	hd : [4, 4],
	speed : "30 ft, climb 30 ft",
	scores : [4, 16, 10, 2, 10, 1],
	saves : ["", "", "", "", "", ""],
	damage_immunities : "poison, psychic",
	condition_immunities : "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
	senses : "Blindsight 60 ft (blind beyond this radius)",
	passivePerception : 10,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Slam",
		ability : 2,
		damage : [1, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : ""
	}]
};
// WORK IN PROGRESS, NOT FINISHED, NOT TESTED!

var iFileName = "pub_20180529_MToF.js";
RequiredSheetVersion(12.999);
// This file adds all the player-material from Mordenkainen's Tome of Foes to MPMB's Character Record Sheet

// Define the source
SourceList.MToF={
	name : "Mordenkainen's Tome of Foes",
	abbreviation : "MToF",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/mordenkainens-tome-foes",
	date : "2018/05/29"
};

// Tiefling subraces
RaceList["baalzebul tiefling"] = {
	regExpSearch : /^(?=.*baalzebul)(?=.*tiefling|planetouched).*$/i,
	name : "Baalzebul tiefling",
	sortname : "Tiefling, Baalzebul",
	source : [["MToF", 21], ["UA:FO", 1]],
	plural : "Baalzebul tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Baalzebul Tiefling: +1 Intelligence, +2 Charisma;",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Baalzebul Tiefling (+1 Intelligence, +2 Charisma)\n\nLegacy of Maladomini:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Ray of Sickness spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Crown of Madness spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Maladomini (1)",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		atwill : true
	},
	features : {
		"ray of sickness" : {
			name : "Ray of Sickness",
			minlevel : 3,
			usages : 1,
			additional : "3d8",
			recovery : "long rest",
			tooltip : " (Legacy of Maladomini)",
			action : ["action", " (3d8)"],
			spellcastingBonus : {
				name : "Legacy of Maladomini (3)",
				spells : ["ray of sickness"],
				selection : ["ray of sickness"],
				oncelr : true
			}
		},
		"crown of madness" : {
			name : "Crown of Madness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Maladomini)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Maladomini (5)",
				spells : ["crown of madness"],
				selection : ["crown of madness"],
				oncelr : true
			}
		}
	}
};
RaceList["dispater tiefling-mtof"] = {
	regExpSearch : /^(?=.*dispater)(?=.*tiefling|planetouched).*$/i,
	name : tDoc.info.SheetVersion < 13 ? "Dispater tiefling " : "Dispater tiefling",
	sortname : "Tiefling, Dispater",
	source : ["MToF", 21],
	plural : "Dispater tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Dispater Tiefling: +1 Dexterity, +2 Charisma;",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Dispater Tiefling (+1 Dexterity, +2 Charisma)\n\nLegacy of Dis:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Disguise Self spell once per long rest.\n   At 5th level, I can also cast the Detect Thoughts spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Dis (level 1)",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		atwill : true
	},
	features : {
		"disguise self" : {
			name : "Disguise Self",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Dis)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Dis (level 3)",
				spells : ["disguise self"],
				selection : ["disguise self"],
				oncelr : true
			}
		},
		"detect thoughts" : {
			name : "Detect Thoughts",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Dis)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Dis (level 5)",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				oncelr : true
			}
		}
	}
};
RaceList["fierna tiefling"] = {
	regExpSearch : /^(?=.*fierna)(?=.*tiefling|planetouched).*$/i,
	name : "Fierna tiefling",
	sortname : "Tiefling, Fierna",
	source : [["MToF", 21], ["UA:FO", 1]],
	plural : "Fierna tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Fierna Tiefling: +1 Wisdom, +2 Charisma;",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Fierna Tiefling (+1 Wisdom, +2 Charisma)\n\nLegacy of Phlegethos:\n   I know the Friends cantrip.\n   At 3rd level, I can cast the Charm Person spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Suggestion spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Phlegethos (1)",
		spells : ["friends"],
		selection : ["friends"],
		atwill : true
	},
	features : {
		"charm person" : {
			name : "Charm Person",
			minlevel : 3,
			usages : 1,
			additional : "2 targets",
			recovery : "long rest",
			tooltip : " (Legacy of Phlegethos)",
			action : ["action", " (2 targets)"],
			spellcastingBonus : {
				name : "Legacy of Phlegethos (3)",
				spells : ["charm person"],
				selection : ["charm person"],
				oncelr : true
			}
		},
		"suggestion" : {
			name : "Suggestion",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Phlegethos)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Phlegethos (5)",
				spells : ["suggestion"],
				selection : ["suggestion"],
				oncelr : true
			}
		}
	}
};
RaceList["glasya tiefling"] = {
	regExpSearch : /^(?=.*glasya)(?=.*tiefling|planetouched).*$/i,
	name : "Glasya tiefling",
	sortname : "Tiefling, Glasya",
	source : [["MToF", 22], ["UA:FO", 2]],
	plural : "Glasya tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Glasya Tiefling: +1 Dexterity, +2 Charisma;",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Glasya Tiefling (+1 Dexterity, +2 Charisma)\n\nLegacy of Malbolge:\n   I know the Minor Illusion cantrip.\n   At 3rd level, I can cast the Disguise Self spell once per long rest.\n   At 5th level, I can also cast the Invisibility spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Malbolge (1)",
		spells : ["minor illusion"],
		selection : ["minor illusion"],
		atwill : true
	},
	features : {
		"disguise self" : {
			name : "Disguise Self",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Malbolge)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Malbolge (3)",
				spells : ["disguise self"],
				selection : ["disguise self"],
				oncelr : true
			}
		},
		"invisibility" : {
			name : "Invisibility",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Malbolge)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Malbolge (5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true
			}
		}
	}
};
RaceList["levistus tiefling"] = {
	regExpSearch : /^(?=.*levistus)(?=.*tiefling|planetouched).*$/i,
	name : "Levistus tiefling",
	sortname : "Tiefling, Levistus",
	source : [["MToF", 22], ["UA:FO", 2]],
	plural : "Levistus tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Levistus Tiefling: +1 Constitution, +2 Charisma;",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Levistus Tiefling (+1 Constitution, +2 Charisma)\n\nLegacy of Stygia:\n   I know the Ray of Frost cantrip.\n   At 3rd level, I can cast the Armor of Agathys spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Darkness spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Stygia (1)",
		spells : ["ray of frost"],
		selection : ["ray of frost"],
		atwill : true
	},
	features : {
		"armor of agathys" : {
			name : "Armor of Agathys",
			minlevel : 3,
			usages : 1,
			additional : "2nd-level",
			recovery : "long rest",
			tooltip : " (Legacy of Stygia)",
			action : ["action", " (2nd-level)"],
			spellcastingBonus : {
				name : "Legacy of Stygia (3)",
				spells : ["armor of agathys"],
				selection : ["armor of agathys"],
				oncelr : true
			}
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Stygia)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Stygia (5)",
				spells : ["darkness"],
				selection : ["darkness"],
				oncelr : true
			}
		}
	}
};
RaceList["mammon tiefling"] = {
	regExpSearch : /^(?=.*mammon)(?=.*tiefling|planetouched).*$/i,
	name : "Mammon tiefling",
	sortname : "Tiefling, Mammon",
	source : [["MToF", 22], ["UA:FO", 2]],
	plural : "Mammon tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Mammon Tiefling: +1 Intelligence, +2 Charisma;",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Mammon Tiefling (+1 Intelligence, +2 Charisma)\nLegacy of Minauros:\n   I know the Mage Hand cantrip.\n   At 3rd level, I can cast the Tenster's Floating Disk spell once per short rest.\n   At 5th level, I can also cast the Arcane Lock spell wihtout a material component once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Minauros (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"tenser's floating disk" : {
			name : "Tenser's Floating Disk",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Minauros)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Minauros (3)",
				spells : ["tenser's floating disk"],
				selection : ["tenser's floating disk"],
				oncesr : true
			}
		},
		"arcane lock" : {
			name : "Arcane Lock",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Minauros)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Minauros (5)",
				spells : ["arcane lock"],
				selection : ["arcane lock"],
				oncelr : true
			}
		}
	}
};
RaceList["mephistopheles tiefling-mtof"] = {
	regExpSearch : /^(?=.*mephistopheles)(?=.*tiefling|planetouched).*$/i,
	name : tDoc.info.SheetVersion < 13 ? "Mephistopheles tiefling " : "Mephistopheles tiefling",
	sortname : "Tiefling, Mephistopheles",
	source : ["MToF", 23],
	plural : "Mephistopheles tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Mephistopheles Tiefling: +1 Intelligence, +2 Charisma;",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Mephistopheles Tiefling (+1 Intelligence, +2 Charisma)\n\nLegacy of Cania:\n   I know the Mage Hand cantrip.\n   At 3rd level, I can cast the Burning Hands spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Flame Blade spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Cania (level 1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"burning hands" : {
			name : "Burning Hands",
			additional : "4d6",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Cania)",
			action : ["action", " (4d6)"],
			spellcastingBonus : {
				name : "Legacy of Cania (level 3)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				oncelr : true
			}
		},
		"flame blade" : {
			name : "Flame Blade",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Cania)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Cania (level 5)",
				spells : ["flame blade"],
				selection : ["flame blade"],
				oncelr : true
			}
		}
	}
};
RaceList["zariel tiefling"] = {
	regExpSearch : /^(?=.*zariel)(?=.*tiefling|planetouched).*$/i,
	name : "Zariel tiefling",
	sortname : "Tiefling, Zariel",
	source : [["MToF", 23], ["UA:FO", 2]],
	plural : "Zariel tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Zariel Tiefling: +1 Strength, +2 Charisma;",
	scores : [1, 0, 0, 0, 0, 2],
	trait : "Zariel Tiefling (+1 Strength, +2 Charisma)\n\nLegacy of Avernus:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Searing Smite spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Branding Smite spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Avernus (1)",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		atwill : true
	},
	features : {
		"searing smite" : {
			name : "Searing Smite",
			additional : "2d6",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Avernus)",
			action : ["bonus action", " (2d6)"],
			spellcastingBonus : {
				name : "Legacy of Avernus (3)",
				spells : ["searing smite"],
				selection : ["searing smite"],
				oncelr : true
			}
		},
		"branding smite" : {
			name : "Branding Smite",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Avernus)",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Legacy of Avernus (5)",
				spells : ["branding smite"],
				selection : ["branding smite"],
				oncelr : true
			}
		}
	}
};

// Elf subraces
RaceList["eladrin-mtof"] = {
	regExpSearch : /^(?!.*half)((?=.*eladrin)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(feys?|feywild)\b))).*$/i,
	name : tDoc.info.SheetVersion < 13 ? "Eladrin  " : "Eladrin",
	sortname : "Elf, Fey (Eladrin)",
	source : ["MToF", 61],
	plural : "Eladrin",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d12\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d12 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Eladrin: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	abilitySave : 6,
	trait : "Eladrin (+2 Dexterity, +1 Intelligence or Charisma)" + desc([
		"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest only 4 hours).",
		"Fey Step: Once per short rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see. Once I reach 3rd level, this gains an additional effect, based on the current season I'm aligned with. See the third page notes section for the effects.",
		"Shifting Seasons: After I finish a long rest, I can align myself with a season of my choice."
	]),
	features : {
		"fey step" : {
			name : "Fey Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""]
		}
	},
	notes : "\u25C6 Eladrin Season Features (MToF 62) [save DC 8 + Cha mod + prof bonus]"
	+ "\n  \u2022 Autumn (Eladrin Season, MToF 62)" + desc([
		" After using Fey Step, up to 2 creatures I can see within 10 ft of me must make a Wis save",
		" If failed, a target is charmed by me for 1 minute, or until I or my allies damage it"
	]) + "\n  \u2022 Winter (Eladrin Season, MToF 62)" + desc([
		" When I use Fey Step, one target in 5 ft of where I teleported from must make a Wis save",
		" If failed, it is frightened of me until the end of my next turn"
	]) + "\n  \u2022 Spring (Eladrin Season, MToF 62)" + desc([
		" When I use Fey Step, I can instead teleport one willing creature I touch within 5 ft of me",
		" It teleports to an unoccupied space of my choice that I can see within 30 ft of me"
	]) + "\n  \u2022 Summer (Eladrin Season, MToF 62)" + desc([
		" After using Fey Step, each creature of my choice within 5 ft of me takes fire damage",
		" This fire damage is equal to my Charisma modifier (minimum 1)"
	]),
	eval : "AddString('Extra.Notes', RaceList['eladrin-mtof'].notes, true); if(sheetVersion < 13) { Value('Extra.Layers Remember', 'notes,' + What('Extra.Layers Remember').split(',')[1]); LayerVisibilityOptions(false); } else { show3rdPageNotes(); };",
	removeeval : "RemoveString('Extra.Notes', RaceList['eladrin-mtof'].notes, true);"
};
RaceList["sea elf"] = {
	regExpSearch : /^(?!.*half)((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(seas?|oceans?|water)\b)).*$/i,
	name : "Sea elf",
	sortname : "Elf, Sea",
	source : [["MToF", 62], ["UA:ES", 1]],
	plural : "Sea elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	weaponprofs : [false, false, ["spear", "trident", "light crossbow", "net"]],
	languageProfs : ["Common", "Elvish", "Aquan"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 115 lb (90 + 2d8 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to almost 1,8 metres tall (140 + 5d8 cm)",
	weightMetric : " weigh around 52 kg (40 + 5d8 \xD7 2d4 / 10 kg)",
	improvements : "Sea Elf: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Sea Elf (+2 Dexterity, +1 Constitution)" + desc([
		"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.",
		"Child of the Sea. I have 30 ft swimming speed and can breathe air and water.",
		"Friend of the Sea: Through sounds and gestures, I can communicate simple ideas with any beast that has an inborn swimming speed."
	])
};
RaceList["shadar-kai-mtof"] = {
	regExpSearch : /^(?!.*half)((?=.*shadar-kai)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(shadows?|shadowfell)\b))).*$/i,
	name : tDoc.info.SheetVersion < 13 ? "Shadar-kai " : "Shadar-kai",
	sortname : "Elf, Shadow (Shadar-kai)",
	source : ["MToF", 62],
	plural : "Shadar-kai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	dmgres : ["Necrotic"],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'8\" + 2d8\")",
	weight : " weigh around 115 lb (90 + 2d8 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 52 kg (40 + 5d8 \xD7 2d4 / 10 kg)",
	improvements : "Shadar-kai: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Shadar-kai (+2 Dexterity, +1 Constitution)" + desc([
		"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest only 4 hours).",
		"Blessing of the Raven Queen: Once per long rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see.",
		"Once I reach 3rd level, after I use the Blessing of the Raven Queen, I appear translucent and have resistance to all damage until the start of my next turn."
	]),
	features : {
		"blessing of the raven queen" : {
			name : "Blessing of the Raven Queen",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : "",
			action : ["bonus action", ""]
		}
	}
};

// Gith and its two subraces
RaceList["githyanki-mtof"] = {
	regExpSearch : /githyanki/i,
	name : tDoc.info.SheetVersion < 13 ? "Githyanki " : "Githyanki",
	source : ["MToF", 96],
	plural : "Githyanki",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gith", 1],
	armor : [true, true, false, false],
	weaponprofs : [false, false, ["shortsword", "longsword", "greatsword"]],
	skillstxt : "Choose any one skill or tool",
	age : " reach adulthood in their late teens and live for about a century",
	height : " are more leaner and taller than humans, most are a slender 6 feet tall (5'0\" + 2d12\")",
	weight : " weigh around 135 lb (100 + 2d12 \xD7 2d4 lb)",
	heightMetric : " are more leaner and taller than humans, most are a slender 1,8 metres tall (150 + 5d12 cm)",
	weightMetric : " weigh around 61 kg (45 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Githyanki: +2 Strength, +1 Intelligence;",
	scores : [2, 0, 0, 1, 0, 0],
	trait : "Githyanki (+2 Strength, +1 Intelligence)\n" + (typePF ? "\n" : "") + "Githyanki Psionics:" + desc([
		"I know the Mage Hand cantrip, but the hand is invisible.",
		"At 3rd level, I can cast the Jump spell once per long rest.",
		"At 5th level, I can also cast the Misty Step spell once per long rest.",
		"Intelligence is my spellcasting ability for these spells.",
		"I don't require components to cast these spells."
	]),
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Githyanki Psionics (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"jump" : {
			name : "Jump",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githyanki Psionics)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Githyanki Psionics (3)",
				spells : ["jump"],
				selection : ["jump"],
				oncelr : true
			}
		},
		"misty step" : {
			name : "Misty Step",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githyanki Psionics)",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Githyanki Psionics (5)",
				spells : ["misty step"],
				selection : ["misty step"],
				oncelr : true
			}
		}
	}
};
AddRacialVariant("githyanki-mtof", "tool proficiency", {
	regExpSearch : /tool proficiency/i,
	toolProfs : [["Any tool", 1]]
});
AddRacialVariant("githyanki-mtof", "skill proficiency", {
	regExpSearch : /skill proficiency/i,
	skillstxt : "Choose any one skill"
});
RaceList["githzerai-mtof"] = {
	regExpSearch : /githzerai/i,
	name : tDoc.info.SheetVersion < 13 ? "Githzerai " : "Githzerai",
	source : ["MToF", 96],
	plural : "Githzerai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gith"],
	age : " reach adulthood in their late teens and live for about a century",
	height : " are more leaner and taller than humans, most are a slender 6 feet tall (4'11\" + 2d12\")",
	weight : " weigh around 115 lb (90 + 2d12 \xD7 1d4 lb)",
	heightMetric : " are more leaner and taller than humans, most are a slender 1,8 metres tall (150 + 5d12 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Githzerai: +1 Intelligence, +2 Wisdom;",
	scores : [0, 0, 0, 1, 2, 0],
	trait : "Githzerai (+1 Intelligence, +2 Wisdom)\n" + (typePF ? "\n" : "") + "Githzerai Psionics:" + desc([
		"I know the Mage Hand cantrip, but the hand is invisible.",
		"At 3rd level, I can cast the Shield spell once per long rest.",
		"At 5th level, I can also cast the Detect Thoughts spell once per long rest.",
		"Wisdom is my spellcasting ability for these spells.",
		"I don't require components to cast these spells."
	]),
	savetxt : { adv_vs : ["charmed", "frightened"] },
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Githzerai Psionics (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"shield" : {
			name : "Shield",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githzerai Psionics)",
			action : ["reaction", ""],
			spellcastingBonus : {
				name : "Githzerai Psionics (3)",
				spells : ["shield"],
				selection : ["shield"],
				oncelr : true
			}
		},
		"detect thoughts" : {
			name : "Detect Thoughts",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githzerai Psionics)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Githzerai Psionics (5)",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				oncelr : true
			}
		}
	}
};

// Reprints
RaceList["gray dwarf"] = { //reprint from Sword Coast Adventure Guide
	regExpSearch : /^((?=.*\bduergars?\b)|((?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\b(grey|gray|underdark)\b))).*$/i,
	name : "Duergar",
	sortname : "Dwarf, Gray (Duergar)",
	source : [["S", 104], ["MToF", 81]],
	plural : "Duergar",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish", "Undercommon"],
	vision : [["Darkvision", 120], ["Sunlight Sensitivity", 0]],
	savetxt : { adv_vs : ["charmed", "illusions", "paralyzed", "poison"] },
	dmgres : ["Poison"],
	weaponprofs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (3'8\" + 2d4\")",
	weight : " weigh around 150 lb (115 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (110 + 5d4 cm)",
	weightMetric : " weigh around 70 kg (55 + 5d4 \xD7 4d6 / 10 kg)",
	improvements : "Duergar: +2 Constitution, +1 Strength;",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Duergar (+2 Constitution, +1 Strength)\nStonecunning: Whenever I make an Int (History) check related to the origin of stonework, I am considered proficient in the skill and add double my proficiency bonus to the check.\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nDuergar Magic: 3rd: Enlarge/Reduce to enlarge; 5th: Invisibility. If not in direct sunlight," + (!typePF ? "\n" : " ") + "I can cast both spells on myself once per long rest without material components, using Int.",
	spellcastingAbility : 4,
	features : {
		"enlarge" : {
			name : "Enlarge (self only)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Duergar Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Duergar Magic (level 3)",
				spells : ["enlarge/reduce"],
				selection : ["enlarge/reduce"],
				oncelr : true
			}
		},
		"invisibility" : {
			name : "Invisibility (self only)",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Duergar Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Duergar Magic (level 5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true
			}
		}
	}
};
RaceList["deep gnome"] = { //reprint from Elemental Evil Player's Companion and Sword Coast Adventure Guide
	regExpSearch : /^((?=.*svirfneblin)|((?=.*\bgnomes?\b)(?=.*\b(underdarks?|deep|depths?)\b))).*$/i,
	name : "Svirfneblin",
	sortname : "Gnome, Deep (Svirfneblin)",
	source : [["E", 7], ["S", 115], ["MToF", 113]],
	plural : "Svirfneblin",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Gnomish", "Undercommon"],
	vision : [["Darkvision", 120]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " are considered full-grown adults when they reach 25 and live 200 to 250 years",
	height : " stand between 3 and 3 1/2 feet tall (2'9\" + 2d4\")",
	weight : " weigh around 90 lb (80 + 2d4 \xD7 1d4 lb)",
	heightMetric : " stand between 90 and 105 cm tall (85 + 5d4 cm)",
	weightMetric : " weigh around 50 kg (35 + 5d4 \xD7 4d4 / 10 kg)",
	improvements : "Svirfneblin: +1 Dexterity, +2 Intelligence;",
	scores : [0, 1, 0, 2, 0, 0],
	trait : "Svirfneblin (+1 Dexterity, +2 Intelligence)\n\nStone Camouflage:\n   I have advantage on Dexterity (stealth) checks to hide in rocky terrain."
};
