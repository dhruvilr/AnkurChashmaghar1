package com.ankurchashmaghar.controller;
import java.io.PrintWriter;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.ankurchashmaghar.model.User;
import com.ankurchashmaghar.service.UserService;


@Controller
public class HomeController {

	@Autowired
	UserService userService;
	PrintWriter out;
	public static final String CELL = "cell";
	public static final String ID = "id";
	public static final String TOTAL = "total";
    public static final String ROWS = "rows";
    public static final String RECORDS = "records";
    public static final String PAGE = "page";
    public static final String INPUT = "input";
    public static final String ERROR = "error";
    
	
	@RequestMapping("/")
	public String homePage(){
		
		return "redirect:homePage";
	}
	
	@RequestMapping("/homePage")
	public String homePage1(){
		
		return "HomePage";
	}
	
	
	@RequestMapping("/newCustomer")
	public String newCustomer(@ModelAttribute User user){
		
		return "Form";
	}
	
	
	@RequestMapping(value="/addUserDetails")
	public String addUserDetails(@ModelAttribute User user){
		
		System.out.println(user.getUserName());
		userService.saveUser(user);
		return "redirect:homePage";
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping(value = "/getUserList")
	public void getItemList(HttpServletRequest request,
			HttpServletResponse response, HttpSession session) {
		try {
			String rows = request.getParameter("rows");
			String pageno = request.getParameter("page");
			String sidx = request.getParameter("sidx");
			String sortorder = request.getParameter("sord");
			float totalcount = 0;
			double pageCount = 1;
			//StatusVO responseVo = StockUtil.validatePageNo(pageno);
			Long startPageIndex = 1l;
			Integer pageNo = null;
			/*if (responseVo.isStatusFlag()) {*/
				pageNo = (pageno != null) ? Integer.parseInt(pageno) : null;
				startPageIndex = (Long.parseLong(pageno) - 1)
						* Long.parseLong(rows);
			/*}*/
			JSONObject responcedata = new JSONObject();
			JSONArray cellarray = new JSONArray();
			out = response.getWriter();
			List<User> list = userService.getUserList(
					startPageIndex.intValue(), 15, new User());
			Map<String, Object> map = new HashMap<String, Object>();
			
			if (list != null) {
				totalcount = userService
						.countUserList(new User());
				pageCount = Math.ceil(totalcount / Long.valueOf(rows));
				if (sidx.equals("userName")) {
					Collections.sort(list, new Comparator() {

						@Override
						public int compare(Object o1, Object o2) {
							User p1 = (User) o1;
							User p2 = (User) o2;
							return p1
									.getUserName()
									.toString()
									.compareToIgnoreCase(
											p2.getUserName().toString());
						}
					});

				}
				if (sortorder != null && sortorder.equalsIgnoreCase("desc")) {
					Collections.reverse(list);
				}
				int j = 1;
				for (User vo : list) {

					JSONArray cell = new JSONArray();
					JSONObject cellobj = new JSONObject();
					
					cellobj.put(ID, vo.getUserId());
					cell.put(j);
					cell.put(vo.getUserName());
					cell.put(vo.getMobileNo());
					cell.put("<a href='editUser?id="+vo.getUserId()+"'><button type='button'><i class='fa fa-edit' style='margin-right:5px;'></i>Edit</button></a>&nbsp;&nbsp;<a href='viewUser?id="+vo.getUserId()+"'><button type='button'><i class='fa fa-eye' style='margin-right:5px;'></i>View</button></a>");
					// cell.add("<a href='viewItem.htm?item="+vo.getCustomerId()+"'>View</a>");
					cellobj.put(CELL, cell);
					cellarray.put(cellobj);
					j++;
				}
				responcedata.put(TOTAL, pageCount);
				responcedata.put(PAGE, pageNo);

				responcedata.put(RECORDS, totalcount);
				responcedata.put(ROWS, cellarray);
				out.print(responcedata);
				System.out.println(responcedata);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}


	@RequestMapping(value="/editUser")
	public String editUser(@RequestParam("id") int id,@ModelAttribute User user){
		
		
		User user1 = userService.getUserById(id);
		
		user.setUserName(user1.getUserName());
		user.setResidentNo(user1.getResidentNo());
		user.setMobileNo(user1.getMobileNo());
		user.setAddress(user1.getAddress());
		user.setContactLense(user1.getContactLense());
		user.setDate(user1.getDate());
		user.setFrame(user1.getFrame());
		user.setGlass(user1.getGlass());
		user.setUserRemarks(user1.getUserRemarks());
		user.setPendingAmount(user1.getPendingAmount());
		
		user.setLeAxis1(user1.getLeAxis1());
		user.setLeAxis2(user1.getLeAxis2());
		user.setLeAxis3(user1.getLeAxis3());
		user.setLeCyl1(user1.getLeCyl1());
		user.setLeCyl2(user1.getLeCyl2());
		user.setLeCyl3(user1.getLeCyl3());
		user.setLeSph1(user1.getLeSph1());
		user.setLeSph2(user1.getLeSph2());
		user.setLeSph3(user1.getLeSph3());
		user.setLeVA1(user1.getLeVA1());
		user.setLeVA2(user1.getLeVA2());
		user.setLeVA3(user1.getLeVA3());
		
		user.setReAxis1(user1.getReAxis1());
		user.setReAxis2(user1.getReAxis2());
		user.setReAxis3(user1.getReAxis3());
		user.setReCyl1(user1.getReCyl1());
		user.setReCyl2(user1.getReCyl2());
		user.setReCyl3(user1.getReCyl3());
		user.setReSph1(user1.getReSph1());
		user.setReSph2(user1.getReSph2());
		user.setReSph3(user1.getReSph3());
		user.setReVA1(user1.getReVA1());
		user.setReVA2(user1.getReVA2());
		user.setReVA3(user1.getReVA3());
		user.setUserId(user1.getUserId());
		
		
		return "Form";
		
	}
	
	@RequestMapping(value="/viewUser")
	public String viewUser(@RequestParam("id") int id,@ModelAttribute User user){
		
		
		User user1 = userService.getUserById(id);
		
		user.setUserName(user1.getUserName());
		user.setResidentNo(user1.getResidentNo());
		user.setMobileNo(user1.getMobileNo());
		user.setAddress(user1.getAddress());
		user.setContactLense(user1.getContactLense());
		user.setDate(user1.getDate());
		user.setFrame(user1.getFrame());
		user.setGlass(user1.getGlass());
		user.setUserRemarks(user1.getUserRemarks());
		user.setPendingAmount(user1.getPendingAmount());
		
		user.setLeAxis1(user1.getLeAxis1());
		user.setLeAxis2(user1.getLeAxis2());
		user.setLeAxis3(user1.getLeAxis3());
		user.setLeCyl1(user1.getLeCyl1());
		user.setLeCyl2(user1.getLeCyl2());
		user.setLeCyl3(user1.getLeCyl3());
		user.setLeSph1(user1.getLeSph1());
		user.setLeSph2(user1.getLeSph2());
		user.setLeSph3(user1.getLeSph3());
		user.setLeVA1(user1.getLeVA1());
		user.setLeVA2(user1.getLeVA2());
		user.setLeVA3(user1.getLeVA3());
		
		user.setReAxis1(user1.getReAxis1());
		user.setReAxis2(user1.getReAxis2());
		user.setReAxis3(user1.getReAxis3());
		user.setReCyl1(user1.getReCyl1());
		user.setReCyl2(user1.getReCyl2());
		user.setReCyl3(user1.getReCyl3());
		user.setReSph1(user1.getReSph1());
		user.setReSph2(user1.getReSph2());
		user.setReSph3(user1.getReSph3());
		user.setReVA1(user1.getReVA1());
		user.setReVA2(user1.getReVA2());
		user.setReVA3(user1.getReVA3());
		user.setUserId(user1.getUserId());
		
		
		return "ViewForm";
		
	}
	
	
	
}
