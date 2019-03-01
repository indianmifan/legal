var flag=0;
var flagg_=1
//alert(flag)
//<a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=91,appendText()' >了解赔偿标准</a><br> 
//flag of compensation= 91
var compensation="《中华人民共和国邮政法》第四十七条　邮政企业对给据邮件的损失依照下列规定赔偿： \n\n<br>(一)保价的给据邮件丢失或者全部损毁的，按照保价额赔偿;部分损毁或者内件短少的，按照保价额与邮件全部价值的比例对邮件的实际损失予以赔偿。 \n\n<br>(二)未保价的给据邮件丢失、损毁或者内件短少的，按照实际损失赔偿，但最高赔偿额不超过所收取资费的三倍;挂号信件丢失、损毁的，按照所收取资费的三倍予以赔偿。 \n\n<br>即 若您已保价，则按照保价时约定的赔付标准进行赔付 \n\n<br>若您未保价，对您的赔偿不超过邮费的3倍 \n\n<br>因此建议您对贵重物品的邮寄快递进行保价 \n\n<br>"
var pre0="<a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=1,appendText()' >1.快递问题  </a><br> <a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=2,appendText()'>2.网络贷款问题</a> <br> <a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=3,appendText()' >3.手机软件扣费  </a><br>  <a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=4,appendText()' >4.医疗问题 </a><br> <a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=5,appendText()' >5.商标或关键词侵权问题 </a><br> <a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=6,appendText()' >6.网络购物问题</a><br><a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=7,appendText()' >7.投资理财被诈骗问题</a><br> <a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=8,appendText()' >8. 发票问题</a><br>" 
var pre1="<a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=11,appendText()' >1.1 快递太慢</a><br><a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=12,appendText()' >1.2 快递丢失</a><br> <a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=13,appendText()' >1.3 快递物件损坏</a><br>  "
var pre11="您好，根据您反映的情况，由于工作失误，快递对您的快件送达延误，给您造成损失对此，建议您登录<a href=' http://sswz.spb.gov.cn/' class='res-link' target='_blank' onclick='flagg_=91,appendText()' > 国家邮政局申诉网站</a> 电话（当地区号+024-12305） 微信（邮政业消费者申诉）进行投诉，并保留好您所有的证据，等待对方处理。 （注意需满足申诉条件：①已向企业投诉，但七天内没有任何处理结果 ②已向企业投诉，但对企业的处理结果不满意。投诉方可被受理）  \n\n<br>    根据《邮政业消费者申诉处理办法》 第八条 消费者申诉受理范围： （二）经营快递业务企业的快递业务服务质量问题。 第十条 邮政业消费者申诉中心应当及时受理消费者申诉。消费者采取电话方式申诉，应当及时接听，并告知申诉人处理流程与时限。消费者采取网上、书信、传真形式申诉，应当于两个工作日内处理。 \n\n<br> 第十四条 被申诉企业收到邮政业消费者申诉中心转办的申诉后应当按照以下情形妥善处理： （一）对确认企业负有责任的申诉，应当依法赔偿消费者损失或者向消费者致歉；  \n\n<br>第十五条 被申诉企业应当按照如下要求，自收到转办申诉之日起十五日内向转办申诉的邮政业消费者申诉中心答复处理结果  \n\n<br>      鼓励您增强维权意识！ \n\n<br><a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=91,appendText()' >了解赔偿标准</a><br> "
var pre12=" 您好，根据您反映的情况，由于工作失误，快递运送过程中，导致快递丢失，给您造成损失，对此，建议您登录<a href=' http://sswz.spb.gov.cn/' class='res-link' target='_blank' onclick='flagg_=91,appendText()' > 国家邮政局申诉网站</a>  电话（当地区号+024-12305） 微信（邮政业消费者申诉）进行投诉，并保留好您所有的证据，等待对方处理。 （注意需满足申诉条件：①已向企业投诉，但七天内没有任何处理结果 ②已向企业投诉，但对企业的处理结果不满意。投诉方可被受理） \n\n<br>    根据《邮政业消费者申诉处理办法》 第八条 消费者申诉受理范围： （二）经营快递业务企业的快递业务服务质量问题。 第十条 邮政业消费者申诉中心应当及时受理消费者申诉。消费者采取电话方式申诉，应当及时接听，并告知申诉人处理流程与时限。消费者采取网上、书信、传真形式申诉，应当于两个工作日内处理。\n\n<br> 第十四条 被申诉企业收到邮政业消费者申诉中心转办的申诉后应当按照以下情形妥善处理： （一）对确认企业负有责任的申诉，应当依法赔偿消费者损失或者向消费者致歉； \n\n<br>第十五条 被申诉企业应当按照如下要求，自收到转办申诉之日起十五日内向转办申诉的邮政业消费者申诉中心答复处理结果 \n\n<br>      鼓励您增强维权意识！"
var pre13=" 您好，根据您反映的情况，由于工作失误，快递运送过程中，导致快递损坏，给您造成损失，对此，建议您登录 <a href=' http://sswz.spb.gov.cn/' class='res-link' target='_blank' onclick='flagg_=91,appendText()' > 国家邮政局申诉网站</a>  电话（当地区号+024-12305） 微信（邮政业消费者申诉）进行投诉，并保留好您所有的证据，等待对方处理。 （注意需满足申诉条件：①已向企业投诉，但七天内没有任何处理结果 ②已向企业投诉，但对企业的处理结果不满意。投诉方可被受理） \n\n<br>    根据《邮政业消费者申诉处理办法》 第八条 消费者申诉受理范围： （二）经营快递业务企业的快递业务服务质量问题。 第十条 邮政业消费者申诉中心应当及时受理消费者申诉。消费者采取电话方式申诉，应当及时接听，并告知申诉人处理流程与时限。消费者采取网上、书信、传真形式申诉，应当于两个工作日内处理。\n\n<br> 第十四条 被申诉企业收到邮政业消费者申诉中心转办的申诉后应当按照以下情形妥善处理： （一）对确认企业负有责任的申诉，应当依法赔偿消费者损失或者向消费者致歉； \n\n<br>第十五条 被申诉企业应当按照如下要求，自收到转办申诉之日起十五日内向转办申诉的邮政业消费者申诉中心答复处理结果 \n\n<br>      鼓励您增强维权意识！\n\n<br><a href='javascript:;' class='res-link' target='_blank' onclick='flagg_=91,appendText()' >了解赔偿标准</a><br>\n\n<br>"
var pre2="您好，对于您的遭遇表示遗憾，根据您的描述，有以下意见。\n\n<br>首先，根据《关于审理民间借贷案件适用法律若干问题的意见》；第二十六条　借贷双方约定的利率未超过年利率24%，出借人请求借款人按照约定的利率支付利息的，人民法院应予支持。 借贷双方约定的利率超过年利率36%，超过部分的利息约定无效。借款人请求出借人返还已支付的超过年利率36%部分的利息的，人民法院应予支持。 民间借贷利率在24%以上36%以下的部分，借款人根据约定已经给付的，也是受法律保护的利息。未给付的，出借人到法院起诉索要的，法院不予支持。也就是说，这部分利息是自愿给付的利息。 您可以对其年利率进行计算，若超过36%的部分法院不予支持，您可以不予支付，支付了也可以要回。若利率在36%以下，非常遗憾的是属于您与对方自愿协商的利息，您需要支付。希望可以减少您的损失\n\n<br>"
var pre3="您好，对您的遭遇表示遗憾，根据您的描述，我有以下意见。<br> 1、首先，我们还是要先知道扣费的原因，这样通过运营商客服就可以知道，然后和客服说明情况，如果不是自己的原因产生的费用，就可以退回所扣费用，48小时之内，所扣费用就会充回您的账户。但是这种情况下，客服一般不会主动给你恢复，如果在你的要求下，客服仍然不解决问题，直接向运营公司投诉。\n\n<br> 2、我们应该尽量避免再次发生此类情况。下载手机软件之前一定要安装安全软件。 在安全中心设置所有安全项目。这样在我们安装一个软件的时候，会提示我们软件是否安全，可以有效避免扣费。 然后，下载软件请一定认准官方正品。 不要随意下载软件，需要的软件，下载之前一定要确认是官方正品，否则尽量不要下载。\n\n<br> 3、发生下载软件自动扣费的情况时，请及时送去修理。 一旦发现手机软件扣费，要马上确认手机是否中病毒或者存在其他漏洞，如果有病毒或者有自己不明白的情况，要及时送去售后处理。避免继续扣费。\n\n<br>"





function appendText()
{
    var txt1="<p>文本。</p>";              // 使用 HTML 标签创建文本
    var txt2=$("<p></p>").text("文本。");  // 使用 jQuery 创建文本
    var txt3=document.createElement("p");
    txt3.innerHTML="文本。";               // 使用 DOM 创建文本 text with DOM
   var a_= $(".ui-thread-item ");        // 追加新元素
 // a_.after(txt1,txt2,txt3)
 	switch(flagg_)
 	{

 	case 1:mainCon.receiveMessage(pre1,saveChannel);break;
 	case 2:mainCon.receiveMessage(pre2,saveChannel);break;
 	case 3:mainCon.receiveMessage(pre3,saveChannel);break;
 	case 11:mainCon.receiveMessage(pre11,saveChannel);break;
 	case 12:mainCon.receiveMessage(pre12,saveChannel);break;
 	case 13:mainCon.receiveMessage(pre13,saveChannel);break;

 	case 91:mainCon.receiveMessage(compensation,saveChannel);break;
 	}
  }