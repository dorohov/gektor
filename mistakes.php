<!-- ������ �������� ��������� �� ������ http://mistakes.ru/script/mistakes_dev -->
<!-- ������ 4.1 �� 27.04.2015-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
	<TITLE>��������� ������</TITLE>
<style type="text/css">
body {
margin: 23px 28px 0 28px;
font-size:14px;
font-family:Helvetica, Sans-serif, Arial;
line-height:2em;
}
form {margin: 0;}
.text {
font-weight: bold;
font-size:12px;
color:#777;
}
.copyright {
font-size:11px;
color:#777;
}
.mclose a{
font:bold 16px Verdana;
color:#7f7f7f;
position:absolute;
right:12px;
top:9px;
display:block;
text-decoration:none;
}
.mclose a:hover{
color: #000;
}
#m{
border: 1px solid silver;
padding: 3px;
width: 294px;
border-radius:4px;
font-size: 13px;
background-color: #fff;
}
#m strong{
color:red;
}
</style>

<script language="JavaScript"> 
var p=top;
function readtxt()
{ if(p!=null)document.forms.mistake.url.value=p.loc
 if(p!=null)document.forms.mistake.mis.value=p.mis
}
function hide()
{ var win=p.document.getElementById('mistake');
win.parentNode.removeChild(win);
}
</script>

<?php 
if($_POST['submit']) { 
    # ��������� ��������� - �������� "yousite.ru" �� ��� ������ �����:
$title = '��������� �� ������ �� ����� ������.ru';
$ip = getenv('REMOTE_ADDR');
$url = (trim($_POST['url']));
$mis =  (trim($_POST['mis']));
$comment =  substr(htmlspecialchars(trim($_POST['comment'])), 0, 100000);
                       
                $mess = '
                <html>
                <head>
                <title>������ �� �����</title>
                </head>
                <body>
                <strong>����� ��������:</strong> <a href="'.$url.'">'.$url.'</a>
                <br/>
                <strong>������:</strong> '.$mis.'
                <br/>
                <strong>�����������:</strong> '.$comment.'
                <br/>                               
                <strong>IP:</strong> '.$ip.'
                '.$_POST['mess'].'
                </body>
                </html>
                ';
# Email �����, �� ������� ������ ��������� ���������:               
$to = 'to@mail.ru';
# Email �����, �� ���� ������ ���������:
$mymail='from@mail.ru';
# ������ "yousite.ru" �������� ��� ������ �����: 
        $from = "From: =?windows-1251?B?". base64_encode("yousite.ru"). "?= < $mymail >\n";
        $from .= "X-Sender: < $mymail >\n";
        $from .= "Content-Type: text/html; charset=windows-1251\n";
               
mail($to, $title, $mess, $from);
echo '<div class="mclose"><a href="javascript:void(0)" onclick="hide()" title="�������">&times;</a></div><br><br><br><center>�������!<br>���� ��������� ����������.<br><br><br><input onclick="hide()" type="button" value="������� ����" id="close" name="close"><br><br><br><a class="copyright" href="http://mistakes.ru/script/mistakes_dev" target="_blank" title="">� ������.ru</a><center>'; 
exit();
}  
?>

</head>
<body onload=readtxt()>
<div class="mclose"><a href="javascript:void(0)" onclick="hide()" title="�������">&times;</a></div>
<span class="text">
����� �������� :
 </span>
<br /> 
<form name="mistake" action="" method=post>
<input id="m" type="text" name="url" size="35" readonly="readonly">
              <span class="text">
              ������ :
              </span><br />
              <div id="m" style="line-height:normal;height: 75px;width: 287px;">
<script language="JavaScript">
	document.write(p.mis); 
</script>
              </div>
              <input type="hidden" id="m" rows="5" name="mis" readonly="readonly"></textarea>
              <span class="text">
              ����������� :
              </span>
              <br /> 
              <textarea id="m" rows="5" name="comment" cols="30"></textarea> 
              <div style="margin-top: 7px"><input type="submit" value="���������" name="submit">
              <input onclick="hide()" type="button" value="������" id="close" name="close"> 
              </div>
</form> 

</body></html>
