use rand::{thread_rng, Rng};
use std::cmp::Ordering;
use std::io;
use std::io::Write;

//improve: systeme de record (persistence des donées en écrivant dans un fichier)
//         système de niveaux de difficulté, la range du nombre a deviner
//opti:    variable score, functions, immutabilité (tries)

fn max_tries(tries: i32, secret_number: u32) -> i32 {
    let mut copy = tries;
    copy -= 1;
        if copy <= 0 {
            println!("Maximum tries gone, you failed !
            secret number was: {}\n", secret_number);
        }
        return copy;
}

/*
fn get_number() -> i32 {
    //main loop here
}
*/

fn game() ->

fn main() {
    let _nb = 42; //le _ mute les warning de non utilisation
    let mut tries = 10;
    let secret_number: u32 = thread_rng().gen_range(0, 101);
    let mut input = String::new();

    println!("Entrez un nombre entre 0 et 100 :");

    loop {
        print!("{}: {} chance yet\n",
            if tries > 1 { "tries"} else {"try"},
            tries);
        io::stdout().flush().unwrap();

        input.clear();
        io::stdin()
            .read_line(&mut input)
            .expect("Error for reading line.");

        //converti en nombre l'input utilisateur, et check les erreurs
        //let input_to_int: u32 = input.trim().parse::<u32>().unwrap(); //pareil mais avec le turbofish operator
        let input_to_int: u32 = match input.trim().parse() {
            Ok(t) => t,
            Err(_) => {
                println!("Not a valid number !\n");
                tries = max_tries(tries, secret_number);
                continue;
            }
        };

        //pattern matching avec cmp
        match input_to_int.cmp(&secret_number) {
            Ordering::Less => println!("Number is bigger!"),
            Ordering::Greater => println!("Number is smaller!"),
            Ordering::Equal => {
                println!("You win!\nYour score: {}", 11 - tries);
                break;
            }
        }

        //check nombre d'essais max
        tries = max_tries(tries, secret_number);
    }
}
