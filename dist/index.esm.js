class e{constructor(e){this.data=e}getName(){return this.data.name}getCode(){return this.data.code}getDir(){return this.data.dir}getSvgFlag(e,t){return this.data.flag.replace(/\swidth="[^"]*"/,` width="${e}"`).replace(/\sheight="[^"]*"/,` height="${t}"`)}}class t{constructor(t){this.supportedLocales=t,this.locales=t.map((t=>new e(t)));const s=document.documentElement.lang,r=this.locales.find((e=>e.getCode()===s));this.currentLocale=null!=r?r:this.locales[0]}get(){return this.locales}current(){return this.currentLocale}setLocale(e){const t=this.locales.find((t=>t.getCode()===e));return t?this.currentLocale=t:console.warn(`Locale "${e}" not found. Keeping current locale.`),this}has(e){return this.locales.some((t=>t.getCode()===e))}getByCode(e){return this.locales.find((t=>t.getCode()===e))}}export{t as default};
