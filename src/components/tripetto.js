import React from 'react'

function Tripetto() {
    return (
        <div>
            <div id="tripetto"></div>
            <script src="https://cdn.jsdelivr.net/npm/tripetto-runner-foundation"></script>
            <script src="https://cdn.jsdelivr.net/npm/tripetto-runner-autoscroll"></script>
            <script src="https://cdn.jsdelivr.net/npm/tripetto-services"></script>
{/*             <script>
            var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZzFLSG5VL0FKODE1ME1UZHBRc3o2Tnp4L3ZnZTJ6dm9oVWNuQWtQYnZndz0iLCJkZWZpbml0aW9uIjoiWFhkWXF0MEhwR0hUbURsYm9oUW80dnFwaXdQbVkyMmlLLzNBYzR0MDdVUT0iLCJ0eXBlIjoiY29sbGVjdCJ9.oiroUEAtvtJ3xGmknhssQiQ0sCfK9olf1irCZ56ko3s" });

            TripettoAutoscroll.run({
                element: document.getElementById("tripetto"),
                definition: tripetto.definition,
                styles: tripetto.styles,
                l10n: tripetto.l10n,
                locale: tripetto.locale,
                translations: tripetto.translations,
                attachments: tripetto.attachments,
                onSubmit: tripetto.onSubmit
            });
            </script> */}
        </div>
    
  )
}

export default Tripetto