(this["webpackJsonpayah-finder"]=this["webpackJsonpayah-finder"]||[]).push([[0],{17:function(a,e,t){a.exports=t(30)},25:function(a,e,t){},30:function(a,e,t){"use strict";t.r(e);var l=t(0),n=t.n(l),r=t(8),s=t.n(r),i=(t(13),t(14),t(23),t(24),t(25),t(2)),o=t(3),u=t(4),c=t(5),m=t(6),h=function(a){var e=a.appTitle;return n.a.createElement("nav",{className:"navbar navbar-light bg-light"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"col-md-8 offset-md-2"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("span",{className:"navbar-brand mb-0 h1"},n.a.createElement("span",{className:"ml-2"},e))),n.a.createElement("div",{className:"col align-self-end text-right"},"\xa0")))))},d=t(11),b=[{value:"1",label:"Al-Fatihah"},{value:"2",label:"Al-Baqarah"},{value:"3",label:"Al-Imran"},{value:"4",label:"An-Nisa'"},{value:"5",label:"Al-Ma'idah"},{value:"6",label:"Al-An'am"},{value:"7",label:"Al-A'raf"},{value:"8",label:"Al-Anfal"},{value:"9",label:"At-Tawbah"},{value:"10",label:"Yunus"},{value:"11",label:"Hud"},{value:"12",label:"Yusuf"},{value:"13",label:"Ar-Ra'd"},{value:"14",label:"Ibrahim"},{value:"15",label:"Al-Hijr"},{value:"16",label:"An-Nahl"},{value:"17",label:"Al-Isra"},{value:"18",label:"Al-Kahf"},{value:"19",label:"Maryam"},{value:"20",label:"Ta-Ha"},{value:"21",label:"Al-Anbiya'"},{value:"22",label:"Al-Hajj"},{value:"23",label:"Al-Mu'minun"},{value:"24",label:"An-Nur"},{value:"25",label:"Al-Furqan"},{value:"26",label:"ash-Shu`ara'"},{value:"27",label:"An-Naml"},{value:"28",label:"Al-Qasas"},{value:"29",label:"Al-\u02bbAnkabut"},{value:"30",label:"Ar-Rum"},{value:"31",label:"Luqman"},{value:"32",label:"As-Sajdah"},{value:"33",label:"Al-Ahzab"},{value:"34",label:"Saba'"},{value:"35",label:"Fatir"},{value:"36",label:"Ya-Sin"},{value:"37",label:"As-Saffat"},{value:"38",label:"Sad"},{value:"39",label:"Az-Zumar"},{value:"40",label:"Ghafir"},{value:"41",label:"Fussilat"},{value:"42",label:"Ash-Shura"},{value:"43",label:"Az-Zukhruf"},{value:"44",label:"Ad-Dukhan"},{value:"45",label:"Al-Jathiyah"},{value:"46",label:"Al-Ahqaf"},{value:"47",label:"Muhammad"},{value:"48",label:"Al-Fath"},{value:"49",label:"Al-Hujurat"},{value:"50",label:"Qaf"},{value:"51",label:"Ad-Dhariyat"},{value:"52",label:"At-Tur"},{value:"53",label:"An-Najm"},{value:"54",label:"Al-Qamar"},{value:"55",label:"Ar-Rahman"},{value:"56",label:"Al-Waqi'ah"},{value:"57",label:"Al-Hadeed"},{value:"58",label:"Al-Mujadilah"},{value:"59",label:"Al-Hashr"},{value:"60",label:"Al-Mumtahanah"},{value:"61",label:"As-Saff"},{value:"62",label:"Al-Jumu'ah"},{value:"63",label:"Al-Munafiqun"},{value:"64",label:"At-Taghabun"},{value:"65",label:"At-Talaq"},{value:"66",label:"At-Tahreem"},{value:"67",label:"Al-Mulk"},{value:"68",label:"Al-Qalam"},{value:"69",label:"Al-Haqqah"},{value:"70",label:"Al-Ma'aarij"},{value:"71",label:"Nuh"},{value:"72",label:"Al-Jinn"},{value:"73",label:"Al-Muzzammil"},{value:"74",label:"Al-Muddathir"},{value:"75",label:"Al-Qiyamah"},{value:"76",label:"Al-Insan"},{value:"77",label:"Al-Mursalat"},{value:"78",label:"An-Naba'"},{value:"79",label:"An-Nazi'at"},{value:"80",label:"`Abasa"},{value:"81",label:"At-Takwir"},{value:"82",label:"Al-Infitar"},{value:"83",label:"Al-Mutaffifeen"},{value:"84",label:"Al-Inshiqaq"},{value:"85",label:"Al-Buruj"},{value:"86",label:"At-Tariq"},{value:"87",label:"Al-A'la"},{value:"88",label:"Al-Ghashiyah"},{value:"89",label:"Al-Fajr"},{value:"90",label:"Al-Balad"},{value:"91",label:"Ash-Shams"},{value:"92",label:"Al-Lail"},{value:"93",label:"Ad-Dhuha"},{value:"94",label:"Ash-Sharh (Al-Inshirah)"},{value:"95",label:"At-Tin"},{value:"96",label:"Al-\u02bbAlaq"},{value:"97",label:"Al-Qadr"},{value:"98",label:"Al-Bayyinah"},{value:"99",label:"Az-Zalzala"},{value:"100",label:"Al-Adiyat"},{value:"101",label:"Al-Qari`ah"},{value:"102",label:"At-Takathur"},{value:"103",label:"Al-Asr"},{value:"104",label:"Al-Humazah"},{value:"105",label:"Al-Fil"},{value:"106",label:"Quraysh"},{value:"107",label:"Al-Ma'un"},{value:"108",label:"Al-Kawthar"},{value:"109",label:"Al-Kafirun"},{value:"110",label:"An-Nasr"},{value:"111",label:"Al-Masad"},{value:"112",label:"Al-Ikhlas"},{value:"113",label:"Al-Falaq"},{value:"114",label:"An-Nas"}],v=[{value:"id.indonesian",label:"ID"},{value:"en.asad",label:"EN"}],p=function(a){function e(a){var t;Object(i.a)(this,e),(t=Object(u.a)(this,Object(c.a)(e).call(this,a))).state={inputSurah:1,inputAyahFrom:1,inputAyahTo:2,inputTranslation:"id.indonesian",textToSearch:"",numberedSurah:!1,selectedTranslation:v[0]};var l=b.map((function(a){var e=a.value;return{value:e,label:e+". "+a.label}}));return t.state.numberedSurah=l,t.state.selectedSurah=l[0],t}return Object(m.a)(e,a),Object(o.a)(e,[{key:"componentDidUpdate",value:function(a,e){var t=this.state,l=t.inputAyahFrom,n=t.inputAyahTo;e.inputAyahFrom!==l&&n<l&&this.setState({inputAyahTo:l}),e.inputAyahTo!==n&&n<l&&this.setState({inputAyahFrom:n})}},{key:"handleValue",value:function(a,e){switch(a){case"surah":var t=e.value,l=e;this.setState({inputSurah:t,selectedSurah:l});break;case"ayahFrom":this.setState({inputAyahFrom:e.target.value});break;case"ayahTo":this.setState({inputAyahTo:e.target.value});break;case"translation":var n=e.value,r=e;this.setState({inputTranslation:n,selectedTranslation:r});break;case"textToSearch":this.setState({textToSearch:e.target.value})}}},{key:"handleViewAyah",value:function(a){var e=this.props,t=e.onViewAyah,l=e.app;t.bind(l,this.state)(),a.preventDefault()}},{key:"handleSearchAyah",value:function(a){var e=this.props,t=e.onSearchAyah,l=e.app;t.bind(l,this.state)(),a.preventDefault()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active",id:"go-to-ayah-tab","data-toggle":"tab",href:"#go-to-ayah",role:"tab","aria-controls":"go-to-ayah","aria-selected":"true"},"Go to Ayah")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",id:"search-ayah-tab","data-toggle":"tab",href:"#search-ayah",role:"tab","aria-controls":"search-ayah","aria-selected":"false"},"Search Ayah by Keywords")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",id:"surah-player-tab","data-toggle":"tab",href:"#surah-player",role:"tab","aria-controls":"surah-player","aria-selected":"false"},"Surah Player")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",id:"about-tab","data-toggle":"tab",href:"#about",role:"tab","aria-controls":"about","aria-selected":"false"},"About"))),n.a.createElement("div",{className:"tab-content",id:"myTabContent"},n.a.createElement("div",{className:"tab-pane fade show active",id:"go-to-ayah",role:"tabpanel","aria-labelledby":"go-to-ayah-tab"},n.a.createElement(A,{form:this,onSubmit:this.handleViewAyah,onChange:this.handleValue,state:this.state})),n.a.createElement("div",{className:"tab-pane fade",id:"search-ayah",role:"tabpanel","aria-labelledby":"search-ayah-tab"},n.a.createElement(y,{form:this,onSubmit:this.handleSearchAyah,onChange:this.handleValue,state:this.state})),n.a.createElement("div",{className:"tab-pane fade",id:"surah-player",role:"tabpanel","aria-labelledby":"surah-player-tab"},n.a.createElement("div",{className:"alert alert-info mt-4"},"Coming soon :)")),n.a.createElement("div",{className:"tab-pane fade",id:"about",role:"tabpanel","aria-labelledby":"about-tab"},n.a.createElement("div",{className:"alert alert-info mt-4"},n.a.createElement("h5",{className:"my-2"},"Thank you for using my app"),n.a.createElement("hr",null),n.a.createElement("p",null,"Crafted with ",n.a.createElement("a",{href:"https://reactjs.org/"},"ReactJS")," with those selected components taken from ",n.a.createElement("a",{href:"https://www.npmjs.com/"},"NPM"),n.a.createElement("br",null),"API are taken from ",n.a.createElement("a",{href:"https://alquran.cloud/"},"https://alquran.cloud/"),n.a.createElement("br",null),"Developed by ",n.a.createElement("a",{href:"https://harisrozak.github.io"},"harisrozak"))))))}}]),e}(l.Component),A=function(a){var e=a.form,t=a.onSubmit,l=a.onChange,r=a.state;return n.a.createElement("form",{onSubmit:t.bind(e)},n.a.createElement("div",{className:"form-row mt-4"},n.a.createElement("div",{className:"form-group col-md-4"},n.a.createElement("label",{htmlFor:"inputSurah"},"Surah:"),n.a.createElement(d.a,{isSearchable:!0,options:r.numberedSurah,value:r.selectedSurah,onChange:l.bind(e,"surah")})),n.a.createElement("div",{className:"form-group col-md-3"},n.a.createElement("label",{htmlFor:"inputAyahFrom"},"Ayah From:"),n.a.createElement("input",{type:"number",className:"form-control",id:"inputAyahFrom",placeholder:"From ayah number",value:r.inputAyahFrom,min:"1",onChange:l.bind(e,"ayahFrom")})),n.a.createElement("div",{className:"form-group col-md-3"},n.a.createElement("label",{htmlFor:"inputAyahTo"},"Ayah To:"),n.a.createElement("input",{type:"number",className:"form-control",id:"inputAyahTo",placeholder:"To ayah number",value:r.inputAyahTo,min:"1",onChange:l.bind(e,"ayahTo")})),n.a.createElement(E,{form:e,onChange:l,state:r}),n.a.createElement("div",{className:"col-md-12 text-right"},n.a.createElement("hr",{className:"mb-4"}),n.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"View Ayah"}))))},y=function(a){var e=a.form,t=a.onSubmit,l=a.onChange,r=a.state;return n.a.createElement("form",{onSubmit:t.bind(e)},n.a.createElement("div",{className:"form-row mt-4"},n.a.createElement("div",{className:"form-group col-md-10"},n.a.createElement("label",{htmlFor:"inputSurah"},"Text to search:"),n.a.createElement("input",{className:"form-control",placeholder:"Type your string",type:"text",id:"textToSearch",value:r.textToSearch,onChange:l.bind(e,"textToSearch")})),n.a.createElement(E,{form:e,onChange:l,state:r}),n.a.createElement("div",{className:"col-md-12 text-right"},n.a.createElement("hr",{className:"mb-4"}),n.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Search Ayah"}))))},E=function(a){var e=a.form,t=a.onChange,l=a.state;return n.a.createElement("div",{className:"form-group col-md-2"},n.a.createElement("label",{htmlFor:"inputAyahTo"},"Translation:"),n.a.createElement(d.a,{isSearchable:!1,options:v,value:l.selectedTranslation,onChange:t.bind(e,"translation")}))},f=p,g=function(a){var e=a.app,t=a.data,l=a.onPlayAudio,r=t[0],s=r.ayahs,i=t[1].ayahs;return Array.isArray(s)?n.a.createElement(n.a.Fragment,null,s.map((function(a,t){return n.a.createElement(N,{key:t,surahData:r,ayah:a,translation:i[t],app:e,onPlayAudio:l})}))):n.a.createElement("div",{className:"alert alert-info"},"Data not found. Please check your request and try again.")},N=function(a){var e=a.surahData,t=a.ayah,l=a.translation,r=a.app,s=a.onPlayAudio,i=t.text;return e.number>1&&1===t.numberInSurah&&(i=i.replace("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650","")),n.a.createElement("div",{className:"ayah-container"},n.a.createElement("hr",{className:"my-4"}),n.a.createElement("div",{className:"mb-2"},n.a.createElement("span",{className:"badge badge-info mr-2"},b[e.number-1].label," : ",t.numberInSurah),n.a.createElement("span",{className:"badge badge-warning mr-2"},"Juz : ",t.juz),n.a.createElement("span",{className:"badge badge-dark mr-2 listen-button",onClick:s.bind(r,e.number,t.numberInSurah)},"Listen")),n.a.createElement("p",{className:"ayah"},i),n.a.createElement("p",{className:"translation"},l.text))},S=function(a){var e=a.app,t=a.data,l=a.onViewDetails,r=t.matches;return Array.isArray(r)?n.a.createElement(n.a.Fragment,null,r.map((function(a,t){return n.a.createElement(T,{key:t,ayah:a,app:e,onViewDetails:l})}))):n.a.createElement("div",{className:"alert alert-info"},"Data not found. Please check your request and try again.")},T=function(a){var e=a.ayah,t=a.app,l=a.onViewDetails;return n.a.createElement("div",{className:"ayah-container"},n.a.createElement("hr",{className:"my-4"}),n.a.createElement("div",{className:"mb-2"},n.a.createElement("span",{className:"badge badge-info mr-2"},b[e.surah.number-1].label," : ",e.numberInSurah),n.a.createElement("span",{className:"badge badge-dark mr-2 listen-button",onClick:l.bind(t,e.surah.number,e.numberInSurah),"data-toggle":"modal","data-target":"#exampleModalCenter"},"View Details")),n.a.createElement("p",{className:"translation"},e.text))},D=function(a){var e=a.app,t=a.response,l=a.type,r=a.isError,s=a.isLoading,i=a.onPlayAudio,o=a.matchesCount,u=a.onViewDetails;if(r)return n.a.createElement("div",{className:"alert alert-danger"},"Error requesting data. Please check your request and try again.");if(s)return n.a.createElement("div",{className:"alert alert-info"},"Loading data..");if("viewAyah"===l)return n.a.createElement(g,{app:e,data:t.data,onPlayAudio:i});if("searchAyah"===l){var c=!1!==o&&n.a.createElement("div",{className:"alert alert-info"},"Found ",n.a.createElement("strong",null,o)," matches ayah(s)");return n.a.createElement(n.a.Fragment,null,c,n.a.createElement(S,{app:e,data:t.data,onViewDetails:u}))}return n.a.createElement("span",null,"\xa0")},k=t(16),w=t.n(k),C=function(a){var e=a.app,t=a.audioData,l=a.onCloseAudio;if(a.isLoadingAudioData)return n.a.createElement("div",{className:"toast audio-container"},n.a.createElement("div",{className:"toast-header"},n.a.createElement("strong",{className:"mr-auto"},"Loading audio data.."),n.a.createElement("button",{type:"button",className:"ml-2 mb-1 close"},n.a.createElement("span",{"aria-hidden":"true"},"\xa0"))));if(t&&200===t.code){var r=t.data[0];return n.a.createElement("div",{className:"toast audio-container"},n.a.createElement("div",{className:"toast-header"},n.a.createElement("strong",{className:"mr-auto"},b[r.surah.number-1].label," : ",r.numberInSurah),n.a.createElement("small",null,"Mishary Rashid Alafasy"),n.a.createElement("button",{type:"button",className:"ml-2 mb-1 close","data-dismiss":"toast","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true",onClick:l.bind(e)},"\xd7"))),n.a.createElement("div",{className:"toast-body text-center"},n.a.createElement(w.a,{src:r.audio,autoPlay:!0,controls:!0})))}return!(!t||200===t.code)&&n.a.createElement("div",{className:"toast audio-container"},n.a.createElement("div",{className:"toast-header"},n.a.createElement("strong",{className:"mr-auto"},"Error"),n.a.createElement("button",{type:"button",className:"ml-2 mb-1 close","data-dismiss":"toast","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true",onClick:l.bind(e)},"\xd7"))),n.a.createElement("div",{className:"toast-body text-center"},"Error loading audio data, please try again."))},F=function(a){var e,t,l,r,s,i=a.app,o=a.detailsData,u=a.isLoadingDetails,c=a.onPlayAudio;if(u)e="Detail Ayah",r="Loading data..";else if(o&&200===o.code){var m=o.data[0],h=o.data[1],d=m.surah;e=b[m.surah.number-1].label+" : "+m.numberInSurah,t=n.a.createElement("button",{type:"button",className:"btn btn-sm btn-warning"},"Juz : ",m.juz),l=m.text,r=h.text,s=n.a.createElement("button",{type:"button",className:"btn btn-sm btn-info",onClick:c.bind(i,d.number,m.numberInSurah)},"Listen the Recitation")}else e="Detail Ayah",r="Error geting data, please try again later";return n.a.createElement("div",{className:"modal fade",id:"exampleModalCenter",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"exampleModalCenterTitle"},e),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("p",{className:"ayah"},l),n.a.createElement("p",{className:"translation"},r)),n.a.createElement("div",{className:"modal-footer"},t,s))))},L=function(a){function e(){var a,t;Object(i.a)(this,e);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(u.a)(this,(a=Object(c.a)(e)).call.apply(a,[this].concat(n)))).state={appTitle:"Ayah Quran Finder",apiResponse:!1,apiResponseType:!1,isLoading:!1,isError:!1,audioData:!1,isLoadingAudioData:!1,matchesCount:!1,detailsData:!1,isLoadingDetails:!1},t}return Object(m.a)(e,a),Object(o.a)(e,[{key:"componentDidUpdate",value:function(a,e){if(e.apiResponse!==this.state.apiResponse){var t=this.state.apiResponse;t&&200===t.code?this.setState({isError:!1}):this.setState({isError:!0})}if(e.detailsData!==this.state.detailsData){var l=this.state.detailsData;l&&200===l.code?this.setState({isError:!1}):this.setState({isError:!0})}e.isLoading!==this.state.isLoading&&!0===this.state.isLoading&&this.setState({isError:!1})}},{key:"handleViewAyah",value:function(a){var e=this,t=a.inputAyahFrom-1,l=a.inputAyahTo-t;l=l<1?1:l;var n="http://api.alquran.cloud/v1/surah/";n+=a.inputSurah,n+="/editions/quran-uthmani,",n+=a.inputTranslation,n+="?offset="+t+"&limit="+l,this.setState({isLoading:!0}),fetch(n).then((function(a){return a.json()})).then((function(a){e.setState({apiResponse:a,apiResponseType:"viewAyah",isLoading:!1})}),(function(a){e.setState({isLoading:!1,isError:!0,error:a})}))}},{key:"handlePlayAudio",value:function(a,e){var t=this,l="http://api.alquran.cloud/v1/ayah/";l+=a+":"+e,l+="/editions/ar.alafasy",this.setState({isLoadingAudioData:!0}),fetch(l).then((function(a){return a.json()})).then((function(a){t.setState({audioData:a,isLoadingAudioData:!1})}),(function(a){t.setState({error:a})}))}},{key:"handleCloseAudio",value:function(){this.setState({audioData:!1})}},{key:"handleSearchAyah",value:function(a){var e=this,t="http://api.alquran.cloud/v1/search/";t+=a.textToSearch,t+="/all/",t+=a.inputTranslation,console.log(t),this.setState({isLoading:!0}),fetch(t).then((function(a){return a.json()})).then((function(a){e.setState({apiResponse:a,apiResponseType:"searchAyah",matchesCount:a.data.count,isLoading:!1})}),(function(a){e.setState({isLoading:!1,isError:!0,error:a})}))}},{key:"handleViewDetails",value:function(a,e){var t=this,l="http://api.alquran.cloud/v1/ayah/";l+=a+":"+e,l+="/editions/quran-uthmani,",l+="id.indonesian",this.setState({isLoadingDetails:!0}),fetch(l).then((function(a){return a.json()})).then((function(a){t.setState({detailsData:a,isLoadingDetails:!1}),console.log(a)}),(function(a){t.setState({error:a})}))}},{key:"render",value:function(){var a=this.state.appTitle;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{appTitle:a}),n.a.createElement("div",{className:"container my-3"},n.a.createElement("div",{className:"col-md-8 offset-md-2"},n.a.createElement(f,{app:this,onViewAyah:this.handleViewAyah,onSearchAyah:this.handleSearchAyah}),n.a.createElement("div",{className:"mt-4"},n.a.createElement(D,{app:this,response:this.state.apiResponse,type:this.state.apiResponseType,isError:this.state.isError,isLoading:this.state.isLoading,onPlayAudio:this.handlePlayAudio,matchesCount:this.state.matchesCount,onViewDetails:this.handleViewDetails})))),n.a.createElement(C,{app:this,audioData:this.state.audioData,onCloseAudio:this.handleCloseAudio,isLoadingAudioData:this.state.isLoadingAudioData}),n.a.createElement(F,{app:this,detailsData:this.state.detailsData,isLoadingDetails:this.state.isLoadingDetails,onPlayAudio:this.handlePlayAudio}))}}]),e}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a8ffed73.chunk.js.map