package edu.mum.cs;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentDateTime extends SimpleTagSupport {
    String color;
    String size;

    @Override
    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
//        System.out.println("Current Date: " + ft.format(dNow));
        if (color != null && size != null){
            out.write("<span style=\"color: "+color+"; font-size: "+size+";\">"+ft.format(dNow)+"</span>");
        } else {
            out.write(String.format("<span>%s</span>", ft.format(dNow)));
        }
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }


}
