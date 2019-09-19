<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<header>
</header>
<body>
    <div style="border: 1px solid blue">
        <form action="quiz" method="post">
            <h1>The Number Quiz</h1>
            <p>Your current score is 0</p>
            <p>Guess the next number in the sequence.</p>
            <p>3,1,4,1,5</p>
            <p>Your answer:<input type="number" name="answer"></p>
            <p><input type="submit" value="Submit"></p>
    </form>
    </div>
</body>
</html>