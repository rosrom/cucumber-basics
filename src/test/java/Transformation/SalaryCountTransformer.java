package Transformation;

import cucumber.api.Transformer;

/**
 * Created by rosroman on 21/03/17.
 */
public class SalaryCountTransformer extends Transformer<Integer>{

    //Takes input as a String, out as a integer
    @Override
    public Integer transform(String salary)
    {
        //return Integer.parseInt(salary);
        return salary.length();
    }


}
