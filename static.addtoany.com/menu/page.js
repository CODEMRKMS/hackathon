! function(o, i) {
    function r() {}
    var n, d, e, s, t, a, l, c, u, f, y, m, p, v, h, _, g = ".D0Uc7kY6",
        k = o.head;
    "function" == typeof [].indexOf && k && (i.a2a = i.a2a || {}, n = i.a2a_config = i.a2a_config || {}, _ = (d = o.currentScript) && d.src ? d.src : "", e = d && !d.async && !d.defer, NodeList && NodeList.prototype.forEach && (i.a2a.init = function(e, a) {
        void 0 === a && (a = n);
        var t = ":not([data-a2a-url]):not(.a2a_target)";
        o.querySelectorAll(".a2a_dd" + t + ",.a2a_kit" + t).forEach(function(e) {
            e.matches(".a2a_kit .a2a_dd");
            e.a2a_index || null !== e.getAttribute("data-a2a-url") || e.matches(".a2a_kit .a2a_dd") || (e.dataset.a2aUrl = a.linkurl || "", a.linkname && (e.dataset.a2aTitle = a.linkname))
        }), delete n.linkurl, delete n.linkname
    }, i.a2a_init = i.a2a.init, e) && i.a2a.init("page", {
        linkurl: n.linkurl,
        linkname: n.linkname
    }), i.a2a.page || (i.a2a.page = !0, s = [], ["init_all", "svg_css"].forEach(function(t) {
        i.a2a[t] = function() {
            for (var e = [], a = 0; a < arguments.length; a++) e[a] = arguments[a];
            s.push([t, e])
        }
    }), a = (t = n.static_server) ? t + "/" : "https://static.addtoany.com/menu/", p = _ && -1 !== _.split("/")[2].indexOf("addtoany"), l = (p = (l = !t && p ? _ : a).match(/^[^?#]+\//)) ? p[0] : l, c = function(e, a, t) {
        void 0 === e && (e = l + "eso" + g + ".js"), void 0 === a && (a = !1);
        var n = o.createElement((t = void 0 === t ? !1 : t) ? "link" : "script"),
            i = "module",
            t = (t ? (t = "preload", n.href = e, n.rel = a ? i + t : t, a || (n.as = "script")) : (n.src = e, a && (n.type = i, n.onerror = function() {
                return c()
            })), d && d.nonce ? d.nonce : null);
        t && (n.nonce = t), k.appendChild(n)
    }, u = function() {
        var e = l + (t ? "" : "modules/");
        c(e + "core" + g + ".js", !0);
        var a = document.createElement("link").relList.supports("modulepreload");
        n.overlays && n.overlays.length && a && c(e + "overlays" + g + ".js", !0, !0), u = r
    }, y = "a2a_sm_ifr", m = function() {
        var e, a, t, n;
        a = "a2a_menu_container", e = o.getElementById(a), i.a2a.main = f = e || o.createElement("div"), f.id != a && (f.style.position = "static", o.body.insertBefore(f, null)), i.addEventListener("message", function(e) {
            var a = e.origin;
            a && ".addtoany.com" !== a.substr(-13) || "object" == typeof(a = e.data) && a.a2a && (a.h1 && (i.a2a.h1 = !0), "function" == typeof(e = i.a2a.userServices) ? e(a.user_services) : i.a2a.userServices = a.user_services, o.getElementById(y).style.display = "none")
        }), e = o.createElement("iframe"), a = o.createElement("div"), t = e.style, n = a.style, e.id = y, t.width = t.height = n.width = n.height = "1px", t.top = t.left = t.border = "0", t.position = n.position = "absolute", t.zIndex = n.zIndex = "100000", e.title = "AddToAny Utility Frame", e.setAttribute("aria-hidden", "true"), e.src = "https://static.addtoany.com/menu/sm.25.html#type=core&event=load", n.top = "0", n.visibility = "hidden", f.insertBefore(a, null), a.insertBefore(e, null), m = r
    }, o.body && m(), "function" == typeof(_ = "".matchAll) && _.toString().includes("[native code]") ? ("loading" !== o.readyState && u(), p = a + (t ? "" : "svg/"), o.querySelector('.a2a_dd:empty,.a2a_kit [class*="a2a_button_"]:empty') && i.a2a.h1 && c(p + "icons.38.svg.js", !1, !0)) : c(), v = function(e) {
        var a = i.a2a.core;
        "function" != typeof a || e ? e ? e() : i.a2a.core = function(e) {
            return v(e)
        } : a()
    }, _ = function() {
        h || (h = !0, u(), m(), v(), s.forEach(function(e) {
            var a;
            (a = i.a2a)[e[0]].apply(a, e[1])
        }))
    }, !(e && k.contains(d) || !o.body) || "loading" !== o.readyState ? _() : (o.addEventListener("readystatechange", _), o.addEventListener("DOMContentLoaded", _))))
}(document, window);