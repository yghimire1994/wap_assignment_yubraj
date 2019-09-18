package edu.mum.wap;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.rmi.ServerException;

@WebServlet({"/get"})
public class GetCookie extends HttpServlet {
     protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServerException, IOException {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            String result="";
            for(Cookie cookie : request.getCookies()){
                if (cookie.getName().equals("my_score")){
                    result+= Integer.parseInt(cookie.getValue());
                }
            }

            out.println(result);
        }
    }
