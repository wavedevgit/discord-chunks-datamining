/** Chunk was on 39522 **/
/** chunk id: 966284, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => n
});
class n {
  static getSiteKey(e) {
    return null != e ? e : "production" === window.GLOBAL_ENV.PROJECT_ENV ? "6LeYqFcqAAAAAD6iZesmNgVulsO4PkpBdr6NVG6M" : "6LdtfVMqAAAAAMurhtf2pDhK0oqD4eLqeQPh025y"
  }
  static loadRecaptchaScript(e, t, r) {
    if (null != document.getElementById("recaptcha-script-".concat(this.getSiteKey(e)))) {
      null != t && (null == r || r("recaptcha-element-exists-callback"), t());
      return
    }
    let n = document.createElement("script");
    n.src = "https://www.google.com/recaptcha/enterprise.js?render=".concat(this.getSiteKey(e)), n.id = "recaptcha-script-".concat(this.getSiteKey(e)), n.async = true, n.defer = true, document.body.appendChild(n), null != t && (n.onload = () => {
      null == r || r("recaptcha-script-onload-callback"), t()
    })
  }
}