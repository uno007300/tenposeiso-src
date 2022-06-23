export class PriceCategory{
  id= '';
  path = '';
  title = '';
  img = '';
  unit = '';
  category = '';
}

export const priceCategories: PriceCategory[] = [
  {id:'1', path:'', title:'店舗清掃(厨房・トイレ清掃)',img:'', category:'store', unit:'作業時間'},
  {id:'5', path:'', title:'ハウスクリーニング',img:'', category:'house', unit:'作業時間'},
  {id:'4', path:'', title:'エアコンクリーニング',img:'', category:'air', unit:'作業時間'},
  {id:'6', path:'', title:'空室清掃(エアコン清掃・剝離洗浄は別料金)',img:'', category:'room', unit:'作業時間'},
  {id:'2', path:'', title:'床清掃',img:'', category:'floor', unit:'最少面積'},
  {id:'3', path:'', title:'ガラス清掃',img:'', category:'window', unit:'最少面積'},
]

export class Price{
  id= '';
  title = '';
  category = '';
  unitValue = '';
  price = 0;
}
export const prices: Price[] = [
  {id:'1', unitValue:'120分', category:'store', price:13000, title:'レンジフード'},
  {id:'2', unitValue:'120分', category:'store', price:12000, title:'換気扇'},
  {id:'3', unitValue:'90分', category:'store', price:8000, title:'ステンレス壁'},
  {id:'4', unitValue:'90分', category:'store', price:10000, title:'グリストラップ(100タイプ)'},
  {id:'5', unitValue:'120分', category:'store', price:12000, title:'フライヤー'},
  {id:'6', unitValue:'60分', category:'store', price:12000, title:'トイレ(便座分解清掃)'},
  {id:'7', unitValue:'120分', category:'store', price:18000, title:'トイレ全体清掃'},

  {id:'8', unitValue:'50㎡', category:'floor', price:12000, title:'Pタイル洗浄'},
  {id:'9', unitValue:'50㎡', category:'floor', price:18000, title:'Pタイル剝離清掃'},
  {id:'10', unitValue:'50㎡', category:'floor', price:13800, title:'セラミック'},
  {id:'11', unitValue:'50㎡', category:'floor', price:12000, title:'タイルカーペット'},

  {id:'12', unitValue:'20㎡', category:'window', price:6000, title:'ガラス清掃'},
  {id:'13', unitValue:'20㎡', category:'window', price:8000, title:'ガラス清掃(テープ跡あり)'},

  {id:'14', unitValue:'30分', category:'air', price:3500, title:'フィルター清掃'},
  {id:'15', unitValue:'120分', category:'air', price:8500, title:'内部分解清掃(壁かけタイプ)'},
  {id:'16', unitValue:'90分', category:'air', price:14580, title:'内部分解清掃(掃除機能付き)'},
  {id:'17', unitValue:'150分', category:'air', price:18000, title:'内部分解清掃(業務用天かけタイプ)'},
  {id:'18', unitValue:'30分', category:'air', price:6000, title:'室外機'},

  {id:'19', unitValue:'180分', category:'house', price:25000, title:'キッチン全体清掃 '},
  {id:'20', unitValue:'120分', category:'house', price:15000, title:'レンジフード・コンロ周り '},
  {id:'21', unitValue:'120分', category:'house', price:12000, title:'浴室 '},
  {id:'22', unitValue:'120分', category:'house', price:10000, title:'トイレ '},
  {id:'23', unitValue:'60分', category:'house', price:6000, title:'洗面所 '},
  {id:'24', unitValue:'200分', category:'house', price:18000, title:'3点セット(浴室、トイレ、洗面台)'},

  {id:'25', unitValue:'', category:'room', price:26000, title:'１K～１ＤＫ'},
  {id:'26', unitValue:'', category:'room', price:32000, title:'１LDK・２DK'},
  {id:'27', unitValue:'', category:'room', price:36000, title:'２LDK'},
  {id:'28', unitValue:'', category:'room', price:40000, title:'３LDK'},
  {id:'29', unitValue:'', category:'room', price:48000, title:'４LDK'},  
]


export class Menu{
  id= '';
  path = '';
  title = '';
  img = '';
  category = '';
  minutes = '';
}

export class Serivce{
  id='';
  title='';
  path='';
  desc='';
  img='';
  isActive= false;
  beforeImg='';
  afterImg='';
  serviceDetails: ServiceDetail[] = [];
}

export class ServiceDetail{
  id='';
  title='';
  desc='';
}

export const services: Serivce[] = [
  {id: 'tab-2',title: '店舗清掃',path: '#tab-2',desc: 'house',img: 'bi bi-house', isActive: false,beforeImg:'https://fitsys2.blob.core.windows.net/seisopro/images/service/before2.jpg', afterImg:'https://fitsys2.blob.core.windows.net/seisopro/images/service/aftet2.jpg', serviceDetails: [{id:'1', title:'厨房機器のメンテナンス', desc:'エアコンと同じく冷蔵／冷凍機器は冷却フィンがあり、定期的な清掃が必要です。一般的に、冷却フィンの清掃を3年間放置しますと電気代が1.5倍から2倍にアップし、能力は2割から3割ダウンします。店舗清掃.comはエアコンと冷蔵／冷凍機器のコンデンサー及び冷却フィンの清掃も一緒にできますので、割安な価格で費用の節減ができます。'},{id:'2', title:'おすすめは【定期清掃】！！', desc:'店舗をキレイに維持管理するためには専門業者による定期清掃をお勧めします。しかし、名義変更や改装、引き渡しの際に一回だけのスポット清掃を希望する場合もあると思います。店舗清掃.comは一回だけの【スポット清掃】も承りますので、是非ご相談ください。<br><br><strong>全体清掃</strong><br>飲食店をキレイに維持するためには毎日の掃除が大事であります。しかし、お店での清掃では落とせない頑固な汚れもあります。日常の清掃で落とせない汚れを取り除く作業は新店のような快適なスペースを作るだけではなく、集客力が上がり売り上げの増加にもつながります。きれいな店舗管理のために総合的な店舗清掃をお勧めします。<br><br><strong>看板・オーニング清掃</strong><br>長年に渡り営業をしている店の看板やオーニングは、雨やホコリなどで汚れます。お店の顔である看板の清掃は、店舗の美観を高めるだけでなく、集客時に良いイメージを残してくれるので売上アップにも繋がります。看板/オーニングをキレイに保つためには定期的な清掃が必要です。<br><br><strong>床清掃・剥離清掃</strong><br>人の出入りが多い建物の床は汚れやすく、細心の管理が必要です。床のケアは、お客さんの来店時に清潔感を与えるために欠かせない項目です。床材にはフローリング材、Pタイル、石材、カーペットなど色んな材質が使用されており、【材質に合う適切なメンテナンス】は床材の寿命延長と清潔さを維持するため必要となります。床の材質と状態を把握して管理するためには専門業者に任せることをお勧めします。<br><br><strong>窓ガラス・外壁清掃</strong><br>建物の外壁と窓ガラスは、自動車の排気ガスやほこりなどによる汚れが付着するため定期的に清掃が必要です。建物の美観をさらに引き立てるためには、専門業者による施工が必要です。外壁の材質と状態を把握して効果的に施工するためには、専門業者に任せることをお勧めします。<br><br><strong>椅子・パーテイション・ソファー清掃</strong><br>客室や従業員の休憩場所には様々な素材の家具や什器などが配置されており、年月が経つとほこりや油汚れ、手垢などで汚くなってしまいます。お店での日常の清掃でこれらの店舗用家具をキレイに管理することは容易ではないので、専門業者による定期的な清掃をお勧めします。清掃のことで困りましたら【店舗清掃.Com】にご相談ください。<br>'}]},
  {id: 'tab-1',title: '厨房清掃',path: '#tab-1',desc: 'house',img: 'bi bi-house', isActive: true,beforeImg:'https://fitsys2.blob.core.windows.net/seisopro/images/service/before1.jpg', afterImg:'https://fitsys2.blob.core.windows.net/seisopro/images/service/after1.jpg', serviceDetails: [{id:'1', title:'油汚れのメンテナンス', desc:'お店の営業終了後の日常清掃の実施は、ゴキブリの繁殖はネズミの侵入を防ぐための一番大事な項目です。清掃の項目によって周期や範囲を分けて実施するのが効率的であります。しかし、お店では簡単にできないところがあります。店舗清掃の一番の悩みは中々落とせない厨房の頑固な油汚れです。店舗清掃.comは当社だけのノーハウで業務用洗剤と専用機材を使い、厨房の油汚れをキレイに落とします。油周り、コンロ周りのお得な厨房清掃コースもあります。'},{id:'2', title:'１００％自社施工', desc:'清掃業者によっては、エアコンやグリストラップの分解清掃ができない業者や厨房清掃の施工ができない業者もいます。そのため、お店の全体清掃を希望する場合には、数社と連絡を取り、値段の交渉や日程の調整が必要となります。また、清掃料金も高くなってしまいます。店舗清掃.comは客室、厨房、油周り、エアコン、グリストラップ、排水溝、換気扇などの【一括見積が可能】です。特に、休業明けや新規オープンの店舗にお勧めです。<br><br><strong>全体清掃</strong><br>厨房の床は汚れがちです。厨房の床を汚れたまま放置していると、厨房内を移動する際に滑ったり、靴が汚れたりする可能性があります。また、汚れた靴で厨房から店内に出ると、お店全体に油汚れが広がってしまいます。厨房内を清潔な状態に保つためには定期的に清掃を行う必要があります。厨房はお客さまをもてなすために料理を作る重要な場所であるからです。厨房が汚れていると、衛生状態が悪化して安全な食品を提供することが難しくなり、業績にも影響を与えるかもしれません。<br><br><strong>フライヤー清掃</strong><br>フライヤーは油汚れを大量に発生させる要因のひとつです。フライヤーによって生じた油汚れは、発火して火事になる危険性があります。例えば、フライヤーの近くにコンロがあれば、炒め物をしている最中にフライヤー周りの油はねの汚れが発火し、フライヤー自体に引火するかもしれません。フライヤーの油汚れが原因となる火災の危険を避けるためには、定期的に清掃を行う必要があります。油汚れは放置すればするほど落とすのが難しくなるので、蓄積しないようにするのがポイントです。専用洗剤でフライヤーの清掃を行いますと、清潔さが増すだけではなく、フライヤー本体の熱効率が上がり、調理時間が短くなります。【店舗清掃.Com】は専用洗剤を使用し、フライヤー本体の油汚れやコイルの黒焦げまでもキレイに落とします。<br><br><strong>換気扇清掃、レンジフード＆オイルフィルター清掃</strong><br>オイルフィルターは、火災の原因にもなるため定期的な清掃が必須です。放置したままでいると、ホコリに油分付着してフィルターに油分を含んだホコリが溜まります。そのホコリに火がついてしまうと、発火する危険性があるため清掃しないと危険です。加えて、フィルターにオイルが付着していると排気能力が低下し、厨房の気温上昇の原因となります。スタッフの働きやすさとも関連するため、定期的な清掃を行いましょう。コンロやフライヤーの上にはレンジフードが付いています。使用している時間が長いだけに、レンジフードを定期的に清掃している飲食店は多くはありません。しかし、レンジフードは汚れやすい部分の一つです。調理に使用した油が気化して換気扇部分に汚れが溜まるケースが多い傾向にあります。この汚れを放置しておくと、油が溜まり発火するリスクやレンジフード内に溜まった油が料理に垂れて衛生的な問題が生じる可能性もあるため注意が必要です。ファンやレンジフード内部を清掃することで火災のリスクも減らせます。【店舗清掃.Com】は換気扇清掃とレンジフード清掃のプロの清掃会社です。お得なセットメニューもありますので、是非ご相談ください。<br><br><strong>グリストラップ清掃</strong><br>グリストラップの内部は3槽に分かれており、流し台のゴミや油汚れが直接下水に流れないように沈殿や濾過作用を行います。厨房内をキレイに維持するためには定期的にグリストラップ掃除をする必要があります。グリストラップに油脂が溜まると害虫発生と悪臭の原因になります。【店舗清掃.Com】はグリストラップ清掃の際に、生ゴミと油脂を取り除く作業だけではなく、流し台からの配管の清掃までを行うことで、配管の詰まりを未然に防ぎ、快適な厨房環境を維持するたまに心かけています。<br><br><strong>冷蔵庫・製氷機・流し台・作業台清掃</strong><br>エアコンと同じく冷蔵／冷凍庫などの機器は冷却フィンがあり、定期的な清掃が必要です。一般的に、冷却フィンの清掃を3年間放置しますと電気代が1.5倍から2倍にアップし、能力は2割から3割ダウンします。【店舗清掃.Com】は高い技術力を生かし、エアコンと冷却フィンの一括メンテナンスが可能であるため、割安な価格で費用の節減ができます。また、シンクの清掃を行う際は、シンクの中のヌメリ汚れを徹底的に取ることで食品や食器に繁殖するかもしれない雑菌の繁殖を防ぎます。同時に、取手部分も忘れずに除菌することが大切です。取手部分はたくさんの人が触れる部分であるため、雑菌が移って広まる可能性があります。ヌメリ汚れは短期間で発生するため定期的に清掃しましょう。一般的には、営業終了後に簡単な清掃を忘れずに行うことで、ヌメリ汚れや雑菌の繁殖を抑えることができます。【店舗清掃.Com】は、シンクや作業台、冷蔵庫の内外部を徹底洗浄すると共に、除菌・消毒までの作業を同時に行うことで、O-157、ノロウイルス、コロナウィルスなどのリスクを軽減します。安心・安全な厨房清掃は【店舗清掃.Com】にお任せください。<br>'}]},
  
  {id: 'tab-3',title: '事務所清掃 ',path: '#tab-3',desc: 'house',img: 'bi bi-house', isActive: false,beforeImg:'https://fitsys2.blob.core.windows.net/seisopro/images/service/before1.jpg', afterImg:'https://fitsys2.blob.core.windows.net/seisopro/images/service/after1.jpg', serviceDetails: [{id:'1', title:'', desc:'事務所は現代人にとって第2の生活拠点である大事な空間です。　しかし、制限された空間に大勢の人が同時に留まる故に、ほこりやゴミなどの有害な環境に汚染されやすいです。事務所の清掃は会社のイメージアップはもちろん従業員の健康を守れるために欠かせないものであります。事務机などの死角に溜まってあるほこりなどの汚染物質を取り除き、快適な職場環境をつくるためには、専門業者による定期的な清掃が必要です。'},{id:'2', title:'事務所清掃', desc:'飲食店と同じく、事務所の床は大勢の人が往来するために汚れやすく、清潔に保つためには定期清掃がおすすめです。床がキレイであれば事務所の清潔感はアップします。事務所の床材にはフローリング材、Pタイル、石材など色んな材質が使用されており、【材質に合う適切なメンテナンス】は床材の寿命延長と清潔さを維持するため必要となります。床の材質と状態を把握して管理するためには専門業者に任せることをお勧めします。'},{id:'3', title:'カーペットクリーニング', desc:'事務所の床材として広く使われている材質でタイルカーペットがあります。カーペットは鼻炎、皮膚疾患などを誘発するダニやカビが生息する良い条件を備えており、定期的な管理が必要です。事務空間などの広い場所に敷設されたカーペットは、個人が清掃するのが困難であるため、専門のクリーニング業者による定期的な清掃が必要です。'},{id:'4', title:'椅子・パーテイション・ソファー清掃', desc:'事務所内は事務用の机や椅子、本棚やキャビネットなど様々な什器が入ってあり、その配置などが決まってあるため清掃や管理が容易ではありません。長期間にわたって使い続けると椅子やパーテイションなどに汚れがついてしまい清潔感がなくなります。'}]},
  // {id: 'tab-4',title: '窓ガラス清掃',path: '#tab-4',desc: 'house',img: 'bi bi-house', isActive: false,beforeImg:'https://fitsys2.blob.core.windows.net/seisopro/images/service/before2.jpg', afterImg:'https://fitsys2.blob.core.windows.net/seisopro/images/service/aftet2.jpg', serviceDetails: [{id:'1', title:'様々な場所で窓ガラス清掃を行います', desc:'店舗の窓ガラスから会社事務所、医療機関、商業施設や各店舗様のショウウィンドウなど様々な窓ガラス清掃をお受けいたしております。'},{id:'2', title:'店舗の窓ガラス清掃を行います', desc:'窓ガラスの汚れは建物の中から見ても外から見ても非常に美観が悪いものです。 内側にはタバコのヤニやほこり・油汚れ、外側には粉塵や排気ガスの汚れが付着してあり、簡単には落ちないです。 店舗のスタッフが時間をかけて清掃しても仕上がりがわるく、拭きムラなどが残りがちで、清掃前よりも汚く見える場合もあります。 窓の汚れを放置しておくと普通のクリーニングではなかなか取れなくなるため 専門業者による定期的な窓清掃がおすすめです。'},{id:'2', title:'食中毒リスクが低減＆コロナ予防効果', desc:'食中毒は、飲食物を介して感染する消化器異常という意味で、感染症の一種です。 細菌性、ウイルス性、などに分けられますが、特に梅雨から夏場に「細菌性」、冬は、「ウイルス性」が多く見られます。 食中毒やコロナ予防を行うのは、しっかりとした、清掃及び除菌を行うことが大切です。 店舗清掃プロは、店舗内の効果を持続させるため、清掃及び除菌をりっかり行い、店舗内をお守りします。'},{id:'2', title:'食中毒リスクが低減＆コロナ予防効果', desc:'食中毒は、飲食物を介して感染する消化器異常という意味で、感染症の一種です。 細菌性、ウイルス性、などに分けられますが、特に梅雨から夏場に「細菌性」、冬は、「ウイルス性」が多く見られます。 食中毒やコロナ予防を行うのは、しっかりとした、清掃及び除菌を行うことが大切です。 店舗清掃プロは、店舗内の効果を持続させるため、清掃及び除菌をりっかり行い、店舗内をお守りします。'}]},
]

export class WhyUs{
  id='';
  title='';
  desc='';
  link='';
}

export const whyUsItems: WhyUs[] = [
  {id: '01',title: 'プロが施工', link: '',desc: '<strong>清掃経験豊かなプロが施工</strong>します。多くの清掃業者が脱サラや第二の人生で創業し、清掃の専門知識が乏しいまま清掃をしていることも事実です。当社の優秀なスタッフは、長年の清掃経験を持ち、色んな現場で的確な対応ができます。'},
  {id: '02',title: 'スポット清掃', link: '',desc: '維持管理するためには専門業者による<strong>定期清掃</strong>をお勧めします。しかし、名義変更や改装、引き渡しの際に一回だけの清掃を希望する場合もあると思います。店舗清掃.comは一回だけの<strong>スポット清掃</strong>も承りますので、是非ご相談ください。'},
  {id: '03',title: '１００％自社施工', link: '',desc: 'ポータルサイト、ランキングサイトなどを運営し、授受した仕事を丸投げ／横流しなどをして手数料だけの収入を得る会社もいます。<strong>店舗清掃.com</strong>は<strong>１００％自社施工</strong>ですので余計な中間手数料を支払う必要がありませんのでご安心ください。'},
  {id: '04',title: '効率的な費用算出', link: '',desc: '作業難易度×予想時間×人数で見積りをだします。他社に比べて合理的な費用算出で格安の価格が提示できます。'},
  {id: '05',title: '当日見積り／翌日施工', link: '',desc: '最短で当日見積り／翌日施工ができます。お急ぎの場合は夜間清掃など日程の相談も可能です。まずはお問い合わせください。'},
  {id: '06',title: '賠償責任保険に加入済み', link: '',desc: '<strong>店舗の清掃</strong>の際に発生しうる安全事故や物損事故に備えて賠償責任保険に加入済みですのでご安心ください。'},
  {id: '07',title: '一括見積が可能', link: '',desc: '<strong>清掃業者</strong>によっては、エアコンやグリストラップの分解清掃ができない業者や厨房清掃の施工ができない業者もいます。そのため、お店の全体清掃を希望する場合には、数社と連絡を取り、値段の交渉や日程の調整が必要となります。また、清掃料金も高くなってしまいます。<strong>店舗清掃.com</strong>は<strong>客室、厨房、油周り、エアコン、グリストラップ、排水溝、換気扇</strong>などの一括見積が可能です。特に、休業明けや新規オープンの店舗にお勧めです。'},
  {id: '08',title: '割安な価格', link: '',desc: 'エアコンと同じく冷蔵／冷凍庫などの機器は冷却フィンがあり、定期的な清掃が必要です。一般的に、冷却フィンの清掃を3年間放置しますと電気代が１．５倍から２倍にアップし、能力は２割から３割ダウンします。店舗清掃.comはエアコンと冷却フィンのメンテナンスが可能で、コンデンサー及び冷却フィン清掃も一緒にできますので、割安な価格で費用の節減ができますのでぜひおためしください。'},
  {id: '09',title: 'お得な厨房清掃コース', link: '',desc: 'お店の営業終了後の日常清掃の実施は、ゴキブリの繁殖はネズミの侵入を防ぐための一番大事な項目です。清掃の項目によって周期や範囲を分けて実施するのが効率的でありますが、お店では簡単にできないところがあります。<strong>店舗清掃</strong>の一番の悩みは中々落とせない<strong>厨房の頑固な油汚れ</strong>です。店舗清掃.comは当社だけのノーハウで業務用洗剤と専用機材を使い、<strong>厨房の油汚れ</strong>をキレイに落とします。油周り、コンロ周りのお得な<strong>厨房清掃</strong>コースあります。'},
  
]

export class TopNavi{
  id='';
  title='';
  path='';
  img='';
  isActive= false;
}

export class Step{
  id='';
  title='';
  path='';
  desc='';
  img='';
}

export class Event{
  id='';
  title='';
  path='';
  desc='';
  img='';
  price= '';
  sale= '';
  isAtLeastPrice=false;
  isNeedContact = false;
  isCampaign = false;
  eventDetails: EventDetail[] = [];
}

export class EventDetail{
  id='';
  item='';
  img='';
}

// export class Prefecture{
//   name='';
//   cover='';
//   cities: City[] = [];
// }

// export class City{
//   name='';
// }

// export const areas: Prefecture[] = [
//   {name:'東京都', cover:'',cities:]{name:}}]
// ]

export class Faq{
  id='';
  title='';
  desc='';
}

export const faqs: Faq[] = [
  {id:'faq1', title:'安さの理由？',desc:'A.弊社では、<strong>店舗清掃</strong>・<strong>厨房清掃</strong>に関することなら自社スタッフによる直接施行を原則としておりますので、外注や下請け等の余分なコストが発生しません。そのため、他社よりもお安い料金で施工が可能となっております。'},
  {id:'faq2', title:'対応エリアは？',desc:'A.<strong>東京都</strong>を中心に、<strong>神奈川県</strong>、<strong>埼玉県</strong>、<strong>千葉県</strong>からのご依頼を多く頂いております。'},
  {id:'faq3', title:'工事の日程は指定できるの？',desc:'A.工事の日にちとお時間のご指定は可能でございます。お客様のご都合にあわせて、夜間の作業もご指定いただけます。'},
  {id:'faq4', title:'予約は何日前までにすればいいの？',desc:'A.特に定めておりませんので、お気軽にお問い合わせ下さい。ただし、混雑状況によっては直前のご予約が難しい場合がございます。施工ご希望日の数週間前など、余裕を持ってのご予約をお願い致します。'},
  {id:'faq5', title:'工事料金の他に、必要な費用はあるの？',desc:'A.近隣のコインパーキング等を利用する場合は 駐車料金 が別途必要となります。'},
  {id:'faq6', title:'現地調査は必ず必要？',desc:'A.<strong>厨房清掃</strong>は、設備や建物の設計・仕様と汚れの状態を必ず確認しないと、お見積りも施工計画もお作りできないので、 基本的には弊社スタッフによる現地調査が必要となります。ただし、清掃の内容によってはメールやラインによる写真で判断する場合もございます。'},
  {id:'faq7', title:'見積りや現地調査は無料なの？',desc:'A.お見積りと現地調査ともに 通常は無料 です。'},
  {id:'faq8', title:'作業前の準備は？',desc:'A.<strong>厨房</strong>内の荷物は、施工前に弊社スタッフが適宜移動して作業を行いますので、多少荷物があっても問題ありません。また、弊社では衛生面に配慮し、移動が難しい物に関しては下記写真のように“養生シート”で保護して作業を行います。しかしやはり、余分な物が無いに越したことはないので、ある程度（通路や施工箇所を塞がない程度）に片付けて頂けると、施工に万全を期す事ができます。特に食品などは予めお客様側で別の場所へ移動しておいていただけると、より安全に施工できます。'},
  {id:'faq9', title:'施工時間はどれぐらいかかるの？',desc:'A.<strong>厨房</strong>の広さや施工内容によって大きく異なりますが、通常は6～8時間を目安としております。　ただし、汚れの程度によっては、これよりも長くなってしまう場合があります。'},
  {id:'faq10', title:'見積に無い項目を、当日に追加できる？',desc:'A.当日の作業項目の追加は基本的にはお請けできません。追加に関しては、なるべく前日までにお知らせ下さいますようお願い申し上げます。'},
]

export const events: Event[] = [
  {id: 'event1',isCampaign: false, title: '小型店油汚れ清掃プラン',isAtLeastPrice:true, isNeedContact: false, path: '#',img: 'https://fitsys2.blob.core.windows.net/seisopro/images/main/setprice1.jpg', price:'35000', sale:'35000', eventDetails: [{ id:'1', item:'ダクト・フード', img:''},{ id:'1', item:'換気扇', img:''}], desc:'小型店を応援するための<strong>お得なプラン</strong>です。<strong>厨房の頑固な油汚れ</strong>をキレイに落とします。'},
  {id: 'event2',isCampaign: true, title: '小型店厨房丸洗いプラン',isAtLeastPrice:false, isNeedContact: false, path: '#',img: 'https://fitsys2.blob.core.windows.net/seisopro/images/main/setprice2.jpg', price:'60000', sale:'70000', eventDetails: [{ id:'1', item:'ダクト・フード', img:''},{ id:'1', item:'換気扇', img:''},{ id:'1', item:'フライヤー', img:''},{ id:'1', item:'コンロ', img:''},{ id:'1', item:'4ドア冷蔵庫', img:''},{ id:'1', item:'コールドテーブル', img:''},{ id:'1', item:'流し台', img:''},{ id:'1', item:'作業台', img:''},{ id:'1', item:'厨房床', img:''}], desc:'小型店の全体清掃時にお得なプランです。（ドライキッチンは不可）小型店<strong>油周り清掃プラン</strong>に加えて4ドア冷蔵庫や流し台などステンレス製の什器についている汚れまでもきれいに落とせます。作業後には<strong>厨房</strong>内のゴミのかき出しや床のアルカリ洗浄を行います。厨房の全体清掃をお考えの方にお勧めです。'},
  {id: 'event3',isCampaign: false, title: '小型店トータルリセットプラン',isAtLeastPrice:false, isNeedContact: true, path: '#',img: 'https://fitsys2.blob.core.windows.net/seisopro/images/main/setprice3.jpg', price:'200000', sale:'210000', eventDetails: [{ id:'1', item:'ダクト・フード', img:''},{ id:'1', item:'換気扇', img:''},{ id:'1', item:'フライヤー', img:''},{ id:'1', item:'コンロ', img:''},{ id:'1', item:'4ドア冷蔵庫', img:''},{ id:'1', item:'コールドテーブル', img:''},{ id:'1', item:'流し台', img:''},{ id:'1', item:'作業台', img:''},{ id:'1', item:'厨房床', img:''},{ id:'1', item:'グリーストラップ', img:''},{ id:'1', item:'業務用エアコン2台', img:''},{ id:'1', item:'客室床清掃・ワックス掛け', img:''},{ id:'1', item:'客室トイレ2室', img:''},{ id:'1', item:'店頭ガラス清掃', img:''}], desc:'厨房丸洗いプランに<string>　グリーストラップ　業務用エアコン　客室の床清掃・ワックス掛け　客室トイレ　店頭のガラス清掃</strong>まで　お店全体の大掃除を行います。名義変更店や新規オープン店など全体にわたって清掃やメンテナンスが必要な場合お得なプランです。特に、コロナ休業後の営業再開を目指している方にお勧めです'},
  {id: 'event4',isCampaign: false, title: '中型店トータルリセットプラン',isAtLeastPrice:false, isNeedContact: true, path: '#',img: 'https://fitsys2.blob.core.windows.net/seisopro/images/main/setprice4.jpg', price:'450000', sale:'460000', eventDetails: [{ id:'1', item:'ダクト・フード×2', img:''},{ id:'1', item:'換気扇×2', img:''},{ id:'1', item:'フライヤー', img:''},{ id:'1', item:'コンロ', img:''},{ id:'1', item:'4ドア冷蔵庫', img:''},{ id:'1', item:'コールドテーブル', img:''},{ id:'1', item:'流し台×2', img:''},{ id:'1', item:'作業台×3', img:''},{ id:'1', item:'厨房床', img:''},{ id:'1', item:'グリーストラップ', img:''},{ id:'1', item:'業務用エアコン6台', img:''},{ id:'1', item:'客室床清掃・ワックス掛け', img:''},{ id:'1', item:'客室トイレ2室', img:''},{ id:'1', item:'店頭ガラス清掃', img:''}], desc:'清掃項目は小型店トータルリセットプランと同じですが、店の規模が大きくなると什器や機材の数が多くなり、通常の見積りですとすぐに数十万の金額になってしまいます。中型店トータルリセットプランは、通常の見積り金額より３割～４割も安くなるお得なプランです。客席数80席程度の中型店で全体清掃をお考えの方は是非ご検討ください。'},
]


export const steps: Step[] = [
  {id: 'Step1',title: 'まずはお問い合わせ',path: '#',img: 'bi bi-house', desc:'まずは、電話、メールでご連絡ください。当社のスタッフが敏速に対応します。'},
  {id: 'Step2',title: '無料見積り',path: '#',img: 'bi bi-house', desc:'電話、メールでのお問い合わせにお見積もりをいたします。お<strong>見積もりは無料</strong>で、追加料金は発生しません。店舗の場合は訪問での見積りが必要な場合があります。'},
  {id: 'Step3',title: '作業日の決定',path: '#',img: 'bi bi-house', desc:'作業内容や費用などが決まりましたら作業日を決定します。'},
  {id: 'Step4',title: '作業開始',path: '#',img: 'bi bi-house', desc:'ご指定いただいた作業日時に当社のスタッフがお伺いいたします。 当日はお客様がご満足、ご納得いただけるよう、迅速・丁寧・安全に作業を行います。'},
  {id: 'Step5',title: '作業完了後お支払い',path: '#',img: 'bi bi-house', desc:'作業が終わりましたら、お客様に最終チェックをしていただきます。ご納得いただけましたら作業は終了し、お支払いとなります。'},
]



export const topNavis: TopNavi[] = [
  // {id: 'intro',title: 'ホーム',path: '#intro',img: 'bi bi-house', isActive: true},
  {id: 'about',title: '紹介',path: '#about',img: 'bi bi-house', isActive: false},
  {id: 'whyus',title: '選ばれる理由',path: '#whyus',img: 'bi bi-house', isActive: false},
  {id: 'price',title: '料金表',path: '#price',img: 'bi bi-house', isActive: false},
  {id: 'setprice',title: 'セット価格',path: '#setprice',img: 'bi bi-house', isActive: false},
  {id: 'step',title: '作業の流れ',path: '#step',img: 'bi bi-house', isActive: false},
  {id: 'service',title: 'サービス',path: '#service',img: 'bi bi-house', isActive: false},
  {id: 'faq',title: 'FAQ',path: '#faq',img: 'bi bi-question', isActive: false},
  
  // {id: 'works',title: '実績',path: '#works',img: 'bi bi-house', isActive: false},
  //{id: 'staff',title: 'スタッフ',path: '#staff',img: 'bi bi-house', isActive: false},
  //{id: 'contact',title: 'お問い合わせ',path: '#contact',img: 'bi bi-house', isActive: false},
]

export const menus: Menu[] = [
 
  {id: '1',path: '#',title: 'キッチン',category: 'house',minutes: '90分',img: 'bi bi-house'},
  {id: '2',path: '#',title: 'レンジダクト・フード',category: 'house',minutes: '100分',img: 'bi bi-house'},
  {id: '3',path: '#',title: '浴室',category: 'house',minutes: '120分',img: 'bi bi-house'},
  {id: '4',path: '#',title: 'トイレ',category: 'house',minutes: '60分',img: 'bi bi-house'},
  {id: '5',path: '#',title: '洗面所',category: 'house',minutes: '60分',img: 'bi bi-house'},

  {id: '6',path: '#',title: '壁かけタイプ',category: 'aircon',minutes: '60分',img: 'bi bi-layers-half'},
  {id: '7',path: '#',title: '室外機',category: 'aircon',minutes: '30分',img: 'bi bi-layers-half'},
  {id: '8',path: '#',title: 'エアコン(掃除機能付き)',category: 'aircon',minutes: '90分',img: 'bi bi-layers-half'},

  {id: '9',path: '#',title: 'レンジダクト・フード',category: 'store',minutes: '120分',img: 'bi bi-shop-window'},
  {id: '10',path: '#',title: '換気扇(45㎝タイプ)',category: 'store',minutes: '100分',img: 'bi bi-shop-window'},
  {id: '11',path: '#',title: 'ステンレス壁',category: 'store',minutes: '40分',img: 'bi bi-shop-window'},
  {id: '12',path: '#',title: 'グリストラップ(100タイプ)',category: 'store',minutes: '90分',img: 'bi bi-shop-window'},
  {id: '13',path: '#',title: 'トイレ',category: 'store',minutes: '40分',img: 'bi bi-shop-window'},
  {id: '14',path: '#',title: 'フライヤー',category: 'store',minutes: '60分',img: 'bi bi-shop-window'},
  {id: '15',path: '#',title: '配管清掃',category: 'store',minutes: '120分',img: 'bi bi-shop-window'},

  {id: '16',path: '#',title: 'Pタイル洗浄',category: 'floor',minutes: '30m * 30m',img: 'bi bi-layout-three-columns'},
  {id: '17',path: '#',title: 'Pタイル剥離清掃',category: 'floor',minutes: '30m * 30m',img: 'bi bi-layout-three-columns'},
  {id: '18',path: '#',title: 'セラミック',category: 'floor',minutes: '30 * 30m',img: 'bi bi-layout-three-columns'},
  {id: '19',path: '#',title: 'タイルカーペット',category: 'floor',minutes: '30m * 30m',img: 'bi bi-layout-three-columns'},

  {id: '20',path: '#',title: 'ガラス清掃',category: 'window',minutes: '50分',img: 'bi bi-grid'},
  {id: '21',path: '#',title: 'ガラス清掃(テーブル跡)',category: 'window',minutes: '30分',img: 'bi bi-grid'},
]