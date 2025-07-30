import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    "heading": "My Story",
    "items": [
      {
        "title": "Chapter 1 – The Beginning",
        "href": "/story/chapter"
      },
      {
        "title": "Introduction",
        "href": "/story/introduction"
      }
    ]
  },
  {
    "spacer": true
  },
  {
    "heading": "Docs",
    "items": [
      {
        "title": "Introduction",
        "href": "/docs/basic-setup",
        "items": [
          {
            "title": "Changelog",
            "href": "/docs/basic-setup/changelog"
          },
          {
            "title": "Installation",
            "href": "/docs/basic-setup/installation"
          },
          {
            "title": "Setup",
            "href": "/docs/basic-setup/setup"
          }
        ]
      },
      {
        "title": "Introduction",
        "href": "/docs/markdown",
        "items": [
          {
            "title": "Cards",
            "href": "/docs/markdown/cards"
          },
          {
            "title": "Diagrams",
            "href": "/docs/markdown/diagrams"
          },
          {
            "title": "Filetree",
            "href": "/docs/markdown/filetree"
          },
          {
            "title": "Lists",
            "href": "/docs/markdown/lists"
          },
          {
            "title": "Maths",
            "href": "/docs/markdown/maths"
          },
          {
            "title": "Notes",
            "href": "/docs/markdown/notes"
          },
          {
            "title": "Steps",
            "href": "/docs/markdown/steps"
          },
          {
            "title": "Table",
            "href": "/docs/markdown/table"
          },
          {
            "title": "Tabs",
            "href": "/docs/markdown/tabs"
          }
        ]
      },
      {
        "title": "Navigation",
        "href": "/docs/navigation"
      },
      {
        "title": "Introduction",
        "href": "/docs/random"
      },
      {
        "title": "Structure",
        "href": "/docs/structure",
        "items": [
          {
            "title": "Introduction",
            "href": "/docs/structure/deep",
            "items": [
              {
                "title": "Introduction",
                "href": "/docs/structure/deep/deeper",
                "items": [
                  {
                    "title": "Introduction",
                    "href": "/docs/structure/deep/deeper/even-deeper"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]