import React from "react";

interface EventsType {
  tituloEvento: string;
  dataEvento: Date;
  daysToEvent: number;
}

const eventsList: EventsType[] = [
    {
        tituloEvento: "Lollapaloza",
        dataEvento: new Date("2025-12-31"),
        daysToEvent: Math.ceil(
            (new Date("2025-12-31").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
        ),
    },
    {
        tituloEvento: "The Town",
        dataEvento: new Date("2025-12-13"),
        daysToEvent: Math.ceil(
            (new Date("2025-12-13").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
        ),
    },
    {
        tituloEvento: "Rock in Rio",
        dataEvento: new Date("2025-09-15"),
        daysToEvent: Math.ceil(
            (new Date("2025-09-15").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
        ),
    },
    {
        tituloEvento: "Comic Con",
        dataEvento: new Date("2025-11-25"),
        daysToEvent: Math.ceil(
            (new Date("2025-11-25").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
        ),
    },
    {
        tituloEvento: "Carnaval",
        dataEvento: new Date("2025-02-10"),
        daysToEvent: Math.ceil(
            (new Date("2025-02-10").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
        ),
    },
    {
        tituloEvento: "Oktoberfest",
        dataEvento: new Date("2025-10-05"),
        daysToEvent: Math.ceil(
            (new Date("2025-10-05").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
        ),
    },
    {
        tituloEvento: "Bienal do Livro",
        dataEvento: new Date("2025-08-20"),
        daysToEvent: Math.ceil(
            (new Date("2025-08-20").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
        ),
    },
    {
        tituloEvento: "Festival de Cinema",
        dataEvento: new Date("2025-05-15"),
        daysToEvent: Math.ceil(
            (new Date("2025-05-15").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
        ),
    },
    {
        tituloEvento: "Virada Cultural",
        dataEvento: new Date("2025-04-20"),
        daysToEvent: Math.ceil(
            (new Date("2025-04-20").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
        ),
    },
    {
        tituloEvento: "Natal Luz",
        dataEvento: new Date("2025-12-01"),
        daysToEvent: Math.ceil(
            (new Date("2025-12-01").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
        ),
    },
];

export default function Events() {
    return (
        <div>
            {eventsList.map((evento, index) => (
                <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>
                        {evento.tituloEvento} em{" "}
                        <span
                            style={{
                                color:
                                    evento.daysToEvent <= 30
                                        ? "red"
                                        : evento.daysToEvent <= 60
                                        ? "orange"
                                        : evento.daysToEvent <= 90
                                        ? "yellow"
                                        : "green",
                            }}
                        >
                            {evento.daysToEvent} dias
                        </span>
                    </span>
                    <span>{evento.dataEvento.toLocaleDateString()}</span>
                </div>
            ))}
        </div>
    );
}
