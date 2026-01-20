/** Chunk was on 61323 **/
/** chunk id: 238675, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  fw: () => c,
  qy: () => o,
  sJ: () => A
});
var a, i, Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js"),
  c = ((a = {}).HCAPTCHA_RQDATA = "hCaptchaRqdata", a.SMITE_RQDATA = "SmiteRqdata", a.RECAPTCHA = "Recaptcha", a.RECAPTCHA_ENTERPRISE = "RecaptchaEnterprise", a),
  A = ((i = {})[i.EASY = 1] = "EASY", i[i.MODERATE = 2] = "MODERATE", i[i.DIFFICULT = 3] = "DIFFICULT", i[i.VERY_DIFFICULT = 4] = "VERY_DIFFICULT", i);
async function o(e, t) {
  await n.tn.post({
    url: s.ANM.CAPTCHA_TEST,
    body: {
      decider: e,
      options: t
    },
    rejectWithError: false
  })
}