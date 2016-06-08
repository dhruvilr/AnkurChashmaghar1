<!doctype html>

<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
<meta charset="utf-8">
<title>Form</title>
<link rel="stylesheet" type="text/css" href="static/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="static/css/style.css">
<link rel="stylesheet" type="text/css" href="static/css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="static/css/jquery.dataTables.css">
<link rel="stylesheet" type="text/css" href="http://cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css">

<script type="text/javascript" src="static/js/angular.js" ></script>
<script src="static/angular/app.js" type="text/javascript" ></script>
<script type="text/javascript" src="static/angular/controller/myController.js">
</script>
<script type="text/javascript" src="static/angular/service/myService.js">
</script>



<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>

<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="static/js/respond.min.js"></script>
  <script src="http://cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
<script type="text/javascript">
 $(document).ready(function(){
    $('#myTable').DataTable();
});
</script>
</head>

<body>
<script src="static/css/js/jquery-2.1.1.js"></script>
<script src="static/css/js/bootstrap.js"></script>

<div class="container-fluid">
<div class="row">
	<img src="static/images/logo.png" class="img-responsive" alt="Responsive image">
</div>
</div>

<div class="form-m">
<div class="container form-box">
<div class="hd hd-first">
	<h3 class="info">Personal Detail :</h3>
</div>
	 <form:form class="form-horizontal" modelAttribute="user" action="addUserDetails">
	 		<input type="hidden" name="userId" value="${user.userId}">
		  <div class="form-group">
			<label for="inputEmail3" class="col-sm-2 control-label">Name</label>
			<div class="col-sm-10">
			  <input type="text" class="form-control" id="inputEmail3" name="userName" value="${user.userName}">
			</div>
		  </div>
		  <div class="form-group">
			<label for="inputPassword3" class="col-sm-2 control-label">Ph No.(R)</label>
			<div class="col-sm-10">
			  <input type="text" class="form-control" id="inputPassword3" name="residentNo" value="${user.residentNo}">
			</div>
		  </div>
		   <div class="form-group">
			<label for="inputEmail3" class="col-sm-2 control-label">Ph No.(M)</label>
			<div class="col-sm-10">
			  <input type="text" class="form-control" id="inputEmail3" name="mobileNo" value="${user.mobileNo}">
			</div>
		  </div>
			<div class="form-group">
			<label for="inputEmail3" class="col-sm-2 control-label">Address</label>
			<div class="col-sm-10">
			  <textarea class="form-control" rows="3" name="address">${user.address}</textarea>
			</div>
		  </div>
			<div class="form-group">
			<label for="inputEmail3" class="col-sm-2 control-label">Date</label>
			<div class="col-sm-10">
			  <input type="text" class="form-control" id="inputEmail3" name="date" value="${user.date}">
			</div>
		  </div>
  
  
 <div class="hd">
<h3 class="info">Specs-Description Table :</h3>
</div>
<div class="table-responsive">     
  <table class="table table-bordered">
    <thead>
      <tr>
		<th></th>
        <th colspan="4">RE</th>
        <th colspan="4">LE</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tr-color">
	    <td></td>
        <td>Sph</td>
        <td>Cyl</td>
        <td>Axis</td>
		<td>VA</td>
		<td>Sph</td>
        <td>Cyl</td>
        <td>Axis</td>
		<td>VA</td>
      </tr>
      <tr>
	    <td>D</td>
        <td><input type="text" class="td-input" name="reSph1" value="${user.reSph1}"></td>
         <td><input type="text" class="td-input" name="reCyl1" value="${user.reCyl1}"></td>
         <td><input type="text" class="td-input" name="reAxis1" value="${user.reAxis1}"></td>
		 <td><input type="text" class="td-input" name="reVA1" value="${user.reVA1}"></td>
		 <td><input type="text" class="td-input" name="leSph1" value="${user.leSph1}"></td>
         <td><input type="text" class="td-input" name="leCyl1" value="${user.leCyl1}"></td>
         <td><input type="text" class="td-input" name="leAxis1" value="${user.leAxis1}"></td>
		 <td><input type="text" class="td-input" name="leVA1" value="${user.leVA1}"></td>
      </tr>
      <tr>
		 <td>N</td>
        <td><input type="text" class="td-input" name="reSph2" value="${user.reSph2}"></td>
         <td><input type="text" class="td-input" name="reCyl2" value="${user.reCyl2}"></td>
         <td><input type="text" class="td-input" name="reAxis2" value="${user.reAxis2}"></td>
		 <td><input type="text" class="td-input" name="reVA2" value="${user.reVA2}"></td>
		 <td><input type="text" class="td-input" name="leSph2" value="${user.leSph2}"></td>
         <td><input type="text" class="td-input" name="leCyl2" value="${user.leCyl2}"></td>
         <td><input type="text" class="td-input" name="leAxis2" value="${user.leAxis2}"></td>
		 <td><input type="text" class="td-input" name="leVA2" value="${user.leVA2}"></td>
      </tr>
	   <tr>
	     <td>I</td>
        <td><input type="text" class="td-input" name="reSph3" value="${user.reSph3}"></td>
         <td><input type="text" class="td-input" name="reCyl3" value="${user.reCyl3}"></td>
         <td><input type="text" class="td-input" name="reAxis3" value="${user.reAxis3}"></td>
		 <td><input type="text" class="td-input" name="reVA3" value="${user.reVA3}"></td>
		 <td><input type="text" class="td-input" name="leSph3" value="${user.leSph3}"></td>
         <td><input type="text" class="td-input" name="leCyl3" value="${user.leCyl3}"></td>
         <td><input type="text" class="td-input" name="leAxis3" value="${user.leAxis3}"></td>
		 <td><input type="text" class="td-input" name="leVA3" value="${user.leVA3}"></td>
      </tr>
    </tbody>
  </table>
 </div>
 <div class="hd">
<h3 class="info">Specs Detail :</h3>
</div>  
  		<div class="form-group">
			<label for="inputEmail3" class="col-sm-2 control-label">Frame</label>
			<div class="col-sm-10">
			  <input type="text" class="form-control" id="inputEmail3" name="frame" value="${user.frame}" >
			</div>
		  </div> 
		  <div class="form-group">
			<label for="inputEmail3" class="col-sm-2 control-label">Glass</label>
			<div class="col-sm-10">
			  <input type="text" class="form-control" id="inputEmail3" name="glass" value="${user.glass}">
			</div>
		  </div>
			<div class="form-group">
			<label for="inputEmail3" class="col-sm-2 control-label">Contact Lens</label>
			<div class="col-sm-10">
			  <input type="text" class="form-control" id="inputEmail3" name="contactLense" value="${user.contactLense}">
			</div>
		  </div>  
			 <div class="form-group">
			<label for="inputEmail3" class="col-sm-2 control-label">Remarks</label>
			<div class="col-sm-10">
			  <textarea class="form-control" rows="3" name="userRemarks" > ${user.userRemarks}</textarea>
			</div>
		  </div>
			<div class="form-group">
			<label for="inputEmail3" class="col-sm-2 control-label">Pending Amount</label>
			<div class="col-sm-10">
			  <input type="text" class="form-control" id="inputEmail3" name="pendingAmount" value="${user.pendingAmount}">
			</div>
		  </div>
		
		<input type="submit" class="sub-btn btn-rm" value="Submit">
			
		<!-- <button type="button" class="sub-btn btn-rm">Save</button>
		<button type="button" class="sub-btn">Reset</button> -->
			
					   
</form:form>
<div class="pull-left">
</div>
</div>


</div>
</body>
</html>
