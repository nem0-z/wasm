//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;
use hello_world::*;

// wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn sort_one_element() {
    assert_eq!(validate_sort(vec![1]), true);
}

#[wasm_bindgen_test]
fn sort_empty_array() {
    assert_ne!(sort_random_array(0), -1.)
}

#[wasm_bindgen_test]
fn sort_5k() {
    let mut arr = vec![];
    for i in (1..5000).rev() {
        arr.push(i);
    }

    bubble_sort(&mut arr);

    assert_eq!(validate_sort(arr), true)
}