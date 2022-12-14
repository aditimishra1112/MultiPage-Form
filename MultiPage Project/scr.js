function saveData() {
    // e.preventDefault();
  var col,bor,mar,ins,ssc,smar,cou,r,coln,ovpe,bl;

  col = document.getElementById("school").value;
  bor = document.getElementById("boardd").value;
  mar = document.getElementById("marks").value;
  ins = document.getElementById("iname").value;
  ssc = document.getElementById("boarddd").value;
  smar = document.getElementById("markks").value;
  cou = document.getElementsByName("gender");
    for(i=0;i<cou.length;i++)
    {
        if(cou[i].checked)
        r=cou[i].value;

    } 
  coln = document.getElementById("insn").value;
  ovpe = document.getElementById("percent").value;
  bl = document.getElementById("backlog").value;

  //validation of forms
  var x = parseFloat(mar);
  if (isNaN(x) || x < 0 || x > 100) {
    alert("HSC percentage is out of range");
    return false;
  }
  var x = parseFloat(smar);
  if (isNaN(x) || x < 0 || x > 100) {
    alert("SSC percentage is out of range");
    return false;
  }
  var x = parseFloat(ovpe);
  if (isNaN(x) || x < 0 || x > 100) {
    alert("OVERALL percentage is out of range");
    return false;
  }
  

  localStorage.setItem("School Name", col);
  localStorage.setItem("HSC Board Name", bor);
  localStorage.setItem("HSC Marks Obtained ", mar);
  localStorage.setItem("Institute Name", ins);
  localStorage.setItem("SSC Board Name", ssc);
  localStorage.setItem("SSC marks", smar);
  localStorage.setItem("Course Name", r);
  localStorage.setItem("College Name", coln);
  localStorage.setItem("Overall Percent", ovpe);
  localStorage.setItem("Backlog Details", bl);

}


