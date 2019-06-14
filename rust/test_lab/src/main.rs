use rand::{thread_rng, Rng};
use std::cmp::Ordering;
use std::io;
use std::io::Write;
use std::process;

//improve: systeme de record (persistence des donées en écrivant dans un fichier)
//         système de niveaux de difficulté, la range du nombre a deviner
//opti:    variable score, functions, immutabilité (tries) / references (secret_number, et params user.0, ..)

fn max_tries(tries: i32, secret_number: u32) -> i32 {
    let mut copy = tries;
    copy -= 1;
        if copy <= 0 {
            println!("Maximum tries gone, you failed !
            secret number was: {}\n", secret_number);
            process::exit(0x0100);
        }
        return copy;
}

fn get_input(tries: i32, secret_number: u32) -> (i32, u32) {
    let mut copy = tries;
    let mut input = String::new();
    let input_to_int: u32;

    loop {
        print!("{}: {} chance yet\n",
            if copy > 1 { "tries"} else {"try"},
            copy);

        io::stdout().flush().unwrap();
        input.clear();
        io::stdin()
            .read_line(&mut input)
            .expect("Error for reading line.");

        input_to_int = match input.trim().parse::<u32>() {
            Ok(t) => t,
            Err(_) => {
                println!("Not a valid number !\n");
                copy = max_tries(copy, secret_number);
                continue;
            },
        };
        break;
    }
    return (copy, input_to_int);
}

fn main() {
    let _nb = 42; //just a memo: le _ mute les warning de non utilisation
    let tries = 7;
    let input_to_int: u32 = 0;
    let secret_number: u32 = thread_rng().gen_range(0, 101);
    let mut user = (tries, input_to_int);

    println!("Entrez un nombre entre 0 et 100 :");

    loop {
        user = get_input(user.0, secret_number);

        // Pattern matching avec cmp
        match user.1.cmp(&secret_number) {
            Ordering::Less => println!("Number is bigger!"),
            Ordering::Greater => println!("Number is smaller!"),
            Ordering::Equal => {
                println!("You win!\nYour score: {}", 11 - user.0);
                break;
            }
        }
        user.0 = max_tries(user.0, secret_number);
    }
}