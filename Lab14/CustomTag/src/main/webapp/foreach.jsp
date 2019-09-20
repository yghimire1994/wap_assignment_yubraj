
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored="false" %>
<html>
<head>
    <title>Beers</title>
</head>
<body>
    <c:forEach var="beer" items="${beers}">
        <br>try: ${beer}
    </c:forEach>
</body>
</html>
