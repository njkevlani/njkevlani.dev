---
title: "System Design"
---

Things to study practically:

- Database concepts - indexing, sharding, partitioning, replication, CDC.
  - Cassandra
    - Partition key, clustering key.
      - Syntax

      ```sql

      PRIMARY KEY ((customer_id), order_date, order_id)
      --            ^partition^   ^clustering columns^

      ```

    - Good for write heavy applications. writes >> reads.
    - No joins, good for simpler predictable queries.
    - No transactions.
    - Quorum concept.

- Clickhouse
- Redis concepts - available commands.
- Queuing system concepts.
- Load balancers / auto scaling.
- Batch processing - spark.
- Stream processing - flink.

Things to do in system design interview:

- Coming up with a system design diagram.
- Thinking about API contracts.
- Thinking about database design.
- Thinking about failure cases / retry cases / bottlenecks.
- Thinking about observability and alerting.
- Protecting service - rate-limiting / throttling.
