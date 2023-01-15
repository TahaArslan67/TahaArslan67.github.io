var tarot = document.querySelector(".tarot");
var tarotkartsayisi = Math.trunc(Math.random()*78)+1;
console.log(tarotkartsayisi);
tarot.src= `tarot-${tarotkartsayisi}.jpg`;
var tarotkartsayisitutucu = tarotkartsayisi;
var falinabak = document.querySelector(".btn-bordered-black2");
var gizlenen1 = document.querySelector(".tarotresmikutusu");
var gizlenen2 = document.querySelector(".asdasd");
var gizlenen3 = document.querySelector(".icerik");
var gizlenen4 = document.querySelector(".btn-bordered-black");
var gizlenen5 = document.querySelector(".asdasd2");
var gizlenen6 = document.querySelector(".btn-bordered-black3");
var ii = document.querySelector(".dasdas");
const icerik = document.querySelector(".icerik");
var i = 0;

ii.textContent = i;
function anasayfayadon(){
    window.location.href ="tarot1.html" ;
}
function sonraki(){
   








    document.title = `${i}. KART`
    falinabak.classList.add("hidden");
    gizlenen1.classList.remove("hidden");
    gizlenen3.classList.remove("hidden");
    gizlenen4.classList.remove("hidden");
    gizlenen5.classList.remove("hidden");
    gizlenen5.classList.remove("hidden2");
    if(i<=6){
        i++;
        ii.textContent = i;
        document.title = `${i}. KART`
        if(i==7){
            gizlenen4.classList.add("hidden");
            gizlenen6.classList.remove("hidden");
        }
    }

    if(i==1){
        gizlenen5.textContent = "1. kart sorunuzla ilgili geçmişten gelen etkileri ortaya koyar."
    }
    else if(i==2){
        gizlenen5.textContent = "2. kart şu anki durumla ilgili bilgi verir."
    }
    else if(i==3){
        gizlenen5.textContent = "3. kart gizli kalmış olabilecek etkileri gösterir."
    }
    else if(i==4){
        gizlenen5.textContent = "4. kart size ve duruşunuza dair bilgiler verir."
    }
    else if(i==5){
        gizlenen5.textContent = "5. kart başkalarının etkisini gösterir."
    }
    else if(i==6){
        gizlenen5.textContent = "6. kart yapmanız gerekenlere dair ipuçları verir."
    }
    else if(i==7){
        gizlenen5.textContent = "7. kart ise sorunuzla ilgili sonuç ve cevap kartıdır."
    }













    tarotkartsayisi = Math.trunc(Math.random()* 78)+1;
    yenitarotkarti = tarotkartsayisi;

if(tarotkartsayisi==tarotkartsayisitutucu){

    console.log(tarotkartsayisitutucu);
    tarotkartsayisi = Math.trunc(Math.random()*78)+1;
    console.log(tarotkartsayisi);
    console.log("1 kere aynı geldi");
}
else{
    console.log("BAŞARILI");
}
if(tarotkartsayisi==tarotkartsayisitutucu){

console.log(tarotkartsayisitutucu);
    tarotkartsayisi = Math.trunc(Math.random()*78)+1;
    console.log(tarotkartsayisi);
    console.log("2 kere aynı geldi");
}
if(tarotkartsayisi==tarotkartsayisitutucu){

console.log(tarotkartsayisitutucu);
    tarotkartsayisi = Math.trunc(Math.random()*78)+1;
    console.log(tarotkartsayisi);
    console.log("3 kere aynı geldi");
}
if(tarotkartsayisi==tarotkartsayisitutucu){

console.log(tarotkartsayisitutucu);
    tarotkartsayisi = Math.trunc(Math.random()*78)+1;
    console.log(tarotkartsayisi);
    console.log("4 kere aynı geldi");
}
if(tarotkartsayisi==tarotkartsayisitutucu){

console.log(tarotkartsayisitutucu);
    tarotkartsayisi = Math.trunc(Math.random()*78)+1;
    console.log(tarotkartsayisi);
    console.log("5 kere aynı geldi");
}
tarotkartsayisitutucu = tarotkartsayisi;
console.log(tarotkartsayisi);
    tarot.src= `tarot-${tarotkartsayisi}.jpg`;
if(tarotkartsayisi==1){
icerik.textContent= "Paranın, gücün, ihtiras ve iktidarın gözünüzü aldığı bir dönemden geçiyor olabilirsiniz. Yanlış yapmamak adına çok dikkatli ve temkinli davranmanıza işaret eden bir kart. Hırs, para ve güç sizi aldatmış olabilir veya her an aldatabilir, bu tuzaklara dalıp kaybolmamış olmaya dikkat etmelisiniz. En uyarıcı kartlardan biridir. İyi tarafınızı, temiz kalbinizi korumanız gerektiği uyarısında bulunur.Bu dönemde ilişkiler anlamında aşırı bağımlılıklara, maddi ve manevi köleliğe işaret eder. Bunlardan kurtulmak için korkularınızla yüzleşmeniz gerekebilir. İyi tarafta kalmak, kötü tarafa dalmak arasında karar vermek ve doğruyu seçmek zorundasınız. Bu dönem karşınıza, zengin, kibirli, güç tutsağı kişileri çıkarabilir, bu kişilerin etkisinde kalmamaya dikkat etmelisiniz.";
}
else if(tarotkartsayisi==2){
    icerik.textContent= "Başarılarınızın, ulaştığınız hedeflerin ardından maddi yönden taltif edilebilirsiniz. Kazançlarınız, gelirleriniz artabilir. Bu durumla birlikte cömert, yardımsever ve iyiliksever yönlerinizi büyük bir alçak gönüllükle ortaya koyabilirsiniz.Etrafınızda yardımınızı bekleyen ve size el uzatan çok fazla kimse olabilir. Siz de gönlübol bir şekilde yardımlarına koşabilirsiniz ancak herkese eşit ve adaletli davrandığınızdan emin olmalısınız, bunun hesabını siz de yapmak isteyebilir, kimsenin hakkını yememeye özen gösterebilirsiniz. Verdiğinizden çok fazlasını alabileceğinizi unutmayın.";
}
else if(tarotkartsayisi==3){
    icerik.textContent= "Birden aldığınız haberler yönünüzü değiştirmenize neden olabilir. Ortaya çıkan durumlar karşısında hızlı bir şekilde karar almanız gereken bir süreçte olabilirsiniz. Karşınıza hızlı düşünen kurnaz biri çıkabilir. Bu kişi genç bir erkek olabilir. Ondan pratik bazı fikirler alabilirsiniz ancak sizi yanıltabilir ve hayal kırıklığı getirebilir.Kararlarınızı verirken kendi deneyimlerinize, sezgilerinize ve sağduyunuza güvenmek durumundasınız. Titizlikle düşünüp tartmadan adım atmamaya çalışın ancak çok fazla zamanınız olmayabilir.";
}
else if(tarotkartsayisi==4){
    icerik.textContent= "İçinde bulunduğunuz şartlarda eliniz kolunuz bağlı şekilde hissedebilirsiniz. Negatif anlamlar taşıyabilecek bu kart bir kaza veya elim bir olayla da ilişkilendirilebilir. Sıkıntılarınızın üstesinden gelmek için cesur ve metin olmalı, korku ve kaygılarınızla yüzleşmelisiniz.Başkalarının yardımına başvurmaktan ve bir uzman yardımı almaktan da çekinmemelisiniz. Karanlık bir durumda dahi bir Güneş, aydınlık ve umut ışığı olduğunu unutmayın.";
}
else if(tarotkartsayisi==5){
    icerik.textContent= "Tehlike içinde olabileceğiniz bir durumu gösterebilir. Bir hastalık, zor bir durum, bir kişinin tehdidi altında kalmış olabilirsiniz.Olumsuz anlamları çağrıştıran bu kart sırtınızdan vurulmuş olduğunuzu başka bir deyişle ihanet, hırsızlık veya yalana maruz kalmış olabileceğinizi de gösterir. Bir tür dibe vurmuş olma hissi söz konusu olabilir. Bir kayba, terkediliş veya ayrılığa da maruz kalmış olabilirsiniz.";
}
else if(tarotkartsayisi==6){
    icerik.textContent= "Mutsuz sonlardan kendinizi suçluyor olabilirsiniz. Ayrılıkların, kopan ilişkilerin, başarısız iş veya anlaşmaların ardından kendinizi iyice içine kapattığınız, yalnız ve çaresiz hissettiğiniz bir dönemden geçiyor olabilirsiniz.Adeta karalar bağlamış bir durum içinde umut ışığını görmekte zorlanabilirsiniz. Bunun nedeni terk edilmişlik hissiyatı olabilir. Ancak bunun bir histen ibaret olduğunu unutmayın. Her şey sandığınız kadar kötü olmayabilir, gerçekçi olup bardağın dolu tarafını görmeye çalışın.";
}
else if(tarotkartsayisi==7){
    icerik.textContent= "Özlem, hasret, nostalji kartını seçtiniz. Geçmişi, gençliğinizi, çocukluğunuzu özlüyor olabilirsiniz. Özlem hissi uyandıran olaylar gündeme gelebilir. Çocukluk aşkınızla, ilk veya eski aşkınızla karşılaşabilir, romantik hisler içinde olabilirsiniz.Özünüzü, sizi siz yapan değerleri ya da unuttuğunuz özelliklerinizi hatırlayabilirsiniz. Bu hatırlayış, geçmişe dönüş size şimdiki, günlük sorunlarınızda yardımcı olabilir, ailenizden, köklerinizden, geçmişinizden aldığınız desteği yadsımamalısınız.";
}
else if(tarotkartsayisi==8){
    icerik.textContent= "Yepyeni duyguların ve aşkın habercisidir. Kalbinizin yeni heyecanlar ve tutkularla attığı bir döneme işaret eder. Daha önce hiç tatmamış olduğunuz duygular içinde olabilirsiniz.Mutluluk, sevgi, dostluk göstergesi olabilir. Sosyal bir yaşamı işaret eder. Son derece olumlu, umutlarınızı yeşerten anlamlar içerir. Romantik bir ilişki ve evlilik göstergesi olabilir. Mevcut ilişkinizde hediyeler alabilirsiniz.";
}
else if(tarotkartsayisi==9){
    icerik.textContent= "Etrafınızda maddi açıdan güçlü, zengin bir kişiden gördüğünüz ya da görebileceğiniz bir destekle işlerinizi ve maddi durumunuzu yoluna koyabilirsiniz. Maddi anlamda, iş anlamında önemli bir tavsiye size yol gösterebilir. Bu konularda bilgili kişilerle sözgelimi bankacılarla bir araya gelebilirsiniz.Bir kredi veya ödeme durumunuz varsa sözgelimi bu kişinin tavsiyesi, yol yordam göstermesi epeyce işinize yarayabilir. Parasal destek de görebilirsiniz ancak her şekilde bunun bir karşılığı olacağını aklınızdan çıkarmamalısınız.";
}
else if(tarotkartsayisi==10){
    icerik.textContent= "Hayatın olumsuz yanlarına çok fazla odaklanmış olabilirsiniz. İyilikleri ve yaşamın iyi yönlerini görmekte zorlanabilirsiniz. Bu durum sosyal yaşamdan elinizi eteğinizi çekmenize, arkadaşlarınızdan uzaklaşmanıza sebep olabilir.Genel olarak sıkıntılı, memnuniyetsiz bir görünüm veya ifade içinde olabilirsiniz. Bu durumun çok da yerinde olmadığını, bazı noktalarda şükretmeniz gerektiğini unutmamalısınız.";
}
else if(tarotkartsayisi==11){
    icerik.textContent= "Güzel haberler alabilirsiniz. Sözgelimi beklediğiniz telefon veya mesaj gelebilir. İstediğiniz bir iş veya gelişme gerçekleşebilir. Sevdiğiniz kişiden beklediğiniz teklifi alabilirsiniz. İyimserlik dolu, pozitif bir karttır.Bu kart yaşamınızdaki genç kişileri, dinamik ve sportif insanları temsil eder. Bu kişilerin hayatınıza etki ettiğini, girdiğini gösterir, bu durumdan olumlu etkilenebilir, siz de bu havaya bürünebilir, gençlik aşısı olmuş gibi heyecanlı, naif, cesur hissedebilirsiniz kendinizi.";
}
else if(tarotkartsayisi==12){
    icerik.textContent= "Hızlı bir dönemden geçiyor olabilirsiniz. İnsiyatif ve girişimler için uygun bir dönem. Uzun bir süre sabırla ve temkinle bekledikten sonra artık bir girişimde bulunmaya kendinizi hazır hissedebilirsiniz.Bir iş teklifi, bir ortaklık girişimi gündeme gelebilir. Kendinizi aniden bir anda bir yolculukta, gezide de bulabilirsiniz. Yeni tanışıklıklar ve ziyaretler söz konusu olabilir. Güzel haberler alabilirsiniz.";
}
else if(tarotkartsayisi==13){
    icerik.textContent= "Ne varsa köklerinizde, geçmişinizde ve ailenizde olduğunu düşünebilirsiniz. Ailenizin veya babanızın sahip olduğu imkanlardan yararlanabilirsiniz. Etrafınızda zengin aile bireyleri ve akrabaları bulabilir, onlardan destek görebilirsiniz.Miras gündeme gelebilir. İş yaşamınızda başarılarınızla taltif edilebilir ve baba gibi bir figürün, bir patronun desteğini alabilirsiniz. Para ve maddi imkanların bollaşması söz konusu olabilir.";
}
else if(tarotkartsayisi==14){
    icerik.textContent= "Kalp kırıklığına, hayal kırıklığına, sevgilinin kaybına ve hüzne işaret eden bir karttır. Ayrılık ve kopuş anlamına gelebilir. Aşkta, romantizmde yağmurlu, kapalı günlerin habercisidir. Geçmişte yaşanmış bir hayal kırıklığının yeniden kalp ağrıtıcı bir şekilde ortaya çıkışına da tanıklık edebilirsiniz.Canınız sıkılabilir, kalbiniz buruk olabilir. Moralinizi yüksek tutmaya çalışmalısınız. Sağlık açısından ameliyat veya operasyona işaret edebilir. Kalp hastalıkları ya da bir yakınınızın hastalığı gündeme gelebilir.";
}
else if(tarotkartsayisi==15){
    icerik.textContent= "Gücünüz yeteneklerinizde ve yaratıcılığınızda saklı olabilir. Tüm zorlukların üstesinden gelirken sizi siz yapan özellikleri ortaya koyabilirsiniz. Deneyimleriniz size ışık tutuyor ve bunları hiç denenmemiş ve farklı şekillerde uygulama yetisine sahipsiniz. Başarınızın sırrı becerilerinizde. Bunları geliştirmek adına önemli bir zaman diliminden geçmiş olabilirsiniz.Uzman bir kişinin yardımıyla ayağa kalkmış olabilirsiniz. Bu kişi hayatınızı olumlu yönde destekleyen taraflarıyla önemli bir yere sahip.";
}
else if(tarotkartsayisi==16){
    icerik.textContent= "Yaşamın kraliçesi, tabiat ana kartı anaç yönlerinizi, şefkat, merhamet duygularınızı, koruyucu, kollayıcı yönlerinizi ortaya çıkarmış durumda. Yaşamınızda anne rolü olan bir kişinin desteği de dikkat çekiyor. Verimlilik, üretkenlik öne çıkıyor.Aile konularının içine gömülmüş olabilirsiniz. Köklerin, ataların, geçmişin etkisini güçlü bir şekilde hissettiren bu kart eve ve yuvaya dönüş, hasret ve özlem duygularıyla bağdaştırılabilir. Hamilelik ve doğum ile ilişkilendirilebilir. Bir çocuğun, işin, uğraşın doğuşu müjdelenmiş olabilir.";
}
else if(tarotkartsayisi==17){
    icerik.textContent= "Aynı anda pek çok işi, mecburiyeti yerine getirmek zorundasınız. Görev ve sorumluluklar becerilerinizi ortaya çıkarmanızı bekliyor olabilir. Maddi konularda da önemli bir çıkış gerçekleşmemiş olabilir. Çok yoruluyor az kazanıyor ve ancak açıkları kapatıyor durumda kalmış olabilirsiniz. İşlerinizden artık eski zevki almıyor, sıkılıyor olabilirsiniz.Eskiden keyifli gördüğünüz uğraşlar artık bir iş haline dönüşmüş olabilir. Belki bir değişiklik yapma zamanı gelmiş olabilir.";
}
else if(tarotkartsayisi==18){
    icerik.textContent= "Aileniz ve sevdiklerinizle birlikte mutluluğun tadını çıkarma zamanında olabilirsiniz. Güvel ve keyifli bir davete katılabilirsiniz. Mutlu ilişkileri ve aile ortamına işaret eden bu kart oldukça pozitif anlamlar içermektedir.Umut ve düşleriniz gerçekleşmiş olabilir. Evlilik ve birlikteliğinizde mutluluğu yakalamış olabilirsiniz.";
}
else if(tarotkartsayisi==19){
    icerik.textContent= "Geri çekilme ve kendini dinleme zamanına işaret ediyor. Boşlukta bir zaman olabilir. Bu zaman diliminde herhangi aksiyonda veya girişimde bulunmak yerine beklemek, dinlenmek, kişileri, olayları, durumları geriden izleyip gözlemlemek çok daha doğru olabilir.Sizden beklenmeyen bir zamanda veya durumda her şeyi bırakıp tam ters ve aksi yönde bir tutum veya davranış sergilemiş ve etrafınızdakileri şaşırtmış olabilirsiniz. Tam da bu noktada dünyevi ve maddi hırsların dışında ve ötesinde çok daha bilge, anlayışlı ve toleranslı, insancıl ve hümanist yönlerinizi cömertçe sergileyebilirsiniz.";
}
else if(tarotkartsayisi==20){
    icerik.textContent= "Uzun bir bekleyiş ve sabrın ardından beklediğiniz haberi, iş haberini alabilirsiniz. Bu bir ödül ve beklentilerinizin karşılık bulma zamanı olabilir. Beklediğiniz mesaj gelebilir, telefonunuz çalabilir, aranabilirsiniz.Eğitim alıyorsanız, güzel notlar alacağınız bir dönemi işaret edebilir. Yeteneklerinizi, becerilerinizi gösterebileceğiniz bir iş veya imkan teklifi de söz konusu olabilir. Bir ilişki veya aşk söz konusuysa duygulardan ziyade aile beklentileri, maddi beklentiler ön planda olabilir.";
}
else if(tarotkartsayisi==21){
    icerik.textContent= "Yeni başlangıçları işaret eden önemli kartlardan biri olan bu kart olumlu anlamlar içeriyor. Almış olduğunuz ve alacağınız riskler sizi düşündüğünüzden çok farklı noktalara taşıyabilir. Bu kartta masumiyet kadar liderlik ruhu da var. Öncü, girişimci yanlarınızı ortaya koymaktan çekinmeyen yapınız öne çıkmış durumda.Çocuksu yönlerinizi güçlü bir biçimde ortaya koyarken çok da uzun vadeli ve derin düşünmemiş olabilirsiniz. Önemli atılımlar için de bu gerekli değil mi? Karşınıza çıkan fırsatlar size göz kırparken mucizevi başlangıçların ilk adımını atmış olabilirsiniz.";
}
else if(tarotkartsayisi==22){
    icerik.textContent= "Yaşamın gerçekleştirdiklerinizle ve başarılarınızla en tepe noktası. Bir otorite konumunda ve çevrenize adalet, güç, mevki dağıtıyor durumdasınız. Bu özelliklerinizle son derece dikkat çekici, ortada, bilinir, meşhur bir yere sahipsiniz. Planlarınızı, hedeflerinizi gerçekleştirmiş ve onlara artık ulaşmış durumda biri olarak başkalarını bundan faydalandırma aşamasında olabilirsiniz.Gerek işinizde gerek özel hayatınızda baskın ve otoriter yanınızı ortaya çıkarma zamanı. Organizasyon becerilerinizi, düzen disiplin anlayışınızı, görev ve sorumluluk inancınızı sergileyebilirsiniz. Dominant tutumunuzun çevrenizde stres yarattığı göz ardı edilmemeli.Çevrenizde bir babanın ve dominant ve otoriter bir kimsenin varlığı bu dönemde oldukça dikkat çekici.";
}
else if(tarotkartsayisi==23){
    icerik.textContent= "Ego, kibir ve aşırı gururun ön plana çıktığı bir dönemden geçiyor olabilirsiniz. Kendi kabahat ve başarısızlıklarınızdan ötürü başkalarını suçluyor olabilirsiniz. Gerçekçi olmalı durumunuzu kabul etmeli, aşırı gurur ve arzuları bir kenara bırakmalısınız.Bu duyguları sergileyen olabileceğiniz gibi etrafınızda da egosu yüksek insanlar bulunabilir. Görünmeyen, gizli kıskançlıklar olabilir ve bu kişilerin verebileceği zararlar gündeme gelebilir.";
}
else if(tarotkartsayisi==24){
    icerik.textContent= "Ödül, kazanç ve takdir zamanını gösterir. Destenin yine en olumlu kartlarından biridir. Her neyle uğraşıyorsanız veya neyin mücadelesini veriyor olursanız olun başarı sizindir. Herkesin görüp onaylayacağı başarılara imzanızı atabilirsiniz. Yakın çevrenizde sizi beğenen, alkışlayan, takdir eden kişiler olabilir.Tam bir parti havası yaşayabilirsiniz. Düğün dernek, coşku, kutlamalar söz konusu olabilir. Başarı ve mutluluğunuzun tadını çıkarmalısınız. Uzak yol ve yolculukların, seyahatlerin kapısı aralanıyor olabilir.";
}
else if(tarotkartsayisi==25){
    icerik.textContent= "Hayatın zorlukları ardından yalnız ancak güçlü kalan bir kadını temsil edebilir. Yaşamınızda böyle bir kadının varlığını hissedebilirsiniz. Bu kişi anneniz, boşanmış bir arkadaşınız ya da akrabanız olabilir. Sizin için ise ne olmuş olursa olsun kendi yoluma gitmeliyim dedirten, akılcılığa yönlendiren, duyguları bastıran hatta bir miktar duygusuz kılan bir döneme işaret edebilir. Bu dönemde soğukkanlı hareket edebilir ve bu tavrınızla gündelik yaşamınızı ve işlerinizi bir düzene sokabilirsiniz.İlişkilerinizde genel olarak mesafeli bir tavrınız olabilir, yalnız hareket etmeyi tercih edebilirsiniz. Size karşı mesafeli duran bir kadının da ağırlığını hissedebilirsiniz.";
}
else if(tarotkartsayisi==26){
    icerik.textContent= "Bu kart kutlama, eğlence ve hayattan zevk alma zamanına işaret edebilir. Kız arkadaşlarınız ve sosyal çevrenizle mutlu olduğunuz bir zaman bu, karşınıza çıkan gezip tozma ve eğlenme fırsatını değerlendirmeli ve anın tadını çıkarmalısınız.Bir ilişkiden, hastalıktan, zor ve yorucu bir işten kurtulmuş olabilirsiniz ve artık dostlarınızla bir araya gelip bunu kutlayabilirsiniz. Güzel giysilerinizi dolaptan çıkarma ve dışarı çıkma zamanı.";
}
else if(tarotkartsayisi==27){
    icerik.textContent= "Tolerans, anlayış, huzur, barış duygularınızın yükseldiği bir dönem. Karşınıza çıkan her şeyi uyum, ahenk ve anlayış içinde karşılayabilir, empati gücünüzü ortaya çıkarabilirsiniz. Uzlaşma gerektiren konularda oldukça destekleyici bir dönem. Kavgaları, tartışmaları yatıştırabilir, moderatör görevi yapabilirsiniz. Anlaşmazlık durumlarında danışılan kişi konumunda olabilirsiniz.Uyum ve dengenin getirdiği huzur bu dönemde başlıca sloganınız. Bu duygularınızla çevrenizdekileri besleyebilirsiniz. İç huzurunuzu konuşmalarınıza, sözlerinize, yaptıklarınıza yansıttığınız bir dönem. Bolca yemek pişirip başkalarıyla paylaştığınız, etrafınızdakilerin de hem duygusal hem de fiziksel beslenmesini sağladığınız bir dönem.";
}
else if(tarotkartsayisi==28){
    icerik.textContent= "Keskin bir virajı dönmüş olabilirsiniz ve karşınızda seçmeniz gereken iki yol görebilirsiniz. Her iki yolun da ucu keskin olabilir ve karar vermekte zorlanabilirsiniz.Bu keskin kılıçlar karşısında kendinizi geri çekebilir ve beklemeye ya da durumu seyredip gözlemlemeyi tercih edebilirsiniz. Gözlerinizi kapatıp karar vermek isteyebilirsiniz. Ancak bu zor bir karar zamanı olabilir ve özellikle de kendinizle ciddi bir yüzleşme yapmanızı gerektirebilir.";
}
else if(tarotkartsayisi==29){
    icerik.textContent= "Başkalarından öğreneceğiniz çok şey olabilir. Eğitim anlamında önemli bir dönemden geçebilirsiniz. Kişisel gelişimle ilgilenebilir, bolca kitap okuyabilir, konularında bilgi ve bilgelik sahibi insanlarla bir araya gelebilir ve onların tecrübelerinden kolaylıkla faydalanabilirsiniz.Tüm bu öğrendikleriniz ilerde gerek işinizde, gerek özel yaşamınızda çok faydalı olacaktır. Bu bilgilerle başkalarına da faydalı olabileceğinizi unutmayın.";
}
else if(tarotkartsayisi==30){
    icerik.textContent= "İstek ve beklentilerinize kavuşmak için yarışmanız ve rekabet etmeniz gereken bir dönemde olabilirsiniz. Hedeflerinize kavuşma yolunda aynı anda pek çok engel ve zararla karşılaşabilirsiniz, bunlardan kurtulmak için çok yönlü bir gayret ve efor içinde olmanız gerekebilir.Aynı anda birçok sorun da ortaya çıkabilir. Çok fazla enerji sarf edeceğiniz, güç harcayacağınız bir dönemden geçebilirsiniz. İş, eğitim veya spor yaşamınızda rakipleriniz bu dönemde oldukça zorlayıcı olabilir.";
}
else if(tarotkartsayisi==31){
    icerik.textContent= "Adeta bir sporcu gibi güçlü bir iradeye, beton gibi sabit bir moral gücüne işaret eden bir dönem. Öyle ki bu irade ve metanet karşısında kişiler kendilerini duvara çarpmış gibi hissedebilir. Gücünüzü artık sabit ve değişmez bir şekilde göstermiş olabilirsiniz. Düşmanlarınız, size karşı gelenler karşınızda önce küçülebilir sonra da yok olabilir. Özgüven ve kahramanlık timsalisiniz.Sağlığınızı toparlama, kendinize, bedeninize öncelik tanıma zamanı olabilir. İşlerinizde de, özel ilişkilerinizde de güç ve kontrolü elinize alabilirsiniz. Zira bu dönemde ruhsal ve manevi yönden oldukça güçlüsünüz, kaplan, aslan gücüne işaret eden bu kart üstesinden gelemediğiniz hiçbir durumun olmadığına işaret etmekte.";
}
else if(tarotkartsayisi==32){
    icerik.textContent= "Dileklerinize, arzularınıza kavuştunuz demektir. Artık bu anın tadını çıkarabilirsiniz. Lüks ve konforu yaşayabilirsiniz. Memnuniyet ifadesi yüzünüzü ve tüm çevrenizi sarabilir. Bazı konulardan artık tatminkâr olabilirsiniz.Beklediğiniz iş gerçekleşebilir, dilediğiniz ilişkiye kavuşabilirsiniz. Evlilik düşünüyorsanız, bu gerçekleşebilir.";
}
else if(tarotkartsayisi==33){
    icerik.textContent= "Bu kart başarısızlığa, kayıp ve zararlara işaret edebilir. İş yaşamına, maddiyata gereğinden fazla önem ve itibar vermiş olabilirsiniz ve bu durum bazı moral çöküşlerini beraberinde getirebilir.Bu dönemde risklerden uzak durmalı, harcamalara ve bütçenize daha çok dikkat etmelisiniz, gereksiz harcama ve alışverişlerle para kaybedebilirsiniz. Aşkta ve ilişkilerde verilen sözler, taahhütler yerine getirilmiyor olabilir ve bu durumun yaratabileceği hayal kırıklığı ve yalnızlık hissi ortaya çıkabilir.";
}
else if(tarotkartsayisi==34){
    icerik.textContent= "Adalet kavramının öne çıktığı dönem bazı davalara, mahkemelere, yasal süreçlere işaret edebilir. Kurumsal veya bireysel düzeyde ve anlamda hakkın ve adaletin yerini bulduğu bir sürece işaret edebilir. Bu dönemde avukatlarla, yasal danışmanlarla muhatap olabilir, onlardan görüş, tavsiye alabilirsiniz.Doğru ve dürüst şekilde izlediğiniz bir tutum veya davranışın güzel karşılığını alabilirsiniz. Benzer şekilde yanlışlar da ortaya çıkabilir. Özellikle size yanlış yapmış veya size karşı hatalı veya kusurlu olan bir kişi bu durumun farkına varabilir ve sizden özür dileyip yaptıklarını telafi etmek isteyebilir. Buna izin verip vermemek ise yine sizin adalet anlayışınıza ve kararınıza bağlı olabilir.";
}
else if(tarotkartsayisi==35){
    icerik.textContent= "Enerjik bir karttır ve yeni girişimlerle birlikte girişimci tarafınızın uyandığına işaret eder. Bu dönemde yeni bir iş veya uğraşa başlamış olabilirsiniz. Etrafınızda cesur, enerjik, atılımcı kişiler bulunabilir, onlar da sizi bol bol teşvik edebilir.Kariyerinizde bir kıvılcım zamanı olabilir. Buluşunuzla ortaya çıkarma, onu gösterme heyecanı içinde olabilirsiniz. Bir çıkış yapma ve harekete geçme zamanıdır.";
}
else if(tarotkartsayisi==36){
    icerik.textContent= "İkili, ortaklı ve çifte durumlara işaret edebilir. Önemli bir girişim öncesinde seyahat etmeniz gerekebilir. Bu seyahatten yeni bilgiler ve tecrübeler edinebilir, size destek olabilecek kişilerle karşılaşabilirsiniz.Kararsız kaldığınız durumlarda ortağınızın fikrine başvurabilirsiniz. Taşınma, yeni bir yerleşim yeri veya ev söz konusu olabilir. Ufkunuzu bulunduğunuz ortamın dışına ve uzaklara genişletmek isteyebilirsiniz.";
}
else if(tarotkartsayisi==37){
    icerik.textContent= "Başarılarınızın, ulaştığınız hedeflerin ardından maddi yönden taltif edilebilirsiniz. Kazançlarınız, gelirleriniz artabilir. Bu durumla birlikte cömert, yardımsever ve iyiliksever yönlerinizi büyük bir alçak gönüllükle ortaya koyabilirsiniz.Etrafınızda yardımınızı bekleyen ve size el uzatan çok fazla kimse olabilir. Siz de gönlübol bir şekilde yardımlarına koşabilirsiniz ancak herkese eşit ve adaletli davrandığınızdan emin olmalısınız, bunun hesabını siz de yapmak isteyebilir, kimsenin hakkını yememeye özen gösterebilirsiniz. Verdiğinizden çok fazlasını alabileceğinizi unutmayın.";
}
else if(tarotkartsayisi==38){
    icerik.textContent= "Karşınıza çıkan güçlükler ne olursa olsun, düşmanlarınız ya da sizinle rekabet eden, karşı gelen güçler kim olursa olsun siz bulunduğunuz noktada hepsini alt edebilecek güçte ve yetenektesiniz.Gücünüzü fark etmemiş olabilirsiniz. Ancak siz bilseniz de bilmeseniz de şartlar sizi destekliyor ve bu durumdan bir an önce yararlanmalısınız. Çabanızın, gayretinizin karşılığını alabilirsiniz.";
}
else if(tarotkartsayisi==39){
    icerik.textContent= "Yanılgılara, aldanmaya, illüzyona açık olduğunuz, aşırı duygusal davrandığınız bir döneme işaret eder. Sağlıklı, sağduyulu düşünmek ve hareket etmek bu dönemde oldukça zor olabilir. Çalkantılı bir dönemden geçiyor olabilirsiniz. Etrafınızda sizi farklı farklı yönlere çeken, isteyerek veya istemeden aldanmanıza ve yanılmanıza neden olabilecek kişiler ve özellikle de kadın ve anne figürleri olabilir.Doğru bildiğiniz yolda ilerleyebilmek adına duygusallığa, içgüdülere kapılmamalı ve objektif yönünüzü korumaya çalışmalısınız. Aksi halde kendinizi akışa çok kolay kaptırabilir ve farkında olmadan sürüklenebilirsiniz. Kalabalıklar, etkili kişiler yarattıkları büyülü ve masalsı ortamlarla bu sürüklenmeyi kolaylaştırabilir.";
}
else if(tarotkartsayisi==40){
    icerik.textContent= "Kendi halinizde hoşça vakit geçirme zamanında olabilirsiniz. Hobilerinizle ve ilgi duyduğunuz konularla ilgilenebilirsiniz. Kendinizi her yönden geliştirebilir, dinginliğinizin tadını çıkarabilirsiniz.Mutlu olmak için sadece yaşadığınız hayatı sürmektense onu geliştirmek gerektiğini düşünebilirsiniz. Yalnız zaman geçirmekten, tek başına hareket etmekten hoşlanabilirsiniz. Bahçe işleriyle, dekorasyon konularıyla ilgilenebilirsiniz.";
}
else if(tarotkartsayisi==41){
    icerik.textContent= "Yaptığınız girişim, çıkış ve başlangıcın somut ve maddi karşılığını görebilirsiniz. Para kazanabilirsiniz. Aşkınızın, ilişkinizin ilk meyvelerini, mutluluklarını yaşadığınız zamanı işaret eder.Bu dönemde size omuz, destek veren, yardımcı olan kişilerin varlığını ve gücünü üzerinizde hissedebilirsiniz. Evinizde veya işyerinizde bir yardımcınız olabilir. Bu yardımlar sayesinde daha iyi hissedebilir, daha güzel günlere kucak açabilirsiniz.";
}
else if(tarotkartsayisi==42){
    icerik.textContent= "Genç bir kişinin, bir arkadaşınızın düşündüğünüz gibi olmaması söz konusu olabilir. Bu kişi arkanızdan konuşuyor ve iş çeviriyor olabilir. Size sempatik görünüp size karşı farklı niyetler veya duygular besliyor olabilir.Yeni bir iş söz konusuyla ince eleyip sık dokumanız gerektiğini unutmayın. Göz ardı etmiş olabileceğiniz bazı detaylar, ayrıntılar sonradan başınızı ağrıtabilir. Olaylar hızlı bir akış içindeyken dikkatli, temkinli hareket etmeniz gerekmekte.";
}
else if(tarotkartsayisi==43){
    icerik.textContent= "Zafer ve başarı zamanı, en güzel giysileriniz ve takılarınızla ortaya çıkıp alkışları, takdirleri kabul etme zamanı olabilir. Başarılarınız göz kamaştırıcı olabilir. Beklediğiniz bir notu alabilir, dersinizi, tezinizi başarıyla verebilir, akademik bir başarıya imza atabilirsiniz.İş hayatınızda terfi, kariyerinizde üst bir gelişme söz konusu olabilir. İş teklifi alabilirsiniz. Sorunlar çözülebilir, anlaşma yolu bulunabilir, iyi ve güzel havadisler alabilirsiniz. Yolculuklar gündeme gelebilir.";
}
else if(tarotkartsayisi==44){
    icerik.textContent= "Kararlılıkla, güçle hareket ettiğiniz bu dönem mücadeleye işaret ediyor. Size destek olan tüm araç ve silahlarınızı kuşanmış bir şekilde kişisel savaşınızı vermeye hazır olabilirsiniz. Amacınız ortada, ne yapmak ve neye ulaşmak istediğinizi biliyorsunuz. Karşınızda size muhalif enerji ve güçler bulsanız da amacınızda kararlı olabilirsiniz.Hareket halinde olduğunuz bu dönem araba, motosiklet gibi araçlara ve hıza işaret ediyor. Bir vasıta, araç alımı söz konusu olabilir. Bu dönemde mücadeleci figürler, yarışçılar, rekabetçi kişiler yaşamınıza damga vurabilir, onlardan ilham aldığınız bir süreç söz konusu olabilir.";
}
else if(tarotkartsayisi==45){
    icerik.textContent= "Şaha kalkan atındaki bir şövalye artık yeni girişimlere ve taze başlangıçlara hazır olabilirsiniz. Genelde iş yaşamıyla ilişkilendirilen bu kart yaratıcı bir çalışmanın da başlangıcı olabilir.Arzuladığınız değişim ve yenilikleri hayata geçirebilecek cesaret ve enerjiye sahip olabilirsiniz. Aşkta ve ilişkilerde coşkulu, arzu dolu, hevesli ve istekli bir döneme işaret eder. Bu değişim havası heyecan verici olabilir.";
}
else if(tarotkartsayisi==46){
    icerik.textContent= "Ruhen ve bedenen dinlenmek istediğiniz bir zamandan geçiyor olabilirsiniz. Mücadeleyi, savaşı bir kenara bırakıp huzurla dolmak isteyebilirsiniz bu dönemde. Meditatif, manevi, ruhsal çalışmalar için uygun bir dönem olabilir.Tatil, işe ara verme, sorumlulukları, görevleri bir kenara bırakma, uykuya dalma, yatma zamanı olabilir. Hastaneye yatış, terapötik süreçler, tedaviler gündeme gelebilir.";
}
else if(tarotkartsayisi==47){
    icerik.textContent= "Sanatsal ve ilham gerektiren işler ve çalışmalar için uygun bir dönemdesiniz, zira hayal gücünüz oldukça yüksek ve sezgileriniz de bu dönemde aradığınız her türlü ilhamı sağlayabilir.Ancak gerçekçi ve objektif davranmanız gereken konularda, maddi konularda kafanızı toplamanız zor olabilir. Beklentilerinizi gözden geçirmeniz, düşünceli, dikkatli ve sağduyulu davranıp hareket etmeniz gerekebilir.";
}
else if(tarotkartsayisi==48){
    icerik.textContent= "Sıkıntılı, depresif bir dönemden geçiyor olabilirsiniz. Durum o kadar kötü olmasa da kötü algılayabileceğiniz şartlar söz konusu olabilir. Uykusuzluk baş gösterebilir.Yaşanan olaylardan ötürü kendinizi suçluyor olabilirsiniz. Bir tür ümitsizlik havası içinde ışığı görmeniz zor olabilir. Bazen bu kart çevrenizde bu olumsuz durumdan muzdarip bir kadına işaret ediyor olabilir.";
}
else if(tarotkartsayisi==49){
    icerik.textContent= "Yaşamınızda bir öğrencinin, genç bir kişinin eğitimle ilgili faaliyetlerine tanıklık ve eşlik edebilirsiniz. Düşünceli, fikir sahibi ancak içe dönük bir kişi yaşamınıza girebilir ve fikirleriyle size yol gösterebilir.Bu dönemde öğrenme ve eğitim konusunda istekli ve çalışkan olabilirsiniz. Sınava girecek olan genç bir kişiyle ilgilenebilirsiniz. Siz veya bu kişi bu dönemde oldukça çalışkan olabilir. Ders çalışma ve hazırlanma dönemini gösterir. İş ve ticaret konularında olası bir başarıya hazırlanma dönemi olabilir.";
}
else if(tarotkartsayisi==50){
    icerik.textContent= "Merhametinizi, vicdanınızı, şefkat anlayışınızı çok güçlü bir şekilde ortaya çıkarmış olabilirsiniz. Sezgileriniz, hisleriniz bu dönemde oldukça güçlü olabilir ve size yol gösterebilir, onların sesine kulak vermelisiniz. Bu dönemde size yardımcı olan bir kadın aynı zamanda sizi içtenlikle seviyor, size bakıyor ve dikkat ediyor da olabilir.Kapınızı çalan ve yardım eden candan bir komşunuz olabilir. Annenizle bu dönemde çok daha yakın bir ilişki içinde olabilirsiniz ya da size bir anne kadar yakın ve sıcak davranabilir. Bu kişinin desteğiyle kendinizi güvende hissedebilirsiniz.";
}
else if(tarotkartsayisi==51){
    icerik.textContent= "Yaşadığınız zorlukların getirdiği yılgınlık sizi pes ettirmiş olabilir. Artık geçmişi ardınızda bırakıp gitmek ve bu zor durumun içinden bir an önce kurtulmak isteyebilirsiniz. Yeni arayışlar, bakış açıları geliştirmek isteyebilirsiniz.Bu kart yolculuklar, geride bırakış ve gidişler ile ilişkilendirilebilir. Taşınma, yer, mekân, ülke değiştirme söz konusu olabilir. Bir ilişkiyi, işi, kişiyi ardınızda bırakıp yeni başlangıçlara açılabilirsiniz.";
}
else if(tarotkartsayisi==52){
    icerik.textContent= "Gerek işinizde gerek sosyal yaşamınızda veya ilişkilerinizde soğuk ve serinkanlı tavırlarınızla dikkat çekici olabilirsiniz. Ancak insanların size yaklaşmakta zorlanabildiklerini göz ardı etmeyin. Zira farkında olmadan insanlarla aranıza bir duvar örüyor olabilirsiniz. Bu duvarı kendinizden emin olduğunuz yolda kararlılıkla ilerleyebilmek için örmüş olabilirsiniz ancak karşı tarafın da duyguları olduğunu unutmamalısınız. Çok soğuk, ciddi ve mesafeli olduğunuz izlenimi verebilir ve insanları istemeden kendinizden uzaklaştırabilirsiniz.";
}
else if(tarotkartsayisi==53){
    icerik.textContent= "Bu kart bir ilişki veya ortaklığın başlangıcına işaret ediyor. Bu yaşamınızı etkileyen çok önemli bir birliktelik. Mevcut bir ilişkiniz varsa ilişkinizde yepyeni bir döneme de işaret ediyor olabilir. Durum ne olursa olsun bu kart ikili duruma bir başkasına bağlı kalmayı ve bu durumun getirdiği tereddütleri gösteriyor. Bu tereddütlerin getirdiği sorunlar, karar verememe, arada kalma gibi duyguların altını çiziyor.Sübjektif, bencil tarafınızı iyice çürüttüğünüz ve karşınızdaki kişi olmadan ya da ona sorup danışmadan hareket edemediğiniz bir dönem de olabilir bu dönem. Bekârsanız iki kişi arasında da seçme durumunda kaldığınıza da işaret edebilir. Bu seçim önemli sonuçlara yol açabilir.";
}
else if(tarotkartsayisi==54){
    icerik.textContent= "Eşinizle veya ortağınızla zorlu günlerin ardından mutluluğun tadını çıkarma zamanı olabilir. Zor günlerin ve evliliğin ardından balayı zamanındasınız.Yorgunlukları birlikte üzerinizden atabilir ve artık dinlenebilirsiniz. Karşılıklı şezlonglarınızda keyifle uzanıp anın tadını çıkarabilirsiniz. Tatilin kapıda olduğunu gösterir. Bavullarınızı hazırlayabilirsiniz. Uyumlu bir birlikteliğin, birlikte tadılan konfor ve lüksün habercisi olabilir.";
}
else if(tarotkartsayisi==55){
    icerik.textContent= "Materyalist kişilerin etrafınızı sardığının bir göstergesi olabilir. Finansal ve maddi yönden iyi yönetilemeyen kaynaklara işaret eder. Açgözlülük, paraya ve maddiyata düşkünlük bu dönemin belirgin özellikleri olabilir.Bir ilişkiniz varsa bu ilişkide maddi karşılıklar duyguların önüne geçebilir. Paranızın, alışveriş ve harcamaların kontrolünü yapmanızın güç olduğu bir dönemden geçiyor olabilirsiniz, bu anlamda bir uyarı kartıdır.";
}
else if(tarotkartsayisi==56){
    icerik.textContent= "Özel yaşamınızda ve iş hayatınızda sizi zorlayan bir kişi veya durumla karşılaşmış ve büyük bir mücadele içine girmiş olabilirsiniz. Mağrur bir savaşçı gibi tüm araç ve gereçlerinizle bu mücadeleden galip çıkma hevesinde olabilirsiniz. Yaşamınızda hareketli ancak bu durumdan ötürü çalkantılı ve kaos içinde bir dönemi de ifade eder.Beklenmedik zorlayıcı gelişmeler karşısında atik, çevik ve hızlı olma zorunluluğunu hissedebilirsiniz. Güçlü, metin, kararlı davranmalısınız. İlişkiler açısından sürprizlere açık ve mücadele verilmesi gereken durumlar söz konusu olabilir.";
}
else if(tarotkartsayisi==57){
    icerik.textContent= "Endişe, evham ve stresi geride bırakıp artık serin, sakin, dingin sulara açıldığınız zamandasınız. Yavaş yavaş bu suların sükunetine kendinizi bırakabilirsiniz. Sizi yoran, bıktıran bir alışkanlığınızı, bağlılığınızı da geride bırakabilirsiniz. Etrafınızda zor durumdan kurtulan bir kimse de olabilir.Yeni yolculuklara, maceralara artık hazır olabilirsiniz. Huzurun hafifliğini yaşadığınız bir dönemden geçiyor olabilirsiniz. Yeni bilgilere ve öğretilere açıksınız. Misafirleriniz de olabilir.";
}
else if(tarotkartsayisi==58){
    icerik.textContent= "Elinde tılsımı olan şövalye maddi refaha ve paraya işaret edebilir. Bu refah bir iş veya gayri menkul yoluyla gelebilir. Bu kartta durağanlık vardır, dolayısıyla girişimde bulunduğunuz konuda veya işte belli bir istikrarı yakalamak mümkün olabilir. Maddi imkanlarınızı elinizde tutmak, korumak isteyebilirsiniz. Giriştiğiniz işten de artık sonuç bekliyor olabilirsiniz.İlişkinizde ise bu kart artık ciddiye binmiş somut bir duruma işaret eder. Eşiniz, sevgiliniz size güveniyor olabilir ve karşılıklı bu ilişkide kararlı ve sorumlu davranabilirsiniz.";
}
else if(tarotkartsayisi==59){
    icerik.textContent= "Beyaz atlı prensi veya prensesinizi karşınıza çıkarmış olabilecek bir kart. Romantik ve keyifli bir ilişkiye işaret edebilir. Karşılıklı birbirinizden hoşlanacağınız, keyif alacağınız bir döneme ilerlediğinizi gösteren olumlu bir karttır. Sevgilinizle hoş bir yemeğe çıkabilirsiniz, keyif alacağınız bir tatil veya gezi yapabilirsiniz. Güzel yerlerin ve ortamların tadını birlikte çıkarabilirsiniz. Sosyalleşebileceğiniz ve güzel ve hoş insanları karşınıza getiren şanslı bir karttır.";
}
else if(tarotkartsayisi==60){
    icerik.textContent= "Şans kartı ve bu şans yaşamınızın yönünü birdenbire değiştirebilir. Yaşamınızda beklenmedik, ani, hızlı ve sürpriz bir şekilde yepyeni bir döneme girmiş olabilirsiniz. Şans bu dönemde sizden yana ve size ummadığınız kazanç, gelir ve ilişki kapıları açabilir. Sürpriz bir şekilde hayatınızın aşkını getirebilir. Kazanç elde etmenizi sağlayan yollar gösterebilir.Bu şansla birlikte yaşamınız eskisinden çok daha farklı bir yön kazanabilir. Ağır giden ya da gitmeyen bir ilişkiniz varsa bu bitebilir ve karşınıza umut veren başka biri çıkabilir. Para söz konusu olabilir.";
}
else if(tarotkartsayisi==61){
    icerik.textContent= "Başarı, mutluluk ve sevinç kartıdır. Bu kartın taşıdığı anlamlar sizi çok mutlu edebilir. Zenginlik, evlilik, çocuk habercisi olabilir. İş yaşamında, okul hayatınızda önemli bir başarıya imza atmış olabilir ve bundan çok büyük sevinç duyabilirsiniz. Uzun uğraş ve beklentilerin ardından bir dileğiniz gerçekleşmiş olabilir.Karanlığın ardından doğan Güneş son derece pozitif ve neşeli kartın simgesi gibi güneşli günlerin de habercisidir. Güneş’i sıcağı bol olan yerlere ziyaret de söz konusu olabilir. Sağlık anlamında da kendinizi zinde ve iyi hissettiğiniz bir dönemi işaret eder. Canlılığınızı, yaşam enerjinizi yeniden kazanmış olabilir ve bu enerjiyi yayabilirsiniz.";
}
else if(tarotkartsayisi==62){
    icerik.textContent= "Baba gibi gördüğünüz bir kimseden bir otorite figüründen ya da güç ve bilgelik sahibi bir erkekten alabileceğiniz bir destek veya tavsiye olabilir. İş yaşamında gücü elinize alabileceğiniz bir dönemden geçiyor olabilirsiniz. Özel yaşamınızda ilişkilerinizde güçlü tarafa kulak vermek, sözlerini can kulağıyla dinleyip onaylamak gibi bir tutumunuz olabilir.Girişimci ve cesur tarafınızı ortaya koyarken aslında ne istediğinizi çok iyi biliyorsunuz. Bu güvenle hareket etmekte zorlanmayabilirsiniz.";
}
else if(tarotkartsayisi==63){
    icerik.textContent= "Yaşamın bilgelik tarafına ağırlık vermiş durumdasınız. İnançlar, felsefe ve ideolojiler dikkat çekici. Bilginin ancak bilgelikle var olabileceğine inandığınız bir döneme işaret ediyor. Yaşamınızda size rehberlik eden ve yol gösteren bilge bir kişilik dikkat çekici olabilir bu dönemde. Keşif ve macera duygularınızda uyanışlarla birlikte yolculuklar hem manevi hem de maddi açıdan bu döneme damgasını vurmuş durumda. Uzaklar, uzak tanıdıklar ve aile, yurt dışı ve yabancılarla ilgili konular gündemde.Paylaşımlarınızda düşüncelerinizi, inançlarınızı ortaya çıkardığınız dönem. Zor bir durumda bilge bir kişinin danışmanlık ve uzmanlığından yararlanma söz konusu. Bu kişinin varlığı yaşamınıza ışık tutabilir.";
}
else if(tarotkartsayisi==64){
    icerik.textContent= "Yaşamınızda mücadeleci, savaşçı nitelikte kişilerin varlığı söz konusu olabilir. Cesaret ve güç göstergesidir. Rekabet ediyorsanız lehinize dönen bir durumu işaret eder.Gücünüz ve kararlılığınızla zorlukların üstesinden gelmeye ve tüm rakiplerinizi alt etmeye hazır olabilirsiniz. Karşınızda hiçbir gücün duramadığını hissedebilirsiniz. Kılıcınız parlak ve keskindir ancak doğru yerde doğru hamleyi yapabilecek aklı ve sağduyu geliştirmelisiniz.";
}
else if(tarotkartsayisi==65){
    icerik.textContent= "Bu kart ilişkinizin uyumlu bir şekilde devam ettiğini gösterebilir. Karşılıklı uzlaşma içinde eşinizle, ortağınızla, yakın arkadaşınızla mutlu anları, zamanları paylaşabilirsiniz. Ortak paylaşımlarda anlayış ve hoşgörü söz konusu olabilir. İşbirliği gerektiren konularda karşınızdaki kimseden beklediğiniz ve aradığınız desteği görebilirsiniz.";
}
else if(tarotkartsayisi==66){
    icerik.textContent= "Yeni fırsatları, genişleme, zenginleşme imkanlarını hatırlatan karttır. İşinizde veya ilişkinizde ilk aşamayı geçmiş olabilirsiniz ancak yapmanız gereken daha çok şey var. Fırsatlar önünüzde uzanırken bunlardan yararlanmayı bilmelisiniz.Gelişmenizi sağlayacak, sizi ileriye taşıyacak bazı haberler alabilirsiniz. Yolculuklar bu gelişime yardımcı olabilir. Ticari imkanlar, iş imkanları ufukta görünebilir.";
}
else if(tarotkartsayisi==67){
    icerik.textContent= "Çalışan anne kartı, bir yandan çalışkan ve başarılı diğer yandan evine ve çocuklarına düşkün duyarlı bir kadını gösterir. İş yaşamında veya eğitim hayatınızda da bir yandan başarıyı hedeflerken diğer yandan insani yönlerinizi göz ardı etmeyeceğiniz bir döneme ilerlemiş olabilirsiniz.Bilgece kararlar verebilecek durumda olduğunuzu unutmayın. Bu bilgelik şu anda olmasa da ilerde çok işinize yarayacak olabilir. Zengin bir kadının ya da bir hanım ağa gibi olan ya da bu şekilde hissettiren bir kadının omuz vermesiyle hayatınızı yoluna koyabilirsiniz.";
}
else if(tarotkartsayisi==68){
    icerik.textContent= "İç dünyanıza iyice dönmüş durumdasınız. Yalnızlığı tercih edebilirsiniz. Bu dönem inzivada yapabileceğiniz meditasyon çalışmaları için oldukça uygun. Bunu yapmasanız da sessizlik, sakinlik ve sükûnet arayışınız oldukça yüksek. Kalabalıklar içinde olsanız da kendinizi yalnız hissedebilir hatta bu yalnızlığı arayabilirsiniz.Manevi uyanışlar bu dönemde dikkat çekici olabilir. Sezgilerinizle, hissederek bütün dünyayı, evreni, insanları anladığınız bir dönemdesiniz. Bu algı ve anlayış size yol gösterici durumda. Bilinçaltınız, rüyalarınız yine bu dönemde oldukça etkili. Bir mentor, danışman, guru bu dönemde yaşamınıza girmiş, rehber, kılavuz konumunda olabilir.";
}
else if(tarotkartsayisi==69){
    icerik.textContent= "Gizli, kapalı konuların önem kazandığı bir dönemden geçerken sezgileriniz de güçlü durumda. Maddi ihtiyaç ve beklentileri sıfıra indirgemiş olabilirsiniz. Başkalarına ve özellikle de eş ve ortak durumunda kişilere de çok ihtiyacınız yok. Zira sezgileriniz size yol gösteriyor. Bu dönemde manevi yönde ilerlemekte karar kılmış olabilirsiniz.Temiz yürekli, bakir ve saf bir kişinin etkisi de bu dönemde göze çarpıyor. Bu çalışkan, verici kişinin varlığı size güç sağlamış olabilir. Hırsları bir kenara itip yalnızca emek, yardım tarafınızı sergiliyor olabilirsiniz.";
}
else if(tarotkartsayisi==70){
    icerik.textContent= "Ağır iş ve sorumlulukları, görevleri yüklenmiş olabilirsiniz. Bunların altında ezildiğinizi düşünseniz bile aslında hırsınız ön planda ve başarıya ulaşmak için bu yükleri taşımayı kabul ediyor olabilirsiniz.Önemli bir işin üstesinden gelmek zorunda olduğunuz, bir proje yüklendiğiniz bir zamandan geçiyorsunuz. Başarı hırslarınız uğruna kaçırdığınız fırsatları, imkânları, daha mutlu, keyifli olma şansınızı göz ardı etmemelisiniz.";
}
else if(tarotkartsayisi==71){
    icerik.textContent= "Sevgi dolu tonton bir baba figürüne işaret eden bu kart yaşamınızda bu kişinin desteğini gösteriyor olabilir. Bu kişinin yakınlığından, dostluğundan, sevgisinden çok şey öğrenebilirsiniz. Arkanızda bu insanın olduğunu hissetmek gerek iş gerekse özel yaşamınızda size güven verebilir.Kadınsanız sizden yaşça büyük, olgun ancak babacan bir kişiyle tanışabilirsiniz. Bu kişi size beklediğiniz sevgi ve şefkati sunacak, bir baba gibi koruyup kollayacak candan bir kişi olabilir.";
}
else if(tarotkartsayisi==72){
    icerik.textContent= "Bazı konularda aldatıldığınızı, kandırıldığınızı fark etmiş olabilirsiniz. Etrafınızda gerçekten de çok dürüst olmayan, sözleriyle, yazılarıyla sizi aldatmaya yönelik kişiler, üçkağıtçı veya hilebaz insanlar olabilir. Bu dönemde dikkatli davranmalı ancak kendinize karşı da acımasız ve suçlayıcı davranmamalısınız. Önemli angajmanlardan, taahhüt veya imzalardan kaçınmanız gereken bir süreç olabilir. İletişim becerilerinizle bu zor durumun üstesinden gelebileceğinizi unutmayın.";
}
else if(tarotkartsayisi==73){
    icerik.textContent= "Bu kart iyileşme ve kendine gelme durumunu gösterir. Uzun ve yorucu bir sürecin ardından belki bir hastalığın sonrasında artık toparlanmalı ve ayağa kalkmalısınız. Güçlü yönlerinize sıkıca sarılıp onlara sahip çıkmanız gerekebilir. Bu kolay bir süreç olmasa da kendinize ve inandıklarınıza güvenmeniz şart.Önemli bir girişimde veya aksiyonda bulunmadan önce bir hazırlık ve kendinizi güçlendirme sürecinde olabilirsiniz.";
}
else if(tarotkartsayisi==74){
    icerik.textContent= "Bazı şeylerin artık sona yaklaştığı, kırılıp dökülmeye ve çözülmeye başladığına işaret eder. Bu dağılmaya ve değişime hazır olmanız gerekiyor. İlişkiniz artık eski pırıltısına kaybetmiş olabilir. İşinizde yoluna gitmeyen durumlar artık çok daha görünür ve fark edilir şekilde gün yüzüne çıkmış olabilir. Felaket gibi görünse de ayrılık, terk etme veya edilme ya da işten ayrılma artık kaçınılmaz olabilir.Bu dağınıklığı toparlamak kolay olmayabilir. Dolayısıyla bu çözünmeye ve getireceğe değişime bir an önce kendinizi hazırlamalısınız. Bu dağılma sizin dışınızda güçlerin varlığıyla gerçekleşmiş olabilir, dolayısıyla kendinizi suçlamamanız gerekiyor. Zira kurban ve mağdur durumunda olabilir ve sizinle aynı durumu paylaşan kişilerle karşılaşabilirsiniz. Onların varlığı size destek olabilir ve birlikte yepyeni bir değişim sürecini daha rahat kucaklayabilirsiniz.";
}
else if(tarotkartsayisi==75){
    icerik.textContent= "Son derece olumlu anlamlar taşıyan bu kart artık yepyeni bir dönemin habercisidir. Yeniden doğum anlamına gelebilir. Bir hastalıktan, zor bir süreçten kurtulmuş olabilirsiniz. Son karar verilmiştir ve bu karar sizin lehinizedir. Dava veya mahkemelerden sizi destekleyen kararlar çıkabilir.Uzun ve yorucu uğraşların ardından aydınlığa kavuşmuş olabilirsiniz. Gençleşmeyi, yenilenmeyi, iyileşme sürecini gösterir. İşlerinizi toparlayabilirsiniz, iş değişikliği yaptıysanız bunda başarılı olabilirsiniz.";
}
else if(tarotkartsayisi==76){
    icerik.textContent= "Bir dönemin başlangıcına ve sonuna işaret eder. On üçüncü kart her anlamda bitiştir. Büyük bir dönüşüm ve başkalaşım zamanı. Eskileri geride bırakma ve onlardan kurtulma aşaması. Bir ilişkinin, işin sonuna işaret eder. Ancak bu ilişki veya iş kişinin yaşamına damga vurmuş bir durum olabilir.Arkana’nın en önemli kartlarından biri olan bu kart hiçbir şeyin artık eskisi gibi olmayacağına işaret eder. Anka kuşunun küllerinden yeniden doğması için ölmesi gerekir ve işte bu kart tam da o ana işaret eder. Bu dönem karşınıza büyük dönüşüm ve değişimlerden geçen kişileri de çıkartabilir ve onlardan hayati bilgiler, öğretiler edinebilirsiniz.";
}
else if(tarotkartsayisi==77){
    icerik.textContent= "Gelişmeler ve olaylar karşısında sabır göstermeniz gereken bir zamanda olabilirsiniz. Yaşananlara bir de tepeden bakmış olmak hiç de fena olmayabilir.Çalışkanlığınızı kararlılıkla koruyarak, kısa vadeden ziyade uzun vadeli düşünerek emeklerinizin karşılığını alabilirsiniz. Yavaş ilerlediğiniz ancak her şeye rağmen ilerlediğiniz bir dönem olabilir. İnancınızı korumalısınız.";
}
else if(tarotkartsayisi==78){
    icerik.textContent= "Yıldız kartı çekebileceğiniz en olumlu ve pozitif kartlardan biridir. Tüm zorluklar karşısında size ümit ışığını gösterir. Yıldız gökyüzünde tam tepenizde parlıyordur ve tıpkı bir melek gibi korumaya gelmiştir. Bir anda her şeyi pembe gözlüklerle ve umut dolu bir bakış açısıyla görebilirsiniz. Temiz, ferah bir nefes alabilir, ilhamla dolabilirsiniz. Yaşam sevincinizi geri kazanmış olabilirsiniz.Erkekseniz yaşamınıza genç bir kadın girebilir. Bir kız çocuğunun müjdecisi olabilir. Size destek olan kişileri ve özellikle de kadınları yaşamınıza alabilirsiniz. Astroloji ve yıldızların diline kulak verebilirsiniz.";
}}
