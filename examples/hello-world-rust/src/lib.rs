mod utils;

use wasm_bindgen::prelude::*;
use rand::Rng;
// use std::time::Instant;
use wasm_timer::Instant;


// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Sorting your array...");
}

#[wasm_bindgen]
pub fn sort_random_array(limit: i32) -> f64 {
    if limit == 0 || limit == 1 {
        return 0.
    }

    let mut rand = rand::thread_rng();
    let mut arr = Vec::<i32>::new();
    for _ in 1..limit {
        arr.push(rand.gen::<i32>());
    }

    let now = Instant::now(); 
    bubble_sort(&mut arr);
    let elapsed = now.elapsed().as_secs_f64();

    if validate_sort(arr) {
        return elapsed
    }

    -1.
}

pub fn validate_sort(arr: Vec::<i32>) -> bool {
    let arr_size_safe = arr.len() - 1;
    if arr_size_safe == 0 {
        return true
    }

    for i in 0..arr_size_safe {
        if arr[i] > arr[i+1] {
            return false
        }
    }

    true
}

pub fn bubble_sort(arr: &mut Vec::<i32>) {
    let arr_size = arr.len();
    let arr_size_safe = arr_size - 1;
    if arr_size_safe == 0 {
        return
    }
    
    for _ in 0..arr_size {
        for j in 0..arr_size_safe {
            if arr[j] > arr[j+1] {
                //Unsafe code
                arr.swap(j, j+1);
            }
        }
    }
}
