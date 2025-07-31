Feature: Echo endpoint

  Scenario: Service responds with echoed message
    When I send a GET request to "/echo?msg=hello"
    Then the response status should be 200
    And the response body should contain "hello"