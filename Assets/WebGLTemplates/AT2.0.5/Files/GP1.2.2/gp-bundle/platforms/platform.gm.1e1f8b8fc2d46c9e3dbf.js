(self.webpackChunkgame_score_sdk=self.webpackChunkgame_score_sdk||[]).push([[369],{4340:(t,e,r)=>{"use strict";r.d(e,{D:()=>n});const n=()=>Promise.resolve({success:!1,rating:0,error:""})},501:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(4340),i=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}))};class s{constructor(){this.canAddShortcut=!1,this.canRequestReview=!1,this.isAlreadyReviewed=!1}addShortcut(){return i(this,void 0,void 0,(function*(){return!1}))}requestReview(){return(0,n.D)()}requestGameUrl(){return i(this,void 0,void 0,(function*(){}))}}},5572:(t,e,r)=>{"use strict";r.d(e,{VK:()=>n,yl:()=>i});const n={success:!0,payload:{}},i={success:!1,payload:{}}},2712:(t,e,r)=>{"use strict";r.d(e,{aD:()=>l,FU:()=>v,hc:()=>f});const n=(t,e)=>({type:t,getLink:e}),i=n("facebook",(t=>`//www.facebook.com/sharer/sharer.php?u=${t.url}`)),s=n("whatsapp",(t=>`//api.whatsapp.com/send?text=${t.text}%20${t.url}`)),o=n("telegram",(t=>`//t.me/share/url?url=${t.url}&text=${t.text}`)),a=n("vkontakte",(t=>`//vk.com/share.php?url=${t.url}&title=${t.text}&image=${t.image}`)),u=n("twitter",(t=>`//twitter.com/share?text=${t.text}&url=${t.url}`)),c=n("odnoklassniki",(t=>`//connect.ok.ru/offer?url=${t.url}&title=${t.text}&imageUrl=${t.image}`)),d=n("viber",(t=>`viber://forward?text=${t.text}%20${t.url}`)),h=n("moymir",(t=>`//connect.mail.ru/share?url=${t.url}&title=${t.text}&image_url=${t.image}`)),l=[s,o,a,c,d,h],v=[i,u,o,s,d],f=[i,u,o,s,d,a,c,h]},6390:(t,e,r)=>{"use strict";function n(){try{return window.top.location.href||location.href}catch(t){return location.href}}r.d(e,{T:()=>n})},4917:(t,e,r)=>{"use strict";function n({src:t,check:e}){return new Promise(((r,n)=>{let i=0;if(null==e?void 0:e(window))return void r();function s(){e?e(window)&&(clearInterval(i),r()):r()}if(document.querySelector(`script[src="${t}"]`)&&e)return void(i=setInterval(s,100));var o=document.getElementsByTagName("script")[0];const a=document.createElement("script");a.src=t,a.onload=s,a.onerror=n,o.parentNode.insertBefore(a,o),e&&(i=setInterval(s,100))}))}r.d(e,{Z:()=>n})},3978:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>P});var n=r(6390),i=r(4917),s=r(6558),o=r(8293),a=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}))};class u{constructor(t){this.config=t,this.readyFullscreen=(0,o._)()}get appUrl(){return(0,n.T)()}init(){return a(this,void 0,void 0,(function*(){const t=(0,o._)();return this.ready=t.ready,window.SDK_OPTIONS={gameId:this.config.appId,onEvent:e=>{switch(e.name){case"AD_SDK_FINISHED":this.readyFullscreen.done("success"===e.status);break;case"SDK_GAME_START":setTimeout((()=>this.readyFullscreen.done(!1)));break;case"SDK_READY":t.done(this)}}},(0,i.Z)({src:"https://api.gamemonetize.com/sdk.js",check:t=>"sdk"in t}).then((()=>this.sdk=window.sdk)).catch((e=>{s.kg.error(e),t.done(this)})),setTimeout((()=>t.done(this)),5e3),t.ready}))}getPlayer(){return a(this,void 0,void 0,(function*(){const t=(0,o._)();return t.done({id:0,name:"",photoSmall:"",photoMedium:"",photoLarge:""}),t.ready}))}showFullscreen(){this.readyFullscreen=(0,o._)();try{this.sdk.showBanner()}catch(t){this.readyFullscreen.abort(t)}return this.readyFullscreen.ready}showRewardedVideo(){return this.showFullscreen()}showPreloader(){return this.showFullscreen()}}var c=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}))};class d{constructor(t){this.sdk=t,this.isStickyAvailable=!1,this.stickyBannerConfig={isOverlapping:!1,height:0},this.isFullscreenAvailable=!0,this.isRewardedAvailable=!0,this.isPreloaderAvailable=!0,this.canShowFullscreenBeforeGamePlay=!0}showPreloader(){return c(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showPreloader().catch((()=>!1))}))}showFullscreen(){return c(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showFullscreen().catch((()=>!1))}))}showRewardedVideo(){return c(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showRewardedVideo().catch((()=>!1))}))}showSticky(){return c(this,void 0,void 0,(function*(){return yield this.sdk.ready,!1}))}refreshSticky(){return c(this,void 0,void 0,(function*(){return yield this.sdk.ready,!1}))}closeSticky(){return c(this,void 0,void 0,(function*(){yield this.sdk.ready}))}}var h=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}))};class l{constructor(t){this.sdk=t,this.hasCredetials=!1,this.userId="",this.isAccountLinked=!0,this.isAuthorizedAtPlatform=!0}getPlayerAuthInfo(){return h(this,void 0,void 0,(function*(){const t=(0,o._)();return t.done({}),t.ready}))}getPlayerContext(){return h(this,void 0,void 0,(function*(){return{platformData:yield this.getPlayerAuthInfo(),key:""}}))}loginPlayer(){return h(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}linkAccount(){return h(this,void 0,void 0,(function*(){return Promise.resolve(!0)}))}getPlayer(){return h(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}publishRecord(t){}isPlatformAvatar(){return!1}}var v=r(2712),f=r(5942),p=r(5572);class y{constructor(t){this.sdk=t,this.hasIntegratedAuth=!1,this.isExternalLinksAllowed=!0,this.isSecretCodeAuthAvailable=!0,this._hasAuthModal=!1,this.type=f.z.GAME_MONETIZE,this.socialNetworks=v.FU,this.isSupportsImageUploading=!1,this.hasAccountLinkingFeature=!1}getSDK(){return this.sdk}getNativeSDK(){return this.sdk.sdk}requestPermissions(){return t=this,e=void 0,n=function*(){return p.VK},new((r=void 0)||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}));var t,e,r,n}uploadImage(){return null}}class m{constructor(t){this.sdk=t,this.isSupportsShare=!0,this.isSupportsNativeShare=!1,this.isSupportsNativePosts=!1,this.isSupportsNativeInvite=!1,this.isSupportsNativeCommunityJoin=!1,this.canJoinCommunity=!0,this.isSupportShareParams=!1}get shareParams(){return{}}share(t){return Promise.resolve(!1)}post(t){return Promise.resolve(!1)}invite(t){return Promise.resolve(!1)}joinCommunity(){return Promise.resolve(!1)}getCommunityLink(t){return t}addShareParamsToUrl(t,e){return t}makeShareUrl(t){return""}getShareParam(t){return""}}var w=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}u((n=n.apply(t,e||[])).next())}))};class k{constructor(t){this.sdk=t,this.isSupportsSubscriptions=!1,this.isSupportsPayments=!1,this.isServerValidation=!1}mapProducts(t,e){return w(this,void 0,void 0,(function*(){return e}))}consumeAllExpired(t,e,r){return w(this,void 0,void 0,(function*(){}))}fetchPurchases(){return w(this,void 0,void 0,(function*(){return{payload:{},purchases:[]}}))}purchase(t){return w(this,void 0,void 0,(function*(){return{}}))}consume(t){return w(this,void 0,void 0,(function*(){return{}}))}subscribe(t,e){return w(this,void 0,void 0,(function*(){return{}}))}unsubscribe(t,e){return w(this,void 0,void 0,(function*(){return{}}))}}var g=r(501);function P(t){return e=this,r=void 0,i=function*(){const[,e]=yield Promise.all([t.setupStorage([]),t.fetchConfig()]),r=new u({appId:e.platformConfig.appId});yield r.init();const n=new l(r);return{adsAdapter:new d(r),appAdapter:new g.Z,playerAdapter:n,platformAdapter:new y(r),socialsAdapter:new m(r),paymentsAdapter:new k(r),projectConfig:e}},new((n=void 0)||(n=Promise))((function(t,s){function o(t){try{u(i.next(t))}catch(t){s(t)}}function a(t){try{u(i.throw(t))}catch(t){s(t)}}function u(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(t){t(r)}))).then(o,a)}u((i=i.apply(e,r||[])).next())}));var e,r,n,i}}}]);