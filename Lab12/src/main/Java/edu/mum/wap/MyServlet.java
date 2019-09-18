package edu.mum.wap;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.rmi.ServerException;
import java.util.Random;

@WebServlet("{/}")
public class MyServlet extends HttpServlet {

        int previousQuestIndex=0;

        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServerException, IOException{
            response.setContentType("text/html");
            PrintWriter out=response.getWriter();

            String answer=request.getParameter("answer");
            String result="";

            HttpSession s=request.getSession();
            HttpSession qIndex=request.getSession();
            Data q=new Data();

            int score=0;
            if (s.getAttribute("quiz")==null){
                s.setAttribute("quiz",q);
                Cookie ck=new Cookie("my_score","0");//creating cookie object
                response.addCookie(ck);

            }else{
                q= (Data) s.getAttribute("quiz");
            }
            s.setMaxInactiveInterval(60 * 60 *24);

            if (answer==null || answer=="") answer="0";

            if (q.answers[previousQuestIndex]==Integer.parseInt(answer)){
                score=getScore(request,response,true);
            }else{
                score=getScore(request,response,false);
            }

            int questionIndex=new Random().nextInt(q.questions.length);
            String question= q.questions[questionIndex];
            previousQuestIndex=questionIndex;

            result+="<!DOCTYPE html>\n" +
                    "<header>\n" +
                    "</header>\n" +
                    "<body>\n" +
                    "    <div style=\"border: 1px solid blue\">\n" +
                    "        <form method=\"post\">\n" +
                    "        <h1>The Number Quiz</h1>\n" +
                    "        <p>Your current score is " + score + "<label name=\"score\"></label></p>\n" +
                    "        <p>Guess the next number in the sequence.</p>\n" +
                    "        <p><label name=\"question\">" + question + "</label></p>\n" +
                    "            <p>Your answer:<input type=\"number\" name=\"answer\"></p>\n" +
                    "            <p><input type=\"submit\" value=\"Submit\"></p>\n" +
                    "        </form>\n" +
                    "    </div>\n" +
                    "</body>\n" +
                    "</html>\n";

            out.println(result);
        }

        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServerException, IOException{
            doPost(request,response);
        }

        public int getScore(HttpServletRequest request,HttpServletResponse response,boolean answer){
            int result=0;

            Cookie[] cookies=request.getCookies();

            if (cookies!=null){
                for (Cookie cookie: cookies){
                    if (cookie.getName().equals("my_score")){
                        int newVal=Integer.parseInt(cookie.getValue());
                        if (answer)
                            newVal=Integer.parseInt(cookie.getValue()) + 1;

                        cookie.setValue(String.valueOf(newVal));
                        response.addCookie(cookie);
                        return newVal;
                    }
                }
            }

            return result;
        }

        public String getQuestion(String[] arr){
            int questionIndex=new Random().nextInt(arr.length);
            return arr[questionIndex];
        }
    }
