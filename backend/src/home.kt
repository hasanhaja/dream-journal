package org.crature

import io.ktor.application.call
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.response.respondText
import io.ktor.routing.Route
import io.ktor.routing.get

fun Route.home() {
    get("/") {
        call.respondText("Hello from backend!")
    }
}

fun Route.static() {
    static("/static") {
        resources("static")
    }
}