/** Chunk was on 12192 **/
/** chunk id: 756148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => r
});
class r {
  static getSiteKey(e) {
    return null != e ? e : "production" === window.GLOBAL_ENV.PROJECT_ENV ? "6LeYqFcqAAAAAD6iZesmNgVulsO4PkpBdr6NVG6M" : "6LdtfVMqAAAAAMurhtf2pDhK0oqD4eLqeQPh025y"
  }
  static loadRecaptchaScript(e, t, n) {
    if (null != document.getElementById("recaptcha-script-".concat(this.getSiteKey(e)))) {
      null != t && (null == n || n("recaptcha-element-exists-callback"), t());
      return
    }
    let r = document.createElement("script");
    r.src = "https://www.google.com/recaptcha/enterprise.js?render=".concat(this.getSiteKey(e)), r.id = "recaptcha-script-".concat(this.getSiteKey(e)), r.async = true, r.defer = true, document.body.appendChild(r), null != t && (r.onload = () => {
      null == n || n("recaptcha-script-onload-callback"), t()
    })
  }
}