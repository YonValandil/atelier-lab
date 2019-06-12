use std::env;
//use std::io::Write; //See just for fun below

//struct et implementation pour Division
#[derive(Copy, Clone)] //possible car tous les composants de Division implemente copy (car i32)
struct Division {
	numerateur_t: i32,
	denominateur_t: i32,
}

impl Division {
	fn new(x: i32, y: i32) -> Division {
			Division {
					numerateur_t: x,
					denominateur_t: y,
			}
	}

	fn calcul(&self) -> i32 {
		match self.denominateur_t {
			0 => panic!("Division par 0 impossible"),
		  1 => 1,
			_ => self.numerateur_t / self.denominateur_t,
		}
	}
}

//trait et implementation pour Division
trait HasSymbol {
    fn symbol(&self) -> String;
}

impl HasSymbol for Division {
    fn symbol(&self) -> String {
        "/".to_string()
    }
}

fn main() {
	let result;

	//Just for fun: bypass l'obligation de checker la valeur
	//let numerateur = env::args().nth(1).unwrap().parse::<i32>().unwrap();

	let numerateur = match env::args().nth(1) {
		Some(arg) => arg,
		None => panic!("Arg(s) obligatoire manquant: le numérateur")
	};

	let numerateur = match numerateur.parse::<i32>() {
		Ok(numerateur) => numerateur,
		Err(_) => panic!("Conversion numerateur to int failed")
	};

	//let division = Division{numerateur_t: numerateur, denominateur_t: 2}; //sans le ""constructeur""
	let division = Division::new(numerateur, 2);

	//println!("Symbole : {}", division.symbol()); //utilisation du trait directement
	display_symbol(&division);

	println!("division = {} {}",
		division.numerateur_t,
		division.denominateur_t);

		result = division.calcul();
		println!("result: {}", result);
}

fn display_symbol(division: &Division) { //le & permet d'utiliser l'emprunt=reference (et non la copie)
    println!("Symbole: {}", division.symbol());
}