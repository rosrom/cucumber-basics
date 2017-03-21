package Transformation;
import cucumber.api.Transformer;


/**
 * Created by rosroman on 21/03/17.
 */
public class EmailTransform extends Transformer<String> {

    @Override
    public String transform(String userName)
    {
        return userName.concat("@ea.com");
    }
}
