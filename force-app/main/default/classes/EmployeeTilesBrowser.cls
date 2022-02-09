public with sharing class EmployeeTilesBrowser {
    @AuraEnabled(cacheable=true)
    public static List <Project_Employee__c> getEmps() {
        String query = '';
        query += 'select id, Employee_Name__r.name, Project_Name__r.name from Project_Employee__c';
        query += 'WITH SECURITY_ENFORCED ';
		query += 'ORDER BY Name';
		return Database.query(query);
    }
}