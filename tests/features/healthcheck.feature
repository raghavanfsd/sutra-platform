Feature: Health check

  Scenario: Service responds to health check
    When I send a GET request to "/health"
    Then the response status should be 200
    And the response body should contain "ok"

