<%--
  Created by IntelliJ IDEA.
  User: romulo
  Date: 4/18/19
  Time: 5:42 PM
  To change this template use File | Settings | File Templates.
--%>
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
