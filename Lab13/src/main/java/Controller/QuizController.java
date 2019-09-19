package Controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.Random;
import Model.QuestionAnswer;

@WebServlet("/quiz")
public class QuizController extends HttpServlet{
    int previousQuestIndex=0;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        response.setContentType("text/html");
        String answer=request.getParameter("answer");
        HttpSession s=request.getSession();
        QuestionAnswer q=new QuestionAnswer();

        int score=0;
        if (s.getAttribute("quizs")==null){
            s.setAttribute("quizs",q);
            Cookie ck=new Cookie("my_score","0");//creating cookie object
            response.addCookie(ck);

        }else{
            q= (QuestionAnswer)s.getAttribute("quizs");
        }
        //s.setMaxInactiveInterval(60 * 60 *24);

        if (answer==null || answer=="") answer="0";

        if (q.answers[previousQuestIndex]==Integer.parseInt(answer)){
            score=getScore(request,response,true);
        }else{
            score=getScore(request,response,false);
        }

        int questionIndex=new Random().nextInt(q.questions.length);
        String question= q.questions[questionIndex];
        previousQuestIndex=questionIndex;

        request.setAttribute("scores", score);
        request.setAttribute("questions", question);
        RequestDispatcher rd = request.getRequestDispatcher("indexRandom.jsp");
        rd.forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
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
}
