<template>
 <div id="demo">
 
 
	<input type="text" class="cityinput"  placeholder="城市或目的地" v-model="region" @focus="show=true" @blur="set()">
	<el-button type="danger" class="search_btn" @click="searchxiaoniu">搜索小牛</el-button>
	<div class='cityBox' v-show='show'>
    <p class="tip">直接输入可搜索城市(支持汉字/拼音)</p>
    <ul>
      <li :class='{on:index===newindex}' v-for="(item,index) in city" @click='hand(index)' >{{item}}</li>
    </ul>
    <div class='tipbox' >
       <div class='box' v-for="(item,index) in classify" v-show='index===newindex'>
          <dl v-for="(it,i)  in item.name">
            <dt >{{Object.keys(it)[0]=='热门城市'?'':Object.keys(it)[0]}}</dt>
            <dd>
              <span v-for="(value,ind) in Object.values(it)[0]" @click="setValue(value)">
                <a>{{value}}</a>
              </span>
            </dd>
          </dl>
        </div>
        
      </div>
    
  </div>
<div class='hide' v-show='isShow&&!show'>
      <ul>
        <li v-for="(item,index) in search" >
          <span class='left'>{{item.left}}</span>
          <span class='right'>{{item.right}}</span>
        </li>
        <li v-show='search.length===0'>对不起，没有找到<span class='code'>{{text}}</span></li>
      </ul>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      show: null,
      isShow: null,
      region: "", //输入框
      
      city: ["热门城市", "ABCDE", "FGHJ", "KLMNP", "XYZ"], //城市首字母
      homestay:'',
      newindex: null, //点击的li下标
      newindex: 0, //点击的li下标
      //城市分类
      classify: [
        {
          name: [
            {
              热门城市: [
                "北京市",
                "上海市",
                "成都市",
                "深圳市",
                "西安市",
                "南京市",
                "无锡市",
                "沈阳市",
                "武汉市",
                "大连市",
                "长沙市",
                "昆明市",
                "广州市",
                "哈尔滨市",
                "石家庄市"
                
              ]
            }
          ]
        },
        {
          name: [{ A: [] }, { B: [] }, { C: [] }, { D: [] }, { E: [] }]
        },
        {
          name: [{ F: [] }, { G: [] }, { H: [] }, { J: [] }]
        },
        {
          name: [{ K: [] }, { L: [] }, { M: [] }, { N: [] }, { P: [] }]
        },
        {
          name: [{ X: [] }, { Y: [] }, { Z: [] }]
        }
      ],
 
      town: [
        "郑州市|zhengzhou|zz",
        "保定市|baoding|bd",
        "唐山市|tangshan|ts",
        "秦皇岛市|qinhuangdao|qhd",
        "邯郸市|handan|hd",
        "邢台市|xingtai|xt",
        "张家口市|zhangjiakou|zjk",
        "承德市|chengde|cd",
        "衡水市|hengshui|hs",
        "廊坊市|langfang|lf",
        "沧州市|cangzhou|cz",
        "太原市|taiyuan|ty",
        "大同市|datong|dt",
        "阳泉市|yangquan|yq",
        "长治市|changzhi|cz",
        "晋城市|jincheng|jc",
        "朔州市|shuozhou|sz",
        "晋中市|jinzhong|jz",
        "运城市|yuncheng|yc",
        "忻州市|xinzhou|xz",
        "临汾市|linfen|lf",
        "吕梁市|lvliang|ll",
        "呼和浩特市|huhehaote|hhht",
        "包头市|baotou|bt",
        "乌海市|wuhai|wh",
        "赤峰市|chifeng|cf",
        "通辽市|tongliao|tl",
        "鄂尔多斯市|eerduosi|eeds",
        "呼伦贝尔市|hulunbeier|hlbe",
        "巴彦淖尔市|bayannaoer|byne",
        "乌兰察布市|wulanchabu|wlcb",
        "兴安盟|xinganmeng|xam",
 
        "阿拉善盟|alashanmeng|alsm",
        "沈阳市|shenyang|sy",
        "大连市|dalian|dl",
        "鞍山市|anshan|as",
        "抚顺市|fushun|fs",
        "本溪市|benxi|bx",
        "丹东市|dandong|dd",
        "锦州市|jinzhou|jz",
        "营口市|yingkou|yk",
        "阜新市|fuxin|fx",
        "辽阳市|liaoyang|ly",
        "盘锦市|panjin|pj",
        "铁岭市|tieling|tl",
        "朝阳市|chaoyang|cy",
        "葫芦岛市|huludao|hld",
        "长春市|changchun|cc",
        "吉林市|jilin|jl",
        "四平市|siping|sp",
        "辽源市|liaoyuan|ly",
        "通化市|tonghua|th",
        "白山市|baishan|bs",
        "松原市|songyuan|sy",
        "白城市|baicheng|bc",
 
        "哈尔滨市|haerbin|heb",
        "齐齐哈尔市|qiqihaer|qqhe",
        "鸡西市|jixi|jx",
        "鹤岗市|hegang|hg",
        "双鸭山市|shuangyashan|sys",
        "大庆市|daqing|dq",
        "伊春市|yichun|yc",
        "佳木斯市|jiamusi|jms",
        "七台河市|qitaihe|qth",
        "牡丹江市|mudanjiang|mdj",
        "黑河市|heihe|hh",
        "绥化市|suihua|sh",
 
        "徐州市|xuzhou|xz",
        "南通市|nantong|nt",
        "连云港市|lianyungang|lyg",
        "淮安市|huaian|ha",
        "盐城市|yancheng|yc",
        "扬州市|yangzhou|yz",
        "镇江市|zhenjiang|zj",
        "泰州市|taizhou|tz",
        "宿迁市|suqian|sq",
        "宁波市|ningbo|nb",
        "嘉兴市|jiaxing|jx",
        "湖州市|huzhou|hz",
        "绍兴市|shaoxing|sx",
        "舟山市|zhoushan|zs",
        "衢州市|quzhou|qz",
        "金华市|jinhua|jh",
        "台州市|taizhou|tz",
        "丽水市|lishui|ls",
        "芜湖市|wuhu|wh",
        "蚌埠市|bengbu|bb",
        "淮南市|huainan|hn",
        "马鞍山市|maanshan|mas",
        "淮北市|huaibei|hb",
        "铜陵市|tongling|tl",
        "安庆市|anqing|aq",
        "黄山市|huangshan|hs",
        "滁州市|chuzhou|cz",
        "阜阳市|fuyang|fy",
        "宿州市|suzhou|sz",
        "巢湖市|chaohu|ch",
        "六安市|luan|la",
        "亳州市|bozhou|bz",
        "池州市|chizhou|cz",
        "宣城市|xuancheng|xc",
        "福州市|fuzhou|fz",
        "厦门市|xiamen|xm",
        "莆田市|putian|pt",
        "三明市|sanming|sm",
        "泉州市|quanzhou|qz",
        "漳州市|zhangzhou|zz",
        "南平市|nanping|np",
        "龙岩市|longyan|ly",
        "宁德市|ningde|nd",
        "景德镇市|jingdezhen|jdz",
        "萍乡市|pingxiang|px",
        "九江市|jiujiang|jj",
        "新余市|xinyu|xy",
        "鹰潭市|yingtan|yt",
        "赣州市|ganzhou|gz",
        "吉安市|jian|ja",
        "宜春市|yichun|yc",
        "抚州市|fuzhou|fz",
        "上饶市|shangrao|sr",
        "济南市|jinan|jn",
        "淄博市|zibo|zb",
        "枣庄市|zaozhuang|zz",
        "东营市|dongying|dy",
        "烟台市|yantai|yt",
        "潍坊市|weifang|wf",
        "济宁市|jining|jn",
        "泰安市|taian|ta",
        "威海市|weihai|wh",
        "日照市|rizhao|rz",
        "莱芜市|laiwu|lw",
        "临沂市|linyi|ly",
        "德州市|dezhou|dz",
        "聊城市|liaocheng|lc",
        "滨州市|binzhou|bz",
        "菏泽市|heze|hz",
        "开封市|kaifeng|kf",
        "洛阳市|luoyang|ly",
        "平顶山市|pingdingshan|pds",
        "安阳市|anyang|ay",
        "鹤壁市|hebi|hb",
        "新乡市|xinxiang|xx",
        "焦作市|jiaozuo|jz",
        "濮阳市|puyang|py",
        "许昌市|xuchang|xc",
        "漯河市|luohe|lh",
        "三门峡市|sanmenxia|smx",
        "南阳市|nanyang|ny",
        "商丘市|shangqiu|sq",
        "信阳市|xinyang|xy",
        "周口市|zhoukou|zk",
        "驻马店市|zhumadian|zmd",
        "济源市|jiyuan|jiyuan",
        "黄石市|huangshi|hs",
        "十堰市|shiyan|sy",
        "宜昌市|yichang|yc",
        "襄樊市|xiangfan|xf",
        "鄂州市|ezhou|ez",
        "荆门市|jingmen|jm",
        "孝感市|xiaogan|xg",
        "荆州市|jingzhou|jz",
        "黄冈市|huanggang|hg",
        "咸宁市|xianning|xn",
        "随州市|suizhou|sz",
 
        "仙桃市|xiantao|xt",
        "潜江市|qianjiang|qj",
        "天门市|tianmen|tm",
        "神农架林区|shennongjia|snjlq",
        "株洲市|zhuzhou|zz",
        "湘潭市|xiangtan|xt",
        "衡阳市|hengyang|hy",
        "邵阳市|shaoyang|sy",
        "岳阳市|yueyang|yy",
        "常德市|changde|cd",
        "张家界市|zhangjiajie|zjj",
        "益阳市|yiyang|yy",
        "郴州市|chenzhou|cz",
        "永州市|yongzhou|yz",
        "怀化市|huaihua|hh",
        "娄底市|loudi|ld",
 
        "韶关市|shaoguan|sg",
        "珠海市|zhuhai|zh",
        "汕头市|shantou|st",
        "佛山市|foushan|fs",
        "江门市|jiangmen|jm",
        "湛江市|zhanjiang|jz",
        "茂名市|maoming|mm",
        "肇庆市|zhaoqing|zq",
        "惠州市|huizhou|hz",
        "梅州市|meizhou|mz",
        "汕尾市|shanwei|sw",
        "河源市|heyuan|hy",
        "阳江市|yangjiang|yj",
        "清远市|qingyuan|qy",
        "东莞市|dongguan|dg",
        "中山市|zhongshan|zs",
        "潮州市|chaozhou|cz",
        "揭阳市|jieyang|jy",
        "云浮市|yunfu|yf",
        "南宁市|nanning|nn",
        "柳州市|liuzhou|lz",
        "桂林市|guilin|gl",
        "梧州市|wuzhou|wz",
        "北海市|beihai|bh",
        "防城港市|fangchenggang|fcg",
        "钦州市|qinzhou|qz",
        "贵港市|guigang|gg",
        "玉林市|yulin|yl",
        "百色市|baise|bs",
        "贺州市|hezhou|hz",
        "河池市|hechi|hc",
        "来宾市|laibin|lb",
        "崇左市|chongzuo|cz",
        "海口市|haikou|hk",
        "三亚市|sanya|sy",
        "五指山市|wuzhishan|wzs",
        "琼海市|qionghai|qh",
        "儋州市|danzhou|dz",
        "文昌市|wenchang|wc",
        "万宁市|wanning|wn",
        "东方市|dongfang|df",
        "定安县|dingan|da",
        "屯昌县|tunchang|tc",
        "澄迈县|chengmai|cm",
        "临高县|lingao|lg",
 
        "西沙群岛|xishaqundao|xsqd",
        "南沙群岛|nanshaqundao|nsqd",
 
        "自贡市|zigong|zg",
        "攀枝花市|panzhihua|pzh",
        "泸州市|luzhou|lz",
        "德阳市|deyang|dy",
        "绵阳市|mianyang|my",
        "广元市|guangyuan|gy",
        "遂宁市|suining|sn",
        "内江市|neijiang|nj",
        "乐山市|leshan|ls",
        "南充市|nanchong|nc",
        "眉山市|meishan|ms",
        "宜宾市|yibin|yb",
        "广安市|guangan|ga",
        "达州市|dazhou|dz",
        "雅安市|yaan|ya",
        "巴中市|bazhong|bz",
        "资阳市|ziyang|zy",
 
        "贵阳市|guiyang|gy",
        "六盘水市|liupanshui|lps",
        "遵义市|zunyi|zy",
        "安顺市|anshun|as",
        "铜仁地区|tongren|tr",
 
        "毕节地区|bijie|bj",
 
        "昆明市|kunming|km",
        "曲靖市|qujing|qj",
        "玉溪市|yuxi|yx",
        "保山市|baoshan|bs",
        "昭通市|zhaotong|zt",
        "丽江市|lijiang|lj",
        "思茅市|simao|sm",
        "临沧市|lincang|lc",
 
        "拉萨市|lasa|ls",
        "昌都地区|changdudiqu|cd",
        "山南地区|shannandiqu|sndq",
        "日喀则地区|rikazediqu|rkzdq",
        "那曲地区|naqudiqu|nqdq",
        "阿里地区|alidiqu|aldq",
        "林芝地区|linzhidiqu|lzdq",
        "西安市|xian|xa",
        "铜川市|tongchuan|tc",
        "宝鸡市|baoji|bj",
        "咸阳市|xianyang|xy",
        "渭南市|weinan|wn",
        "延安市|yanan|ya",
        "汉中市|hanzhong|hz",
        "榆林市|yulin|yl",
        "安康市|ankang|ak",
        "商洛市|shangluo|sl",
        "兰州市|lanzhou|lz",
        "嘉峪关市|jiayuguan|jyg",
        "金昌市|jinchang|jc",
        "白银市|baiyin|by",
        "天水市|tianshui|ts",
        "武威市|wuwei|ww",
        "张掖市|zhangye|zy",
        "平凉市|pingliang|pl",
        "酒泉市|jiuquan|jq",
        "庆阳市|qingyang|qy",
        "定西市|dingxi|dx",
        "陇南市|longnan|ln",
 
        "西宁市|xining|xn",
        "海东地区|haidongdiqu|hddq",
 
        "银川市|yinchuan|yc",
        "石嘴山市|shizuishan|szs",
        "吴忠市|wuzhong|wz",
        "固原市|guyuan|gy",
        "中卫市|zhongwei|zw",
        "乌鲁木齐市|wulumuqi|wlmq",
        "克拉玛依市|kelamayi|klmy",
        "吐鲁番地区|tulufandiqu|tlfdq",
        "哈密地区|hamidiqu|hmdq",
        "昌吉回族自治州|cjhzzzz|cjhzzzz",
 
        "阿克苏地区|akesudiqu|aksdq",
 
        "喀什地区|kashidiqu|ksdq",
        "和田地区|hetian|ht",
 
        "塔城地区|tachengdiqu|tcdq",
        "阿勒泰地区|aletaidiqu|altdq",
        "石河子市|shihezi|shz",
        "阿拉尔市|alaer|ale",
        "图木舒克市|tumushuke|tmsk",
        "五家渠市|wujiaqu|wjq",
        "台北市|taibei|tb",
        "高雄市|gaoxiong|gx",
        "基隆市|jilong|jl",
        "台中市|taizhong|tz",
        "台南市|tainan|tn",
        "新竹市|xinzhu|xz",
        "嘉义市|jiayi|jy",
        "台北县|taibeixian|tbx",
        "宜兰县|yilanxian|ylx",
        "桃园县|taoyuanxian|tyx",
        "新竹县|xinzhuxian|xzx",
        "苗栗县|miaolixian|mlx",
        "台中县|taizhongxian|tzx",
        "彰化县|zhanghuaxian|zhx",
        "南投县|nantouxian|ntx",
        "云林县|yunlinxian|ylx",
        "嘉义县|jiayixian|jyx",
        "台南县|tainanxian|tnx",
        "高雄县|gaoxiongxian|gxx",
        "屏东县|pingdongxian|pdx",
        "澎湖县|penghuxian|phx",
        "台东县|taidongxian|tdx",
        "花莲县|hualianxian|hlx",
        "中西区|zhongxiqu|zxq",
        "东区|dongqu|dq",
        "九龙城区|jiulongchengqu|jlcq",
        "观塘区|guantangqu|gtq",
        "南区|nanqu|nq",
        "深水埗区|shenshuibuqu|ssbq",
        "黄大仙区|huangdaxianqu|hdxq",
        "湾仔区|wanzaiqu|wzq",
        "油尖旺区|youjianwangqu|yjwq",
        "离岛区|lidaoqu|ldq",
        "葵青区|kuiqingqu|kqq",
        "北区|beiqu|bq",
        "西贡区|xigongqu|xgq",
        "沙田区|shatianqu|stq",
        "屯门区|tunmenqu|tmq",
        "大埔区|dabuqu|dbq",
        "荃湾区|quanwanqu|qwq",
        "元朗区|yuanlangqu|ylq",
        "花地玛堂区|huadimatangqu|hdmtq",
 
        "大堂区|datangqu|dtq",
        "望德堂区|wangdetangqu|wdtq",
        "风顺堂区|fengshuntangqu|fstq",
        "嘉模堂区|jiamotangqu|jmtq"
      ], //城市名称
      search: []
    };
  },
  watch: {
    region(val) {
      if (val === "") {
        this.show = true;
      } else {
        this.show = false;
        this.isShow = true;
        this.text = val;
      }
      this.search = [];
 
      for (let item of this.town) {
        item = item.split("|");
        if (/^[\u4e00-\u9fa5]+$/.test(val)) {
          if (item[0].indexOf(val) == 0) {
            this.search.push({ left: item[0], right: item[1] });
          }
        } else if (/^[a-z]+$/.test(val)) {
          if (item[1].indexOf(val) == 0 || item[2].indexOf(val) == 0) {
            this.search.push({ left: item[0], right: item[1] });
          }
        }
      }
      console.log(this.search);
      console.log(this.region);
    }
  },
  mounted() {
    for (let item of this.town) {
      item = item.split("|");
 
      this.place(/^[a]$/i, "A", 1, 0, item);
      this.place(/^[b]$/i, "B", 1, 1, item);
      this.place(/^[c]$/i, "C", 1, 2, item);
      this.place(/^[d]$/i, "D", 1, 3, item);
      this.place(/^[e]$/i, "E", 1, 4, item);
      this.place(/^[f]$/i, "F", 2, 0, item);
      this.place(/^[g]$/i, "G", 2, 1, item);
      this.place(/^[h]$/i, "H", 2, 2, item);
      this.place(/^[j]$/i, "J", 2, 3, item);
      this.place(/^[k]$/i, "K", 3, 0, item);
      this.place(/^[l]$/i, "L", 3, 1, item);
      this.place(/^[m]$/i, "M", 3, 2, item);
      this.place(/^[n]$/i, "N", 3, 3, item);
      this.place(/^[p]$/i, "P", 3, 4, item);
      this.place(/^[X]$/i, "X", 4, 0, item);
      this.place(/^[Y]$/i, "Y", 4, 1, item);
      this.place(/^[Z]$/i, "Z", 4, 2, item);
    }
  },
  methods: {
    place(low, cap, index, sub, item) {
      if (new RegExp(low).test(item[1].slice(0, 1).toLowerCase())) {
        this.classify[index].name[sub][cap].push(item[0]);
      }
    },
    setValue(value) {
      this.region = value;
      setTimeout(() => {
        this.isShow = false;
      }, 10);
    },
    hand(index) {
      this.newindex = index;
      setTimeout(() => {
        this.isShow = false;
      }, 100);
    },
    set() {
      if (this.search.length > 0) {
        this.region = this.search[0].left;
      }
 
      setTimeout(() => {
        this.isShow = false;
      }, 10);
    },
    searchxiaoniu(){
    	
    	switch (this.region){
    		case '北京市':
//  		var currentCity = 'beijing'
    	this.axios.get('/searchCity', {
					params: {
						city: this.region
					}
				})
				.then((response) => {
					this.homestay = response.data;
					console.log(this.homestay);
					const data = this.homestay;
					this.$router.push({name:'beijing',params:{data}});
				this.$store.commit('addInfo',this.homestay);
					
				})
				.catch(function(error) {
					console.log(error);
				});
    			break;
    		
    			
    			case '上海市':
    		
//  		var currentCity = 'beijing'
    	this.axios.get('/searchCity', {
					params: {
						city: this.region
					}
				})
				.then((response) => {
					this.homestay = response.data;
					console.log(this.homestay);
					const data = this.homestay;
					this.$router.push({name:'shanghai',params:{data}});
				this.$store.commit('addInfo',this.homestay);
					
					
//					this.$router.push({path:'/beijing',params:{data:this.homestay}});
					
				})
				.catch(function(error) {
					console.log(error);
				});
    			break;
    		default:
    			break;
    			
    	}
    	
    }
  }
};
</script>
<style lang="less" scoped>
#demo {
  width: 600px;
  margin: 20px 700px;
  position: absolute;
    top: 600px;
    z-index: 99;
  .cityinput {
    width: 260px;
    height: 30px;
    font-size: 18px;
    padding-left: 10px;
    border: 1px solid #d8d8d8;
    margin-bottom: 10px;
    
  }
  .cityinput{
  	width: 260px;
  	height: 60px;
  	font-size: 26px;
  }
  .cityBox {
    width: 380px;
    position: relative;
   background-color: white;
    border: 1px solid #b3cdc0;
    overflow: hidden;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    .tip {
      /*color: #999;*/
      line-height: 20px;
      padding: 5px;
      margin: 0;
      text-indent: 3px;
    }
    & > ul {
      display: flex;
      justify-content: space-around;
      margin: 0;
      padding: 0;
      overflow: hidden;
      list-style: none;
      border-bottom: 1px solid #ddd;
      & > li {
        list-style: none;
        padding: 5px;
        font-size: 14px;
        cursor: pointer;
        display: inline;
        color: #355976;
      }
      & > li.on {
        border-bottom: 1px solid #00a346;
      }
    }
    .tipbox {
      .box {
        dl {
          dt {
            float: left;
            padding-left: 10px;
 
            color: #f30;
            text-indent: 5px;
            font-family: "Lucida console", consolas, "courier new";
            line-height: 22px;
            font-size: 16px;
          }
          dd {
            padding: 0 15px 0 0;
            /*// display: flex;
            // justify-content: space-between;
            // align-items: center;
            // flex-wrap: wrap;
            // flex-direction: column;*/
            span {
              margin-right: 10px;
              cursor: pointer;
              a {
                padding-left: 5px;
                min-width: 66px;
                line-height: 25px;
                display: inline-block;
                color: #333;
                text-decoration: none;
                font-size: 12px;
                &:hover {
                  color: #00a346;
                }
              }
            }
          }
        }
      }
    }
  }
  .hide {
    width: 280px;
    list-style: none;
    margin: 0;
    padding: 0;
    border: 1px solid #b3cdc0;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    overflow: auto;
    max-height: 300px;
    & > ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      padding: 0;
      & > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 5px;
        line-height: 16px;
        height: 16px;
        overflow: hidden;
 
        .left {
          font-size: 12px;
        }
        .right {
          font-size: 12px;
        }
      }
      & > li:last-child {
        .code {
          color: red;
          float: left;
        }
      }
    }
  }
}
.search_btn{
	height: 66px;
	margin-left: 5px;
	font-size: 28px;
}
</style>
