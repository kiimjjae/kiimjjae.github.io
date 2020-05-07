/*
 * This program loops for a certain range of numbers, 
 * and outputs "Fizz" if it's a multiple of x, 
 * "Buzz" if it's a multiple of y, 
 * and "FizzBuzz" if multiple of both.
 */
public class FizzBuzz {

	public static void fizzBuzz(int max) {
		int x = 5;
		int y = 3;
		
		for (int i = 1; i < max; i++) {
			String output = "";
			if (i % x == 0) { output += "Fizz";}
			if (i % y == 0) { output += "Buzz";}
			if (output == "") {output += Integer.toString(i);}
			System.out.println(output);
		}
		
	}
	
	public static void main(String[] args) {
		fizzBuzz(100);
	}
}