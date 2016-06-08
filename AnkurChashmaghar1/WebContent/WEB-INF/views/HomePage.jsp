<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">



<title>Insert title here</title>

<link rel="stylesheet" type="text/css" href="static/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="static/css/style.css">
<link rel="stylesheet" type="text/css" href="static/css/font-awesome.css">

<link rel="stylesheet" type="text/css" media="screen"
	href="static/css/ui-lightness/jquery-ui-1.8.6.custom.css" />
<link rel="stylesheet" type="text/css" media="screen"
	href="static/css/ui.jqgrid.css" />

	
<script type="text/javascript" src="static/js/jquery.min.js"></script>
<script src="static/js/i18n/grid.locale-en.js" type="text/javascript"></script>
<script src="static/js/jquery.jqGrid.min.js" type="text/javascript"></script>
<script src="static/js/jquery-ui-core.min.js" type="text/javascript"></script>

<script src="static/js/respond.min.js"></script>

<script type="text/javascript">



	jQuery(document).ready(function() {
		
		
		jQuery("#list4").jqGrid({
			url : "getUserList",
			datatype : 'json',
			width : 700,
			height : 210,
			colNames : [ 'No', 'User Name','Mobile No','Action'],
			colModel : [ {
				name : 'no',
				index : 'no',
				width : 250,
				align : "center"
			}, {
				name : 'userName',
				index : 'userName',
				width : 350,
				align : "center"
			},{
				name : 'mobileNo',
				index : 'mobileNo',
				width : 250,
				align : "center"
			},{
				name : 'action',
				index : 'action',
				width : 400,
				align : "center"
			}],
			rowNum : 10,
			rowList : [ 10, 20, 30 ],
			viewrecords : true,
			pager : '#pglist4',
			multiselect : false,
			//loadonce : true,
			ignoreCase : true,
			imgpath : "themes/basic/images",
			caption : 'User List'
	});
	});
		
</script>
</head>
<body>
	
	<div class="container-fluid">
<div class="row">
	<img src="static/images/logo.png" class="img-responsive" alt="Responsive image">
</div>
</div>

<div class="container">
		<a href="newCustomer"><button type="button" class="newcust-btn">New Customer</button></a>
	<div class="form-box mb">
	

	<table width="93%" align="center" class="content-body">
		<tr align="center">
			<td colspan="4">
				<table id="list4" align="center"></table>
				<div id="pglist4"></div>
			</td>
		</tr>
	</table>
	
	</div>
</div>	
	
</body>
</html>