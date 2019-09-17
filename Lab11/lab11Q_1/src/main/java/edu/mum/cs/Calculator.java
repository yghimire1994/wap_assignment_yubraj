package edu.mum.cs;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Calculator extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();
        String num1 = req.getParameter("num1");
        String num2 = req.getParameter("num2");
        String num3 = req.getParameter("num3");
        String num4 = req.getParameter("num4");

        int a = num1.equals("")?0:Integer.parseInt(num1);
        int b = num2.equals("")?0:Integer.parseInt(num2);
        int c = num3.equals("")?0:Integer.parseInt(num3);
        int d = num4.equals("")?0:Integer.parseInt(num4);
        int sum = a + b;
        int mul = c * d;

        if((a!=0)&&(b!=0)&&(c!=0)&&(d!=0)){
            out.println("<p>"+a + "+" + b + "=" + sum+"</p>");
            out.println("<p>"+c + "*" + d + "=" + mul+"</p>");
        }

        else if ((a != 0) && (b != 0)) {
            out.println(a + "+" + b + "=" + sum);
        }
        else if ((c != 0) && (d != 0)) {
            out.println(c + "*" + d + "=" + mul);

        }


    }
        protected void doPost (HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        }
    }
