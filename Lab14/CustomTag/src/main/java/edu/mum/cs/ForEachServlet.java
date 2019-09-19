package edu.mum.cs;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@WebServlet(name = "ForEachServlet", urlPatterns = "/foreach")
public class ForEachServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");

        List<String> beers = Arrays.asList("Bud Light", "Coors Light", "Budweiser", "Miller Lite", "Corona Extra");
        request.setAttribute("beers", beers);
        request.getRequestDispatcher("foreach.jsp").forward(request,response);
    }
}
